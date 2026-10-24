(() => {
  const click = selector => {
    const element = document.querySelector(selector);
    if (!element || element.disabled) throw new Error(`Missing/disabled control: ${selector}`);
    element.click();
  };
  const choose = (kind, id) => click(`[data-select-kind="${kind}"][data-select-id="${id}"]`);
  const confirm = () => {
    click('#confirmBtn');
    if (document.querySelector('#evidenceModal:not(.hidden)')) closeModal();
    let limit = 12;
    while (state.uiScene && limit-- > 0) click('[data-story-next]');
    if (state.uiScene) throw new Error(`Story transition did not finish: ${state.uiScene}`);
  };
  const verifyNotebook = (stage) => {
    if (document.querySelectorAll('[data-dossier-open]').length !== 3) throw new Error(`${stage}: expected exactly three document items`);
    const expectedQuestions = stage === 'round5' ? 3 : 2;
    if (document.querySelectorAll('[data-question-review]').length !== expectedQuestions) throw new Error(`${stage}: answered question list is incorrect`);
    if (stage === 'round3' && document.querySelectorAll('[data-financial-review]').length) throw new Error('Financial statements appeared before Round 4 was confirmed');
    if (['round4','round5'].includes(stage) && document.querySelectorAll('[data-financial-review]').length !== 3) throw new Error('Round 4 must unlock exactly three statement review items');
    const before = JSON.stringify({ financialState:state.financialState, reputation:state.reputation, evidenceLedger:state.evidenceLedger, answeredQuestions:state.answeredQuestions, decisionHistory:state.decisionHistory, structured:state.structured, finalOutcome:state.finalOutcome });
    if (stage === 'round4') {
      for (const [id, title, marker] of [['income','Income Statement','11,540'],['balance','Balance Sheet','Balance Sheet figures'],['metrics','Operating Metrics','Consolidated SSS']]) {
        click(`[data-financial-review="${id}"]`);
        if (document.querySelector('#evidenceModal').classList.contains('hidden') || document.querySelector('#modalTitle').textContent !== title || !document.querySelector('#modalBody').innerText.includes(marker)) throw new Error(`Incorrect financial review popup: ${title}`);
        closeModal();
      }
    }
    click('[data-question-review="CH1-C"]');
    if (document.querySelector('#modalTitle').textContent !== 'CH1-C · Round 3' || !document.querySelector('#modalBody').innerText.includes('What happens to liquidity if holiday sales miss by 10%?') || !document.querySelector('#modalBody').innerText.includes('Operating cash remains sufficient')) throw new Error('Round 3 question popup is incorrect');
    closeModal();
    if (stage === 'round5') {
      click('[data-question-review="CH2-F"]');
      if (document.querySelector('#modalTitle').textContent !== 'CH2-F · Round 5' || !document.querySelector('#modalBody').innerText.includes('What is your biggest concern over the next 12 months?') || !document.querySelector('#modalBody').innerText.includes('Liquidity and refinancing')) throw new Error('Round 5 question popup is incorrect');
      closeModal();
    }
    const after = JSON.stringify({ financialState:state.financialState, reputation:state.reputation, evidenceLedger:state.evidenceLedger, answeredQuestions:state.answeredQuestions, decisionHistory:state.decisionHistory, structured:state.structured, finalOutcome:state.finalOutcome });
    if (before !== after) throw new Error('Opening or closing a notebook review changed case/scoring state');
  };
  const runPath = (name, config, takeSummaryShot = false) => {
    if (state.status === 'COMPLETED') click('#reopenCaseBtn');
    else if (document.querySelector('[data-menu-action="start"]')) click('[data-menu-action="start"]');
    else startCase(true);
    let limit = 12;
    while (state.uiScene && limit-- > 0) click('[data-story-next]');
    if (state.uiScene) throw new Error('Opening story did not finish');
    confirm(); // intake
    confirm(); // clinic briefing
    for (const doc of config.docs) choose('dossier', doc);
    confirm();
    if (document.querySelector('#evidenceModal:not(.hidden)')) closeModal();
    for (const question of config.q1) choose('question1', question);
    confirm();
    if (name === 'Strong communication (B/C/A/C)') verifyNotebook('round3');
    if (name === 'Strong communication (B/C/A/C)' && document.querySelectorAll('[data-financial-review]').length) throw new Error('Financial statements appeared before Round 4 confirmation');
    confirm(); // audited statements screen
    if (name === 'Strong communication (B/C/A/C)') verifyNotebook('round4');
    choose('question2', config.q2);
    confirm();
    if (name === 'Strong communication (B/C/A/C)') verifyNotebook('round5');
    choose('diagnosis', config.diagnosis);
    confirm();
    choose('treatment', config.treatment);
    confirm();
    choose('timing', config.timing);
    confirm();
    for (const priority of config.priorities) choose('priority', priority);
    for (const [id, answer] of Object.entries(config.communication)) choose('communication-answer', `${id}:${answer}`);
    const communicationLabels = [...document.querySelectorAll('.communication-scenario > h3')].map(node => node.textContent);
    if (name === 'Strong communication (B/C/A/C)' && communicationLabels.join('|') !== 'Q1 — Explaining trade-offs|Q2 — Checking understanding|Q3 — Communicating uncertainty|Q4 — Turning advice into action') throw new Error(`Communication display labels must be Q1–Q4: ${JSON.stringify(communicationLabels)}`);
    if (document.querySelector('[data-select-kind="approval-ack"]')) choose('approval-ack', 'accept-fallback');
    if (document.querySelectorAll('.communication-scenario').length !== 4 || document.querySelectorAll('[data-select-kind="communication-answer"]').length !== 12) throw new Error('Round 9 communication UI is incomplete');
    if (document.body.innerText.includes('Choose the main risk to monitor')) throw new Error('Removed Risk Plan is visible');
    confirm();
    while (state.currentScreen === 10) confirm();
    if (state.currentScreen !== 11) throw new Error('Did not reach Round 11');
    choose('reassess-mode', config.mode);
    if (['DIAGNOSIS', 'BOTH'].includes(config.mode)) choose('reassess-diagnosis', config.nextDiagnosis || 'F');
    if (['TREATMENT', 'BOTH'].includes(config.mode)) choose('reassess-treatment', config.nextTreatment || 'C');
    choose('reassess-reason', config.reason);
    choose('reassess-metric', config.metric);
    if (validateScreen(state)) throw new Error(`${name} Round 11 validation: ${validateScreen(state)}`);
    confirm();
    if (state.status !== 'COMPLETED' || !state.finalOutcome) throw new Error(`${name} did not complete`);
    if (!Number.isFinite(state.finalOutcome.overall) || state.finalOutcome.overall < 0 || state.finalOutcome.overall > 100) throw new Error(`${name} invalid score`);
    const result = {
      name, choices: { ...config, approvalAck: state.structured.approvalAck },
      total: state.finalOutcome.overall,
      process: state.finalOutcome.process,
      financial: state.finalOutcome.financial,
      clientExperience: state.finalOutcome.clientExperience,
      ethicsCap: state.finalOutcome.process.ethicsCap,
      davidResponse: state.clientState.consent,
      reassessment: state.reassessment,
      ending: state.finalOutcome.ending.title
    };
    if (takeSummaryShot) window.__medifinHundredSummary = true;
    return result;
  };
  const common = {
    docs: ['HS-A','HS-D','HS-G'], q1: ['CH1-C','CH1-D'], q2: 'CH2-F',
    diagnosis: 'D', treatment: 'F', timing: 'C',
    priorities: ['Suppliers','Creditors','Governance & Family'],
    communication: {Q1:'B',Q2:'C',Q3:'A',Q7:'C'},
    mode: 'TREATMENT', nextTreatment: 'C', reason: 'uncertain', metric: 'debt'
  };
  const runs = [];
  runs.push(runPath('Strong communication (B/C/A/C)', common, true));
  runs.push(runPath('Medium communication', {...common, communication:{Q1:'C',Q2:'A',Q3:'C',Q7:'B'}}));
  runs.push(runPath('Weak communication', {...common, communication:{Q1:'A',Q2:'B',Q3:'B',Q7:'A'}}));
  runs.push(runPath('Weak diagnosis, treatment and preparation', {
    ...common, diagnosis:'A', treatment:'D', timing:'D',
    priorities:['Employees','Customers','Landlords'],
    communication:{Q1:'B',Q2:'C',Q3:'A',Q7:'C'}, mode:'KEEP', reason:'uncertain', metric:'cash'
  }));
  runs.push(runPath('Alternate investigation with KEEP', {
    ...common, docs:['HS-A','HS-B','HS-E'], q1:['CH1-A','CH1-B'], q2:'CH2-A',
    diagnosis:'D', treatment:'E', timing:'B', mode:'KEEP', reason:'confirmed', metric:'debt'
  }));
  runs.push(runPath('Weak decisions across communication and treatment', {
    ...common, diagnosis:'A', treatment:'D', timing:'D',
    priorities:['Employees','Customers','Landlords'],
    communication:{Q1:'A',Q2:'B',Q3:'B',Q7:'A'}, mode:'KEEP', reason:'uncertain', metric:'cash'
  }));
  if (runs[0].total !== 100) throw new Error(`UI route did not reach 100: ${JSON.stringify(runs[0])}`);
  if (runs[5].total >= 50) throw new Error(`UI route did not fall below 50: ${JSON.stringify(runs[5])}`);
  if (!(runs[1].process.dimensions.communication < runs[0].process.dimensions.communication && runs[2].process.dimensions.communication < runs[1].process.dimensions.communication)) throw new Error('Communication scenario tiers did not change scores as expected');
  if (runs.some(run => run.total > 100 || run.total < 0)) throw new Error('Score outside 0–100');
  return { runs, allCompleted: runs.length === 6, scoreRangeValid: true };
})()
