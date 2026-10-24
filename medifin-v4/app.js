/* UI adapter for the Case 01 engine in engine.js. */
function optionCard(item, selected, attrs = '') {
  return `<button type="button" class="option-card ${selected ? 'selected' : ''}" aria-pressed="${selected}" ${attrs}><span class="option-top"><span class="option-check" aria-hidden="true">✓</span></span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.desc || '')}</p></button>`;
}
function renderStepper(state) {
  return `<nav class="stepper-card" aria-label="Case progress"><button class="stepper-arrow" type="button" data-step-scroll="-1" aria-label="View previous screens">‹</button><div class="stepper-track" tabindex="0" aria-label="Case screens; scroll horizontally to view more">${SCREEN_LABELS.map((label, i) => `<div class="step ${i === state.currentScreen ? 'current' : i < state.currentScreen ? 'done' : ''}" ${i === state.currentScreen ? 'aria-current="step"' : ''}><span>${i}</span><b>${escapeHtml(label)}</b></div>`).join('')}</div><button class="stepper-arrow" type="button" data-step-scroll="1" aria-label="View next screens">›</button></nav>`;
}
function renderNotebook(state) {
  const opened = [...new Set(state.selectedDossiers || [])].filter((id) => DOSSIERS[id]);
  const dossierList = opened.map((id) => { const d = DOSSIERS[id]; return `<button class="notebook-item dossier-notebook-item" type="button" data-dossier-open="${escapeHtml(id)}"><span class="notebook-dot"></span><span><strong>${escapeHtml(dossierLabel(d.id))} · ${escapeHtml(d.title)}</strong><small>Open the file to read the full contents</small></span></button>`; }).join('');
  const questionBank = [...QUESTIONS_1, ...QUESTIONS_2];
  const answered = [...new Map((state.answeredQuestions || []).filter((item) => item?.id && item.answer != null).map((item) => [item.id, item])).values()];
  const answeredList = answered.map((item) => {
    const question = questionBank.find((candidate) => candidate.id === item.id);
    if (!question) return '';
    const round = item.id.startsWith('CH1-') ? 'Round 3' : 'Round 5';
    return `<button class="notebook-item" type="button" data-question-review="${escapeHtml(item.id)}"><span class="notebook-dot"></span><span><strong>${escapeHtml(item.id)} · ${escapeHtml(round)}</strong><small>${escapeHtml(displayDossierText(question.title))}</small></span></button>`;
  }).join('');
  const financialUnlocked = isFinancialReviewUnlocked(state);
  const statementItems = financialUnlocked ? [
    ['income', 'Income Statement'], ['balance', 'Balance Sheet'], ['metrics', 'Operating Metrics']
  ].map(([id, title]) => `<button class="notebook-item" type="button" data-financial-review="${id}"><span class="notebook-dot"></span><span><strong>${title}</strong><small>Round 4 · Audited consolidated statements</small></span></button>`).join('') : '';
  const group = (title, count, items, empty) => `<section class="notebook-group"><div class="notebook-group-heading"><h3>${title}</h3><span>${count}</span></div>${items ? `<div class="notebook-list">${items}</div>` : `<p class="ledger-empty">${empty}</p>`}</section>`;
  return `<section class="state-card notebook-card"><div class="card-label-row"><span class="card-label">EVIDENCE NOTEBOOK</span><span class="notebook-count">${opened.length + answered.length + (financialUnlocked ? 3 : 0)} items</span></div>${group('Documents', opened.length, dossierList, 'No documents have been opened yet.')}${group('Answered questions', answered.length, answeredList, 'No questions have been answered yet.')}${financialUnlocked ? group('Financial statements', 3, statementItems, '') : ''}</section>`;
}
function isFinancialReviewUnlocked(state) {
  return (state.confirmedScreens || []).includes(4) || state.currentScreen > 4 || ['TK-FS-INCOME', 'TK-FS-BALANCE', 'TK-FS-METRICS'].every((id) => evidenceStatus(state, id) !== 'LOCKED');
}
function renderSidebar(state) {
  const f = state.financialState; const showFinance = state.currentScreen >= 4;
  return `<aside class="side-column"><section class="state-card client-card" aria-label="Client David Anderson"><div class="client-pill">Client: David · CEO</div><img class="client-portrait" src="asset/images/round1/david.webp" alt="Portrait of David Anderson" /></section>${showFinance ? `<section class="state-card financial-card"><div class="card-label">KNOWN FIGURES</div><div class="known-figure"><span>Cash FY2026</span><strong>$${money(f.cash)}m</strong></div><div class="known-figure"><span>Debt snapshot</span><strong>$${money(f.debt)}m</strong></div><div class="known-figure"><span>Measured EBITDA</span><strong>$${money(f.ebitda, 1)}m</strong></div></section>` : ''}${renderNotebook(state)}${state.eventLedger.length ? `<section class="state-card ledger-card"><div class="card-label-row"><span class="card-label">TIMELINE</span><span class="notebook-count">${state.eventLedger.length} updates</span></div><div class="event-list">${state.eventLedger.slice(-3).map((e) => `<div class="ledger-item"><i></i><span><strong>${escapeHtml(e.title)}</strong><br />${escapeHtml(e.text)}</span></div>`).join('')}</div></section>` : ''}</aside>`;
}

// Story scenes sit between numbered screens; they do not touch the scoring engine.
const dossierLabel = (id) => `Doc ${String(id).replace('HS-', '')}`;
const displayDossierText = (value) => String(value ?? '').replace(/(?:Document|Hồ sơ|HS-)\s*([A-G])\b/gi, (_, letter) => `Doc ${letter.toUpperCase()}`);
function renderStoryScene(state) {
  const scene = state.uiScene;
  const imageScenes = {
    'before-round-2': ['asset/images/story/round1-before-round2.webp', 'Continue to Round 2', 'David says he has brought detailed documents and there is only time to review three files.'],
    'before-round-4': ['asset/images/story/round3-before-round4.webp', 'Continue to Round 4', "The CFO presents Toy Kingdom's audited consolidated financial statements."],
    'before-round-5-governance': ['asset/images/story/round4-governance-before-round5.webp', 'Continue to Round 5', 'The CFO explains that the $149 million in Other Income, net largely comes from life insurance proceeds held in disputed escrow, then provides the complete file.'],
    'before-round-5-common': ['asset/images/story/round4-standard-before-round5.webp', 'Continue to Round 5', 'The doctor has reviewed the profiles and asks the client to answer the next question truthfully.'],
    'before-round-8': ['asset/images/story/before-round-8-timing.webp', 'Continue to Round 8', 'David asks when would be the right time to take action.'],
    'before-round-11': ['asset/images/story/before-round-11-reassessment.webp', 'Continue to Round 11', 'David says the storm has exposed Michael’s position and asks whether to change the diagnosis or treatment plan.']
  };
  if (imageScenes[scene]) {
    const [src, label, description] = imageScenes[scene];
    const nextScene = scene === 'before-round-5-governance' ? 'before-round-5-common' : 'game';
    return `<section class="story-image-scene story-${scene}" aria-label="Dialogue scene"><div class="story-image-frame"><img src="${src}" alt="${description}" /><button class="story-next-hotspot" type="button" data-story-next="${nextScene}" aria-label="${label}" title="${label}"></button></div></section>`;
  }
  if (scene === 'check') return `<section class="story-scene story-check" aria-label="New message"><div class="story-check-left"><img src="asset/images/round1/counselor-phone.webp" alt="The counselor checks a phone" /></div><div class="story-check-right"><img class="story-watercolor" src="asset/images/round1/message-bg.webp" alt="" /><img class="story-notification" src="asset/images/round1/message-phone.webp" alt="New message notification" /><button class="story-primary" type="button" data-story-next="inbox">Check it out</button></div></section>`;
  if (scene === 'inbox') return `<section class="story-scene story-inbox" aria-label="Client messages"><div class="inbox-phone"><div class="inbox-speaker" aria-hidden="true"></div><div class="inbox-list"><button class="inbox-message" type="button" data-story-next="game"><img src="asset/images/round1/david.webp" alt="" /><span><strong>David Anderson</strong><small>CEO · Toy Kingdom Inc.</small><span>Sales keep falling. Some measures have improved, but the company is still struggling.</span></span></button><div class="inbox-placeholder" aria-disabled="true"><span class="inbox-avatar" aria-hidden="true"></span><span>No other messages</span></div><div class="inbox-placeholder" aria-disabled="true"><span class="inbox-avatar" aria-hidden="true"></span><span>No other messages</span></div></div></div><p>Select David's message to open his case.</p></section>`;
  if (scene?.startsWith('doc-')) {
    const docs = Object.values(DOSSIERS).map((d) => `<button type="button" class="doc-tab" data-dossier-open="${escapeHtml(d.id)}" ${hasDossier(state, d.id) ? '' : 'disabled'}>${escapeHtml(dossierLabel(d.id))}</button>`).join('');
    const nav = `<nav class="doc-scene-nav" aria-label="Selected files">${docs}</nav>`;
    if (scene === 'doc-intro') return `<section class="story-scene doc-scene doc-intro">${nav}<div class="doc-intro-main"><img src="asset/images/round2/doc-g-david.webp" alt="David Anderson at his desk" /><div class="doc-intro-copy"><span>Doc G · GOVERNANCE & FAMILY</span><p>${escapeHtml(DOSSIERS['HS-G'].content[1])}</p><button class="story-primary" type="button" data-story-next="doc-envelope">Continue</button></div></div></section>`;
    if (scene === 'doc-envelope') return `<section class="story-scene doc-scene doc-envelope">${nav}<div class="doc-envelope-main"><button type="button" class="envelope-open" data-story-next="doc-letter" aria-label="Open Doc G envelope"><span class="sr-only">Open Doc G envelope</span></button><p>Select the envelope to open the confidential letter.</p><button class="story-primary" type="button" data-story-next="doc-letter">Open letter</button></div></section>`;
    if (scene === 'doc-letter') return `<section class="story-scene doc-scene doc-letter">${nav}<div class="doc-letter-main"><h2>Doc G · Confidential Contingency Correspondence</h2><button class="doc-letter-zoom" type="button" data-letter-zoom aria-label="Zoom the letter in or out" aria-pressed="false"><img src="asset/images/round2/doc-g-letter-doc.webp" alt="Confidential letter in Doc G" /></button><p>Select the letter to enlarge it for reading.</p><button class="story-primary" type="button" data-story-next="game">Continue to questions</button></div></section>`;
  }
  return '';
}

function renderDossierScreen(state) {
  const selected = state.draftSelection.dossiers; return `<div class="options-wrap"><div class="select-helper"><span>Choose exactly three docs to open</span><b>${selected.length}/3</b></div><div class="option-grid dossier-grid">${Object.values(DOSSIERS).map((d) => optionCard({ id: d.id, title: `${dossierLabel(d.id)} — ${d.title}`, desc: `${d.scope}. ${d.summary}` }, selected.includes(d.id), `data-select-kind="dossier" data-select-id="${d.id}"`)).join('')}</div></div>`;
}
function renderQuestionScreen(state) {
  const selected = state.draftSelection.questions1; return `<div class="options-wrap"><div class="select-helper"><span>Choose exactly two questions</span><b>${selected.length}/2</b></div><div class="option-grid">${QUESTIONS_1.map((q) => optionCard({ id: q.id, title: displayDossierText(q.title), desc: 'Ask for more detail about one part of the case.' }, selected.includes(q.id), `data-select-kind="question1" data-select-id="${q.id}"`)).join('')}</div></div>`;
}
function renderIncomeStatementTable() {
  return `<div class="table-wrap notebook-financial-table"><table><caption>Consolidated Income Statement · USD millions</caption><thead><tr><th>Metric</th><th>FY2024</th><th>FY2025</th><th>FY2026</th></tr></thead><tbody><tr><th>Net Sales</th><td>12,361</td><td>11,802</td><td>11,540</td></tr><tr><th>Cost of Sales</th><td>(7,931)</td><td>(7,576)</td><td>(7,432)</td></tr><tr><th>Gross Margin</th><td>4,430</td><td>4,226</td><td>4,108</td></tr><tr><th>SG&A</th><td>(3,915)</td><td>(3,593)</td><td>(3,480)</td></tr><tr><th>Depreciation &amp; Amortization</th><td>(377)</td><td>(343)</td><td>(317)</td></tr><tr><th>Other Income, net</th><td>53</td><td>88</td><td>149</td></tr><tr><th>Operating Earnings</th><td>191</td><td>378</td><td>460</td></tr><tr><th>Interest Expense</th><td>(451)</td><td>(429)</td><td>(457)</td></tr><tr><th>Interest Income</th><td>4</td><td>3</td><td>2</td></tr><tr><th>Earnings / (Loss) Before Tax</th><td>(256)</td><td>(48)</td><td>5</td></tr><tr><th>Income Tax Expense</th><td>(32)</td><td>(76)</td><td>(34)</td></tr><tr><th>Net Loss</th><td>(288)</td><td>(124)</td><td>(29)</td></tr><tr><th>Noncontrolling Interest</th><td>(4)</td><td>(6)</td><td>(7)</td></tr><tr><th>Net Loss attributable</th><td>(292)</td><td>(130)</td><td>(36)</td></tr></tbody></table></div>`;
}
function renderOperatingMetricsTable() {
  return `<div class="table-wrap notebook-financial-table"><table><caption>Operating Metrics</caption><thead><tr><th>Metric</th><th>FY2024</th><th>FY2025</th><th>FY2026</th></tr></thead><tbody><tr><th>Gross Margin %</th><td>35.8%</td><td>35.8%</td><td>35.6%</td></tr><tr><th>SG&amp;A / Sales</th><td>31.7%</td><td>30.4%</td><td>30.2%</td></tr><tr><th>Adjusted EBITDA</th><td>$642m</td><td>$800m</td><td>$792m</td></tr><tr><th>Consolidated SSS</th><td>0.0%</td><td>+0.9%</td><td>−1.4%</td></tr></tbody></table></div>`;
}
function renderBalanceSheetFigures() {
  return `<section class="balance-sheet-figures"><h3>Balance Sheet figures · USD millions</h3><div class="facts-grid"><div><span>Cash</span><strong>$566m</strong></div><div><span>Receivables</span><strong>$255m</strong></div><div><span>Inventory</span><strong>$2.476bn</strong></div><div><span>Current assets</span><strong>$3.389bn</strong></div><div><span>Property &amp; equipment</span><strong>$3.067bn</strong></div><div><span>Total debt</span><strong>~$4.8bn</strong></div><div><span>Secured debt</span><strong>~$3.4bn</strong></div><div><span>Stockholders’ deficit</span><strong>~$1.3bn</strong></div></div></section>`;
}
function renderFinancials() {
  const answers = state.answeredQuestions?.filter((q) => q.id.startsWith('CH1-')) || [];
  const answerBlock = answers.length ? `<section class="answer-block"><span class="card-label">ANSWER RECEIVED</span>${answers.map((q) => `<div><strong>${escapeHtml(q.id)}</strong><p>${escapeHtml(displayDossierText(q.answer))}</p></div>`).join('')}</section>` : '';
  const governanceNote = hasDossier(state, 'HS-G') ? '<section class="answer-block governance-note"><span class="card-label">AUTHORIZED ANNOTATION</span><p>Most of the $149m in Other Income, net comes from life insurance proceeds held in a disputed escrow account. David wants to reinvest; Michael and Richard want an immediate distribution.</p></section>' : '';
  return `<div class="financial-statement-content">${renderIncomeStatementTable()}${renderOperatingMetricsTable()}${renderBalanceSheetFigures()}${answerBlock}${governanceNote}</div>`;
}
function renderQuestion2(state) {
  const selected = state.draftSelection.question2; return `<div class="options-wrap"><div class="select-helper"><span>Choose one question</span><b>${selected ? '1/1' : '0/1'}</b></div><div class="option-grid">${QUESTIONS_2.map((q) => optionCard({ id: q.id, title: displayDossierText(q.title), desc: 'Use one question to test your hypothesis before finalizing the plan.' }, selected === q.id, `data-select-kind="question2" data-select-id="${q.id}"`)).join('')}</div></div>`;
}
function renderDiagnosis(state, reassessment = false) {
  const selectedDiagnosis = reassessment ? state.draftSelection.reassessmentDiagnosis : state.draftSelection.diagnosis;
  return `<div class="option-grid diagnosis-grid">${DIAGNOSES.map((d) => optionCard(d, selectedDiagnosis === d.id, `data-select-kind="${reassessment ? 'reassess-diagnosis' : 'diagnosis'}" data-select-id="${d.id}"`)).join('')}</div>`;
}
function renderTreatment(state, reassessment = false) {
  const selected = reassessment ? state.draftSelection.reassessmentTreatment : state.draftSelection.treatment; return `<div class="option-grid">${TREATMENTS.map((t) => optionCard(t, selected === t.id, `data-select-kind="${reassessment ? 'reassess-treatment' : 'treatment'}" data-select-id="${t.id}"`)).join('')}</div>`;
}
function reassessmentReasonQuestion(mode) {
  return ({
    KEEP: 'Why are you keeping both the diagnosis and treatment?',
    DIAGNOSIS: 'Why are you changing the diagnosis?',
    TREATMENT: 'Why are you changing the treatment?',
    BOTH: 'Why are you changing both the diagnosis and treatment?'
  })[mode] || 'Why are you reviewing the diagnosis and treatment?';
}
function miniChoice(title, options, selected, kind, hint = 'Choose one option.') {
  return `<section class="structured-choice"><h3 class="choice-question">${escapeHtml(title)}</h3><p class="choice-hint">${escapeHtml(hint)}</p><div class="option-grid compact-grid">${options.map((o) => optionCard(o, selected === o.id, `data-select-kind="${kind}" data-select-id="${o.id}"`)).join('')}</div></section>`;
}
const COMMUNICATION_SCENARIOS = [
  { id: 'Q1', title: 'Q1 — Explaining trade-offs', client: 'So my monthly payment goes down. That means this plan is cheaper, right?', context: 'The proposed plan lowers monthly payments but extends the repayment period and increases total interest.', question: 'What would you say next?', options: [
    'It will definitely make your monthly budget easier. That\'s the main advantage.',
    'Your monthly payment would fall, but you\'d pay more overall. Let\'s compare both costs before deciding.',
    'The repayment schedule shows the full calculation. Let me walk you through the figures again.'
  ] },
  { id: 'Q2', title: 'Q2 — Checking understanding', client: 'Yeah, I think I get it. Can we move on?', context: 'Earlier, David confused the amount he pays each month with the total cost of the plan.', question: 'How would you make sure David understands?', options: [
    'Would it help if I summarized the key numbers one more time?',
    'I\'ll highlight the important figures in the report so you can review them later.',
    'Just to check that I\'ve explained it clearly, what do you think changes if you choose this plan?'
  ] },
  { id: 'Q3', title: 'Q3 — Communicating uncertainty', client: 'If I follow your recommendation, can you guarantee the bank will approve it?', context: 'The bank has not reviewed David\'s latest application.', question: 'How would you respond?', options: [
    'I can\'t guarantee approval. Here\'s what we still need to verify and what we\'ll do if the bank says no.',
    'Your financial position looks stronger now, so approval should be likely.',
    'Bank approval is outside my control. We should wait for their decision before discussing the next step.'
  ] },
  { id: 'Q7', title: 'Q4 — Turning advice into action', client: 'Okay, I think we have a plan. What exactly should I do after this meeting?', context: '', question: 'How would you close the consultation?', options: [
    'I\'ll send you the full financial plan with all the calculations and recommendations.',
    'Start with the most urgent action. We can discuss everything else in our next meeting.',
    'Let\'s agree on your first two actions, their deadlines, and what we\'ll review together next week.'
  ] }
];
function renderBriefing(state) {
  const answers = state.draftSelection.communicationAnswers || {};
  return `<section class="structured-panel communication-scenarios"><div class="card-label">COMMUNICATION SCENARIOS</div><p class="choice-hint">Choose the response that best fits each situation. These are practice scenarios and do not describe events that have occurred in this case.</p>${COMMUNICATION_SCENARIOS.map((scenario) => `<section class="communication-scenario" aria-labelledby="scenario-${scenario.id}"><h3 id="scenario-${scenario.id}">${escapeHtml(scenario.title)}</h3><blockquote>David: “${escapeHtml(scenario.client)}”</blockquote>${scenario.context ? `<p class="communication-context">Context: ${escapeHtml(scenario.context)}</p>` : ''}<h4>${escapeHtml(scenario.question)}</h4><div class="option-grid compact-grid">${scenario.options.map((text, index) => { const answer = String.fromCharCode(65 + index); return optionCard({ title: `${answer}. “${text}”`, desc: '' }, answers[scenario.id] === answer, `data-select-kind="communication-answer" data-select-id="${scenario.id}:${answer}"`); }).join('')}</div></section>`).join('')}</section>`;
}
function renderScreen(state) {
  const s = state.currentScreen; if (s === 0) return `<section class="intake-card"><div class="eyebrow"><span class="eyebrow-line"></span> CONFIDENTIAL · CLIENT FILE</div><h1>Toy Kingdom Inc.<br /><em>The Anderson family</em></h1><p class="hero-lead">A retailer is improving operations but lacks reinvestment capital and family agreement.</p><div class="intake-facts"><div><span>Industry</span><strong>Specialty retail · toys</strong></div><div><span>FY2026 revenue</span><strong>$11.540bn</strong></div><div><span>Scale</span><strong>~1,700 stores</strong></div><div><span>Ownership</span><strong>Anderson 78% · Fund 22%</strong></div><div><span>Adjusted EBITDA</span><strong>$792m</strong></div><div><span>Operating Earnings</span><strong>$460m</strong></div><div><span>Net Loss attributable</span><strong>−$36m</strong></div><div><span>Major transaction</span><strong>Simulated LBO $6.6bn · 2015</strong></div></div></section>`;
  if (s === 1) return `<section class="dialogue-card"><div class="eyebrow"><span class="eyebrow-line"></span> DAVID ANDERSON · CEO</div><blockquote>“Sales keep falling. Amazon, Walmart, and online retail are changing the whole industry. Some measures have improved, yet the company is finding it harder to cope.”</blockquote><blockquote>“I found out Michael has hired his own lawyer, and Richard has quietly offered international assets for sale without going through the board. I do not know whether the problem lies in the market or in my own family.”</blockquote></section>`;
  if (s === 2) return renderDossierScreen(state);
  if (s === 3) return renderQuestionScreen(state);
  if (s === 4) return `<div class="statement-wrap">${renderFinancials()}</div>`;
  if (s === 5) return renderQuestion2(state);
  if (s === 6) { const answer = state.answeredQuestions?.find((q) => q.id === state.selectedQuestion2); return `<div class="options-wrap diagnosis-wrap">${answer ? `<section class="answer-block compact"><span class="card-label">ANSWER RECEIVED</span><p>${escapeHtml(answer.id)} · ${escapeHtml(displayDossierText(answer.answer))}</p></section>` : ''}${renderDiagnosis(state)}</div>`; }
  if (s === 7) return `<div class="options-wrap"><div class="select-helper"><span>Choose one treatment plan</span><b>${state.draftSelection.treatment ? '1/1' : '0/1'}</b></div>${renderTreatment(state)}</div>`;
  if (s === 8) return `<div class="options-wrap"><div class="select-helper"><span>Choose one time to act</span><b>${state.draftSelection.timing ? '1/1' : '0/1'}</b></div><div class="option-grid">${TIMINGS.map((t) => optionCard(t, state.draftSelection.timing === t.id, `data-select-kind="timing" data-select-id="${t.id}"`)).join('')}</div></div>`;
  if (s === 9) { const proposed = state.draftSelection.treatment; const tier = reputationTier(state.reputation); const downgrade = (proposed === 'A' && tier === 'LOW') || (proposed === 'F' && tier !== 'HIGH'); const notice = downgrade ? `<div class="answer-block compact"><span class="card-label">APPROVAL RESPONSE</span><p>Plan ${escapeHtml(proposed)} needs additional approval conditions. The board will accept only fallback plan B for Period 1.</p>${miniChoice('How will you acknowledge the board-approved plan?', [{ id: 'accept-fallback', title: 'Accept plan B subject to conditions', desc: 'Record the reason and prepare the revised plan.' }], state.structured.approvalAck, 'approval-ack')}</div>` : ''; return `<div class="options-wrap"><div class="select-helper"><span>Choose exactly three priority groups</span><b>${state.draftSelection.priorities.length}/3</b></div><div class="option-grid">${PRIORITIES.map((p) => optionCard(p, state.draftSelection.priorities.includes(p.id), `data-select-kind="priority" data-select-id="${p.id}"`)).join('')}</div>${notice}${renderBriefing(state)}</div>`; }
  if (s === 10) { const event = state.eventSequence[state.eventCursor] || { title: 'Preparing update', text: '' }; return `<div class="timeline-wrap"><div class="timeline-tabs">${state.eventSequence.map((e, i) => `<span class="timeline-tab ${i === state.eventCursor ? 'current' : i < state.eventCursor ? 'done' : ''}">${i + 1}. ${escapeHtml(e.title)}</span>`).join('')}</div>${state.eventCursor === 0 && state.structured.initialBriefing?.clientResponse ? `<div class="answer-block compact client-response"><span class="card-label">DAVID'S RESPONSE</span><p>${state.structured.initialBriefing.clientResponse === 'agree' ? 'David agrees with the plan.' : state.structured.initialBriefing.clientResponse === 'conditional' ? 'David agrees subject to clear conditions and review points.' : 'David is not ready to agree and asks for further discussion.'}</p></div>` : ''}<article class="event-card"><span class="card-label">PERIOD 1 UPDATE</span><h3>${escapeHtml(event.title)}</h3><p>${escapeHtml(event.text)}</p></article></div>`; }
  if (s === 11) {
    const mode = state.draftSelection.reassessmentMode;
    const diagnosisHtml = mode && ['DIAGNOSIS', 'BOTH'].includes(mode) ? `<section class="reassess-section"><span class="card-label">NEXT-PERIOD DIAGNOSIS</span><div class="option-grid diagnosis-grid">${DIAGNOSES.map((d) => optionCard(d, state.draftSelection.reassessmentDiagnosis === d.id, `data-select-kind="reassess-diagnosis" data-select-id="${d.id}"`)).join('')}</div></section>` : '';
    const treatmentHtml = mode && ['TREATMENT', 'BOTH'].includes(mode) ? `<section class="reassess-section"><span class="card-label">NEXT-PERIOD TREATMENT</span>${renderTreatment(state, true)}</section>` : '';
    const explanationHtml = mode ? `${miniChoice(reassessmentReasonQuestion(mode), [{ id: 'confirmed', title: 'New evidence supports the current approach', desc: 'The latest developments support the original diagnosis and treatment.' }, { id: 'invalidated', title: 'New evidence challenges the current approach', desc: 'The latest developments contradict an assumption behind the diagnosis or treatment.' }, { id: 'uncertain', title: 'The evidence is not yet conclusive', desc: 'More information is needed before deciding whether the current approach remains appropriate.' }], state.structured.reassessmentReason, 'reassess-reason', 'Choose the reason that best explains your decision based on the new evidence.')}${miniChoice('Which metric should be monitored next period?', [{ id: 'cash', title: 'Cash / liquidity', desc: 'Track runway and available cash.' }, { id: 'debt', title: 'Debt / interest coverage', desc: 'Track financial obligations.' }, { id: 'continuity', title: 'Continuity / sales', desc: 'Track operations and sales.' }], state.reassessment.monitorMetric, 'reassess-metric')}` : '';
    return `<div class="options-wrap reassessment-wrap"><section class="reassessment-panel"><div class="reassessment-intro"><span>RE-EVALUATION</span><h3>Adjust diagnosis and treatment</h3></div><div class="reassessment-layout"><img class="reassessment-doctor" src="asset/images/round6/diagnosis-doctor.webp" alt="Consulting physician" /><div class="reassessment-choices"><div class="option-grid">${REASSESS_MODES.map((m) => optionCard(m, mode === m.id, `data-select-kind="reassess-mode" data-select-id="${m.id}"`)).join('')}</div></div></div>${diagnosisHtml}${treatmentHtml}${explanationHtml}<p class="reassessment-note">Your choices are recorded only after you confirm this screen.</p></section></div>`;
  }
  return renderResult(state);
}
function renderGame(state) {
  const title = state.currentScreen === 0 ? 'Client intake' : `Case 01 · ${SCREEN_LABELS[state.currentScreen]}`;
  const prompts = { 0: 'Toy Kingdom Inc. · The Anderson family', 1: 'Listen before asking questions', 2: 'Choose files to open', 3: 'Close the information gaps', 4: 'Complete financial statements', 5: 'One question before diagnosis', 6: 'Choose your diagnosis', 7: 'Choose a treatment plan', 8: 'Choose when to act', 9: 'Prepare before announcing the plan', 10: 'Follow the developments', 11: 'New evidence after Period 1', 12: 'Consultation summary' };
  const terminal = state.status === 'COMPLETED' && state.currentScreen === 12;
  const effectiveScreen = terminal ? 12 : Math.min(Math.max(state.currentScreen, 0), 11);
  const effectiveTitle = effectiveScreen === 0 ? 'Client intake' : `Case 01 · ${SCREEN_LABELS[effectiveScreen]}`;
  if (terminal) return `<section class="section-wrap conclusion-wrap">${renderConclusion(state)}</section>`;
  return `<section class="hero section-wrap game-hero"><div class="hero-copy"><div class="eyebrow"><span class="eyebrow-line"></span> ${escapeHtml(effectiveTitle)}</div><h1>${escapeHtml(prompts[effectiveScreen])}</h1><p class="hero-lead">Every confirmed decision becomes part of this case record.</p></div><div class="hero-meta"><div class="client-mini"><div class="client-avatar">D</div><div><strong>David Anderson</strong><span>CEO · Toy Kingdom Inc.</span></div></div><button class="text-btn" type="button" id="restartBtn">↻ Play again</button></div></section><section class="section-wrap workspace"><div class="main-column">${effectiveScreen > 0 ? renderStepper({ ...state, currentScreen: effectiveScreen }) : ''}<section class="decision-card" aria-live="polite">${renderDecisionFrame({ ...state, currentScreen: effectiveScreen })}</section></div>${renderSidebar({ ...state, currentScreen: effectiveScreen })}</section>`;
}
function renderDecisionFrame(state) {
  const s = state.currentScreen;
  const validation = validateScreen(state);
  const canConfirm = s === 0 || s === 1 || s === 4 || s === 10 || !validation;
  const labels = {
    0: 'Start case', 1: 'Begin review', 2: 'Open selected files', 3: 'Record questions',
    4: 'Continue', 5: 'Record final question', 6: 'Confirm diagnosis', 7: 'Record treatment',
    8: 'Record timing', 9: 'Begin timeline',
    10: state.eventCursor >= state.eventSequence.length - 1 ? 'Continue to re-evaluation' : 'Read next update',
    11: 'Confirm re-evaluation'
  };
  const context = s === 10 || [0, 1, 4].includes(s) ? '' : `<p class="frame-note">${escapeHtml(validation || 'Confirm to lock this choice into the case record.')}</p>`;
  return `<div class="fade-in"><div class="decision-head"><div class="decision-kicker"><span class="decision-number">Screen ${String(s).padStart(2, '0')} - ${escapeHtml(SCREEN_LABELS[s])}</span>${s >= 2 && s <= 9 ? `<span class="count-chip">${selectionCount(state, s)} selected</span>` : ''}</div><h2>${escapeHtml(screenTitle(s))}</h2><p>${escapeHtml(screenPrompt(s))}</p></div>${renderScreen(state)}${context}<div class="confirm-bar"><div class="confirm-copy"><strong>${validation && ![0, 1, 4, 10].includes(s) ? 'Needs attention' : 'Ready'}</strong><span>${s === 10 ? 'This update is part of the simulated timeline.' : 'Confirm to continue to the next screen.'}</span></div><button type="button" class="primary-btn" id="confirmBtn" ${canConfirm ? '' : 'disabled'}>${escapeHtml(labels[s])} &rarr;</button></div></div>`;
}

function screenTitle(screen) { return ({ 0: 'Client intake', 1: 'Clinic', 2: 'Case files', 3: 'Questions', 4: 'Financial statements', 5: 'Final question', 6: 'Diagnosis', 7: 'Treatment plan', 8: 'Timing', 9: 'Preparation', 10: 'Developments', 11: 'Re-evaluation' })[screen] || 'Conclusion'; }
function screenPrompt(screen) { return ({ 0: 'Review the confidential client file before you begin.', 1: 'David describes an operating challenge and a family disagreement.', 2: 'You may open three files. Unselected files remain locked.', 3: 'Ask two questions to gather additional information before reviewing the financial statements.', 4: 'The CFO provides the complete statements as an independent source.', 5: 'Use one final question to test the hypothesis you are considering.', 6: 'Choose a diagnosis using the information gathered so far.', 7: 'Choose a treatment plan for approval.', 8: 'Your timing choice becomes part of the simulated timeline.', 9: 'Prepare three stakeholder groups before announcing the plan.', 10: 'Updates appear in sequence and provide evidence for reassessment.', 11: 'Period 1 has been recorded. New decisions apply to the next period.' })[screen] || ''; }

function summaryDoctorAsset(overall, financialTier) { return overall >= 85 ? 'asset/images/round12/doctor-good.webp' : financialTier === 'FINANCIAL_COLLAPSE' ? 'asset/images/round12/doctor-bad.webp' : financialTier === 'FRAGILE_SURVIVAL' ? 'asset/images/round12/doctor-medium.webp' : 'asset/images/round12/doctor-good.webp'; }

function renderResult(state) { return renderConclusion(state); }

const FEEDBACK_TEMPLATES = {
  Investigation: {
    High: ['Your file and question choices covered the main available areas.', 'The diagnosis rests on a broad information base.', 'Use any remaining questions to narrow uncertainty in areas you did not review.', 'Only three files and a limited number of questions were available.'],
    Mid: ['You found useful facts, but some important areas remain less explored.', 'The diagnosis has partial information support.', 'Compare the unopened file categories with the questions you asked.', 'Several investigation paths could still be reasonable in this case.'],
    Low: ['The available investigation left major gaps in the case picture.', 'A diagnosis made on thin information is less reliable.', 'Review liquidity, leverage and operating results before settling on a cause.', 'The case can still be completed; these gaps affect the assessment.']
  },
  Diagnosis: {
    High: ['The chosen diagnosis fits the accessible case facts.', 'It identifies a plausible underlying cause rather than only a symptom.', 'Keep checking whether later developments support that cause.', 'A sound diagnosis cannot guarantee that the treatment will succeed.'],
    Mid: ['The diagnosis captures part of the problem, but its fit is incomplete.', 'It may explain some symptoms without the full causal picture.', 'Compare the diagnosis with the debt history and financial statements.', 'Only information reached in this playthrough was assessed.'],
    Low: ['The diagnosis fits the accessible facts poorly.', 'The plan may target a symptom while the main constraint persists.', 'Reconsider the diagnosis against the files and statements you reached.', 'Other case information might have changed the assessment if obtained.']
  },
  Treatment: {
    High: ['The implemented plan fits the diagnosis, available resources and preparation.', 'A suitable plan has a credible route to implementation.', 'Keep monitoring the financing and stakeholder conditions behind it.', 'Even a strong plan remains exposed to later case events.'],
    Mid: ['The plan addresses some needs but has gaps in fit or preparation.', 'It may buy time without resolving every underlying constraint.', 'Address implementation risks and prepare the groups the plan relies on.', 'Approval and execution depend on the actual case state.'],
    Low: ['The plan has a weak fit with the case or its execution conditions.', 'It is less likely to address the central problem.', 'Compare the implemented plan with the diagnosis and available resources.', 'The simulation grades fit and feasibility; it does not prescribe one universal plan.']
  },
  Execution: {
    High: ['The timing and priority groups support the implemented plan.', 'The plan is better positioned to move from proposal to action.', 'Follow through with the groups needed to carry out the plan.', 'Stakeholder and creditor reactions can still change the outcome.'],
    Mid: ['Timing or stakeholder preparation supports only part of the plan.', 'A reasonable plan may weaken when delivery conditions are incomplete.', 'Revisit the timing and the groups the implemented plan depends on.', 'Only three priority groups could be chosen.'],
    Low: ['The timing and selected groups offer little support for implementation.', 'The plan may be difficult to carry out.', 'Align the timing with available runway and prepare the essential groups.', 'A weak execution score reduces confidence; it does not prevent completion.']
  },
  Reassessment: {
    High: ['The re-evaluation decision, explanation and monitoring choice fit the new information.', 'The response is flexible without ignoring later developments.', 'Keep testing whether new observations confirm or challenge the diagnosis.', 'A change can still have costs; keeping the plan can also be justified.'],
    Mid: ['The re-evaluation fits only part of the later information.', 'The response may leave some uncertainty unresolved.', 'Check which new development most affects your stated reason.', 'Some changes are matters of judgment and may carry trade-offs.'],
    Low: ['The re-evaluation is difficult to reconcile with the later information.', 'Ignoring or overreacting to events can weaken the plan.', 'Review the later developments before confirming the next-period decision.', 'A different re-evaluation path might have improved the result.']
  }
};
function feedbackBand(score) { return score >= 80 ? 'High' : score >= 50 ? 'Mid' : 'Low'; }
function renderPerformanceFeedback(state, process) {
  const scores = {
    Investigation: process.dimensions.investigation,
    Diagnosis: process.dimensions.reasoning,
    Treatment: process.dimensions.suitability,
    Execution: Math.round(executionScore(state)),
    Reassessment: process.dimensions.adaptation
  };
  const context = {
    Investigation: `${(state.selectedDossiers || []).length} documents opened; ${[...(state.selectedQuestions1 || []), state.selectedQuestion2].filter(Boolean).length} questions recorded.`,
    Diagnosis: `Initial diagnosis: ${state.initialDiagnosis || 'none'}.`,
    Treatment: `Implemented treatment: ${state.implementedTreatment || 'none'}.`,
    Execution: `Timing: ${state.timing || 'none'}; priority groups: ${(state.priorities || []).join(', ') || 'none'}.`,
    Reassessment: `Decision: ${state.reassessment.mode || 'none'}; reason: ${state.reassessment.reason || 'none'}; monitor: ${state.reassessment.monitorMetric || 'none'}.`
  };
  return `<section class="performance-feedback" aria-labelledby="performanceTitle"><h3 id="performanceTitle">Performance feedback</h3><p>Scores describe this playthrough. Execution is the timing and preparation part already included in Treatment; it is not added again to the total.</p><div class="performance-table-wrap"><table><thead><tr><th scope="col">Dimension</th><th scope="col">Result</th><th scope="col">Reason</th><th scope="col">Meaning</th><th scope="col">Action</th><th scope="col">Limit</th></tr></thead><tbody>${Object.entries(scores).map(([name, score]) => { const band = feedbackBand(score); const [reason, meaning, action, limit] = FEEDBACK_TEMPLATES[name][band]; return `<tr><th scope="row">${name}</th><td data-label="Result"><strong>${score}/100 · ${band}</strong></td><td data-label="Reason">${escapeHtml(context[name])} ${escapeHtml(reason)}</td><td data-label="Meaning">${escapeHtml(meaning)}</td><td data-label="Action">${escapeHtml(action)}</td><td data-label="Limit">${escapeHtml(limit)}</td></tr>`; }).join('')}</tbody></table></div></section>`;
}

function renderConclusion(state) {
  const o = state.finalOutcome || (finalize(state), state.finalOutcome);
  const f = o.financial, g = o.governance, p = o.process;
  const tierNames = { STRONG_SURVIVAL: 'Strong survival', FRAGILE_SURVIVAL: 'Fragile survival', FINANCIAL_COLLAPSE: 'Financial collapse', FAMILY_ALIGNED: 'Family aligned', FAMILY_FRACTURED: 'Family divided', CONTROL_LOST: 'Control lost' };
  const named = (id, list) => id ? `${id} - ${list.find((item) => item.id === id)?.title || id}` : 'None';
  const doctor = summaryDoctorAsset(o.overall, f.tier);
  const rep = clamp(state.reputation);
  const history = [
    ['Profiles opened', (state.selectedDossiers || []).map((id) => `${dossierLabel(id)} - ${DOSSIERS[id]?.title || id}`).join('; ') || 'None'],
    ['Questions asked', [...(state.selectedQuestions1 || []), state.selectedQuestion2].filter(Boolean).map((id) => named(id, [...QUESTIONS_1, ...QUESTIONS_2])).join('; ') || 'None'],
    ['Initial diagnosis', named(state.initialDiagnosis, DIAGNOSES)], ['Final diagnosis', named(state.finalDiagnosis || state.initialDiagnosis, DIAGNOSES)],
    ['Initial treatment', named(state.proposedTreatment, TREATMENTS)], ['Treatment implemented', named(state.implementedTreatment, TREATMENTS)],
    ['Next-period treatment', named(state.finalImplementedTreatment || state.implementedTreatment, TREATMENTS)],
    ['Timing', named(state.timing, TIMINGS)], ['Priority groups', (state.priorities || []).join(', ') || 'None'],
    ['Re-evaluation', REASSESS_MODES.find((item) => item.id === (state.reassessment.mode || 'KEEP'))?.title || 'Keep both']
  ];
  return `<div class="conclusion fade-in"><header class="conclusion-heading"><span>ROUND 12 &middot; CONCLUSION</span><h2>Case completed</h2><p>Results from the decisions and events in this playthrough.</p></header>${renderStepper(state)}<section class="conclusion-complete"><div class="conclusion-label">CASE COMPLETED</div><div class="conclusion-hero"><div><span>RESULT</span><h3>${escapeHtml(o.ending.title)}</h3><img src="${doctor}" alt="Consulting physician" /></div><div class="conclusion-score"><span>Total case score</span><strong>${o.overall}</strong><small>/ 100 &middot; calculated by the game</small></div></div></section><div class="conclusion-body"><div class="conclusion-outcomes"><section><h3>Financial health</h3><strong>${f.score} / 100</strong><span>${escapeHtml(tierNames[f.tier] || f.tier)}</span><p>Underlying financial index ${f.rawScore} &middot; Liquidity ${f.metrics.liquidity} &middot; Debt load ${f.metrics.debtLoad} &middot; Continuity ${f.metrics.continuity}</p></section><section><h3>Governance &middot; Family stability</h3><strong>${g.score} / 100</strong><span>${escapeHtml(tierNames[g.tier] || g.tier)}</span><p>Governance is calculated separately from financial condition.</p></section></div><section class="conclusion-reputation"><div><strong>REPUTATION</strong><span>${rep} / 100 &middot; ${escapeHtml(o.reputationLabel)}</span></div><div class="reputation-track" role="meter" aria-label="Reputation" aria-valuenow="${rep}" aria-valuemin="0" aria-valuemax="100"><i style="width:${rep}%"></i></div></section><section class="conclusion-profile"><h3>Profile summary</h3><p>Final score: ${o.scoreBreakdown.process} process points (50%) + ${Math.round(o.scoreBreakdown.financial * 10) / 10} financial performance points (30%) + ${o.scoreBreakdown.clientExperience} client experience points (20%). Governance is reported separately.</p><p>Financial performance maps the original case index from the opening baseline (54) to the highest feasible reference found in calibration (79.6). The financial tier still uses the original raw index.</p><dl>${history.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl><div class="conclusion-process"><span>Consulting process <b>${p.overall}/100</b></span><span>Client experience <b>${o.clientExperience}/100</b></span></div></section>${renderPerformanceFeedback(state, p)}<section class="conclusion-reality"><h3>Comparison with reality</h3><p>Toys &quot;R&quot; Us filed for Chapter 11 bankruptcy protection in 2017 in an attempt to restructure its debt. Its U.S. business later moved toward liquidation in 2018 after the restructuring effort failed to stabilize the company. Toy Kingdom Inc. is a separate simulation.</p></section><section class="conclusion-feedback"><h3>Final feedback</h3><p>${escapeHtml(o.ending.text)}</p><p>${escapeHtml(state.finalFeedback?.limit || '')}</p></section><div class="result-actions"><button type="button" class="secondary-btn" id="closeCaseBtn">Back to menu</button><button type="button" class="primary-btn" id="reopenCaseBtn">Play again</button></div></div></div>`;
}

function renderMenu() {
  const saved = hasSave(); return `<section class="menu-hero section-wrap"><div class="eyebrow"><span class="eyebrow-line"></span> MEDIFIN - FINANCIAL CLINIC</div><h1>Choose a<br /><em>case to review</em></h1><p class="hero-lead">Each case is a standalone simulation. Progress is saved separately for each case.</p></section><section class="section-wrap case-menu"><article class="case-menu-card playable" data-case-id="case01"><div class="case-menu-top"><span class="case-number">CASE 01</span><span class="status-pill">PLAYABLE</span></div><h2>Toy Kingdom Inc.</h2><p>Anderson family - specialty retail - 13 investigation, diagnosis, and reassessment screens.</p><div class="case-facts"><span>~1,700 stores</span><span>FY2026 $11.540bn</span><span>Anderson 78%</span></div><div class="case-actions"><button class="primary-btn" type="button" data-menu-action="start">${saved ? 'Continue' : 'Start case'} -&gt;</button>${saved ? '<button class="secondary-btn" type="button" data-menu-action="restart">Restart</button>' : ''}</div></article><article class="case-menu-card incoming" data-case-id="case02" aria-disabled="true"><div class="case-menu-top"><span class="case-number">CASE 02</span><span class="status-pill muted">INCOMING</span></div><h2>Coming soon</h2><p>The next case will be available in a future release.</p><div class="case-facts"><span>Locked</span><span>Unavailable</span></div><button class="secondary-btn" type="button" disabled>Coming soon</button></article></section>`;
}

let state = makeInitialState(); let view = 'menu'; let busy = false; let modalEvidenceId = null; let modalDossierId = null; let modalReturnFocus = null;
function openRules() {
  document.getElementById('rulesModal').classList.remove('hidden');
  document.getElementById('rulesBtn').setAttribute('aria-expanded', 'true');
  document.getElementById('rulesClose').focus();
}
function closeRules() {
  document.getElementById('rulesModal').classList.add('hidden');
  document.getElementById('rulesBtn').setAttribute('aria-expanded', 'false');
  document.getElementById('rulesBtn').focus();
}
function render() {
  const main = document.getElementById('mainContent'); const top = document.getElementById('topbarContext'); const footer = document.getElementById('footerContext'); const menuBtn = document.getElementById('menuBtn');
  if (view === 'menu') { main.innerHTML = `<div class="integrated-menu">${renderMenu()}</div>`; top.innerHTML = ''; footer.textContent = 'Case selection'; menuBtn.classList.add('hidden'); }
  else { const outcomeClass = state.currentScreen === 12 ? ` outcome-${state.finalOutcome?.financial?.tier || 'FRAGILE_SURVIVAL'}` : ''; main.innerHTML = state.uiScene ? `<div class="integrated-story">${renderStoryScene(state)}</div>` : `<div class="integrated-game stage-${state.currentScreen}${outcomeClass}">${renderGame(state)}</div>`; top.innerHTML = `<span class="topbar-dot"></span><span>FINANCIAL CLINIC</span><span class="topbar-slash">/</span><span>CASE 01</span>`; footer.textContent = state.uiScene ? 'Case 01 / Story' : `Case 01 / ${SCREEN_LABELS[state.currentScreen] || 'Complete'}`; menuBtn.classList.remove('hidden'); }
  bindDynamicState();
  window.requestAnimationFrame(() => {
    const track = document.querySelector('.stepper-track');
    const current = track?.querySelector('.step.current');
    if (track && current) {
      track.scrollLeft = current.offsetLeft - track.offsetLeft - (track.clientWidth - current.clientWidth) / 2;
      updateStepperArrows();
    }
  });
}
function updateStepperArrows() {
  const track = document.querySelector('.stepper-track');
  if (!track) return;
  const previous = document.querySelector('[data-step-scroll="-1"]');
  const next = document.querySelector('[data-step-scroll="1"]');
  if (previous) previous.disabled = track.scrollLeft <= 1;
  if (next) next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
}
function bindDynamicState() { const modal = document.getElementById('evidenceModal'); if (modalEvidenceId) modal.classList.remove('hidden'); }
function toast(message) { const el = document.getElementById('toast'); el.textContent = message; el.classList.add('show'); clearTimeout(window.__medifinToast); window.__medifinToast = window.setTimeout(() => el.classList.remove('show'), 2400); }
function startCase(restart = false) { const fresh = restart || !hasSave(); if (restart) clearCaseSave(); state = fresh ? makeInitialState() : loadState(); state.completedStoryScenes ||= []; if (fresh) state.uiScene = 'check'; else if (!state.uiScene) { const seen = state.completedStoryScenes; if (state.currentScreen === 2 && state.confirmedScreens.includes(1) && !seen.includes('before-round-2')) state.uiScene = 'before-round-2'; else if (state.currentScreen === 4 && state.confirmedScreens.includes(3) && !seen.includes('before-round-4')) state.uiScene = 'before-round-4'; else if (state.currentScreen === 8 && state.confirmedScreens.includes(7) && !seen.includes('before-round-8')) state.uiScene = 'before-round-8'; else if (state.currentScreen === 11 && state.confirmedScreens.includes(10) && !seen.includes('before-round-11')) state.uiScene = 'before-round-11'; else if (state.currentScreen === 5 && state.confirmedScreens.includes(4)) { const branch = state.selectedDossiers.includes('HS-G') ? 'before-round-5-governance' : 'before-round-5-common'; if (!seen.includes(branch)) state.uiScene = branch; } } view = 'game'; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function goMenu() { view = 'menu'; closeModal(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function confirmCurrent() {
  if (busy || state.status === 'COMPLETED' || state.currentScreen >= 12) return;
  const error = validateScreen(state); const easy = [0, 1, 4, 10].includes(state.currentScreen); if (error && !easy) { toast(error); return; }
  busy = true; const screenBefore = state.currentScreen; applyScreen(state);
  if (state.status !== 'COMPLETED' && screenBefore !== 10 && screenBefore !== 11) state.currentScreen = screenBefore + 1;
  state.completedStoryScenes ||= [];
  if (screenBefore === 1 && !state.completedStoryScenes.includes('before-round-2')) state.uiScene = 'before-round-2';
  if (screenBefore === 3 && !state.completedStoryScenes.includes('before-round-4')) state.uiScene = 'before-round-4';
  if (screenBefore === 4) { const branchScene = state.selectedDossiers.includes('HS-G') ? 'before-round-5-governance' : 'before-round-5-common'; if (!state.completedStoryScenes.includes(branchScene)) state.uiScene = branchScene; }
  if (screenBefore === 7 && !state.completedStoryScenes.includes('before-round-8')) state.uiScene = 'before-round-8';
  if (screenBefore === 10 && state.currentScreen === 11 && !state.completedStoryScenes.includes('before-round-11')) state.uiScene = 'before-round-11';
  if (screenBefore === 2 && state.selectedDossiers.includes('HS-G')) state.uiScene = 'doc-intro';
  if (screenBefore === 11) state.status = 'COMPLETED';
  if (screenBefore !== 10 || state.currentScreen !== 10) { if (!state.confirmedScreens.includes(screenBefore)) state.confirmedScreens.push(screenBefore); state.decisionHistory.push({ screen: screenBefore, selection: deepCopy(state.draftSelection), at: Date.now() }); state.transitionIds.push(`${screenBefore}-${state.confirmedScreens.length}`); }
  saveState(); render(); busy = false;
  if (screenBefore === 2) openSelectedDossierReview();
  window.setTimeout(() => document.querySelector('.decision-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
}
function setSelection(kind, id) {
  const d = state.draftSelection;
  if (kind === 'dossier') { const list = d.dossiers; if (list.includes(id)) list.splice(list.indexOf(id), 1); else if (list.length < 3) list.push(id); else toast('You can choose only three files.'); }
  if (kind === 'question1') { const list = d.questions1; if (list.includes(id)) list.splice(list.indexOf(id), 1); else if (list.length < 2) list.push(id); else toast('You can choose only two questions.'); }
  if (kind === 'question2') d.question2 = id;
  if (kind === 'diagnosis') d.diagnosis = id;
  if (kind === 'treatment') d.treatment = id;
  if (kind === 'timing') d.timing = id;
  if (kind === 'priority') { const list = d.priorities; if (list.includes(id)) list.splice(list.indexOf(id), 1); else if (list.length < 3) list.push(id); else toast('You can choose only three priority groups.'); }
  if (kind === 'reassess-mode') { d.reassessmentMode = id; d.reassessmentDiagnosis = null; d.reassessmentTreatment = null; d.reassessmentEvidenceIds = []; state.structured.reassessmentReason = null; }
  if (kind === 'reassess-diagnosis') d.reassessmentDiagnosis = id;
  if (kind === 'reassess-treatment') d.reassessmentTreatment = id;
  if (kind === 'communication-answer') { const [question, answer] = id.split(':'); if (['Q1', 'Q2', 'Q3', 'Q7'].includes(question) && ['A', 'B', 'C'].includes(answer)) { d.communicationAnswers ||= {}; d.communicationAnswers[question] = answer; } }
  if (kind === 'reassess-reason') state.structured.reassessmentReason = id;
  if (kind === 'reassess-metric') state.reassessment.monitorMetric = id;
  if (kind === 'approval-ack') state.structured.approvalAck = id;

  saveState(); render();
}
function openDossier(id, target) { if (!hasDossier(state, id) || !DOSSIERS[id]) return; modalDossierId = id; modalEvidenceId = null; modalReturnFocus = target || document.activeElement; const d = DOSSIERS[id]; document.getElementById('modalTitle').textContent = `${dossierLabel(d.id)} · ${d.title}`; document.getElementById('modalBody').innerHTML = `<div class="modal-meta"><span>${escapeHtml(d.scope)}</span><span>Opened</span></div><div class="modal-text">${d.content.map((line) => `<p>${escapeHtml(line)}</p>`).join('')}</div>`; document.getElementById('modalActions').innerHTML = ''; document.getElementById('evidenceModal').classList.remove('hidden'); window.setTimeout(() => document.getElementById('modalClose')?.focus(), 0); }
function openNotebookQuestion(id, target) {
  const question = [...QUESTIONS_1, ...QUESTIONS_2].find((item) => item.id === id);
  const answer = (state.answeredQuestions || []).find((item) => item.id === id && item.answer != null);
  if (!question || !answer) return;
  const round = id.startsWith('CH1-') ? 'Round 3' : 'Round 5';
  modalDossierId = `question:${id}`; modalEvidenceId = null; modalReturnFocus = target || document.activeElement;
  document.querySelector('#evidenceModal .evidence-modal').classList.add('dossier-review-modal');
  document.getElementById('modalTitle').textContent = `${id} · ${round}`;
  document.getElementById('modalBody').innerHTML = `<div class="modal-meta"><span>Answered question</span><span>${escapeHtml(round)}</span></div><div class="modal-text notebook-answer"><h3>Question</h3><p>${escapeHtml(displayDossierText(question.title))}</p><h3>Answer received</h3><p>${escapeHtml(displayDossierText(answer.answer))}</p></div>`;
  document.getElementById('modalActions').innerHTML = '';
  document.getElementById('evidenceModal').classList.remove('hidden');
  window.setTimeout(() => document.getElementById('modalClose')?.focus(), 0);
}
function openFinancialReview(id, target) {
  if (!isFinancialReviewUnlocked(state)) return;
  const statements = {
    income: ['Income Statement', renderIncomeStatementTable()],
    balance: ['Balance Sheet', renderBalanceSheetFigures()],
    metrics: ['Operating Metrics', renderOperatingMetricsTable()]
  };
  const statement = statements[id];
  if (!statement) return;
  modalDossierId = `financial:${id}`; modalEvidenceId = null; modalReturnFocus = target || document.activeElement;
  document.querySelector('#evidenceModal .evidence-modal').classList.add('dossier-review-modal');
  document.getElementById('modalTitle').textContent = statement[0];
  document.getElementById('modalBody').innerHTML = `<div class="modal-meta"><span>Round 4</span><span>Audited consolidated statements</span></div><div class="modal-text financial-review-content">${statement[1]}</div>`;
  document.getElementById('modalActions').innerHTML = '';
  document.getElementById('evidenceModal').classList.remove('hidden');
  window.setTimeout(() => document.getElementById('modalClose')?.focus(), 0);
}
let dossierReviewIndex = 0; let dossierReviewIds = [];
function renderDossierReview() {
  const ids = dossierReviewIds;
  const id = ids[dossierReviewIndex]; const dossier = DOSSIERS[id];
  document.getElementById('modalTitle').textContent = 'Selected documents';
  document.getElementById('modalBody').innerHTML = `<nav class="dossier-review-tabs" aria-label="Choose a doc to read">${ids.map((item, index) => `<button type="button" class="${index === dossierReviewIndex ? 'active' : ''}" data-review-dossier="${index}" aria-pressed="${index === dossierReviewIndex}">${escapeHtml(dossierLabel(item))}</button>`).join('')}</nav><div class="modal-meta"><span>${escapeHtml(dossier.scope)}</span><span>${escapeHtml(dossierLabel(dossier.id))}</span></div><div class="modal-text">${dossier.content.map((line) => `<p>${escapeHtml(line)}</p>`).join('')}</div>`;
  document.getElementById('modalActions').innerHTML = '<button type="button" class="primary-btn" id="reviewDossiersContinue">Continue</button>';
}
function openSelectedDossierReview() {
  if (state.currentScreen !== 3 || state.selectedDossiers.length !== 3 || modalDossierId === 'review' || !document.getElementById('evidenceModal').classList.contains('hidden')) return;
  dossierReviewIds = [...state.selectedDossiers];
  modalDossierId = 'review'; modalEvidenceId = null; dossierReviewIndex = 0; modalReturnFocus = document.activeElement;
  document.querySelector('#evidenceModal .evidence-modal').classList.add('dossier-review-modal');
  renderDossierReview(); document.getElementById('evidenceModal').classList.remove('hidden');
  window.setTimeout(() => document.querySelector('[data-review-dossier="0"]')?.focus(), 0);
}
function closeModal() { const modal = document.getElementById('evidenceModal'); const returnFocus = modalReturnFocus; modal.classList.add('hidden'); modal.querySelector('.evidence-modal').classList.remove('dossier-review-modal'); document.getElementById('modalClose').classList.remove('hidden'); modalEvidenceId = null; modalDossierId = null; dossierReviewIds = []; modalReturnFocus = null; if (returnFocus?.isConnected && typeof returnFocus.focus === 'function') window.setTimeout(() => returnFocus.focus(), 0); }

document.addEventListener('click', (event) => {
  const storyNext = event.target.closest('[data-story-next]');
  if (storyNext) { if (busy) return; busy = true; state.completedStoryScenes ||= []; if (['before-round-2', 'before-round-4', 'before-round-5-governance', 'before-round-5-standard', 'before-round-5-common', 'before-round-8', 'before-round-11'].includes(state.uiScene) && !state.completedStoryScenes.includes(state.uiScene)) state.completedStoryScenes.push(state.uiScene); state.uiScene = storyNext.dataset.storyNext === 'game' ? null : storyNext.dataset.storyNext; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); busy = false; return; }
  if (event.target.closest('[data-letter-zoom]')) { const letter = event.target.closest('[data-letter-zoom]'); letter.classList.toggle('zoomed'); letter.setAttribute('aria-pressed', letter.classList.contains('zoomed')); return; }
  const stepArrow = event.target.closest('[data-step-scroll]');
  if (stepArrow) { document.querySelector('.stepper-track')?.scrollBy({ left: Number(stepArrow.dataset.stepScroll) * 320, behavior: 'smooth' }); return; }
  if (event.target.closest('#rulesBtn')) { openRules(); return; }
  if (event.target.closest('#rulesClose') || event.target.id === 'rulesModal') { closeRules(); return; }
  const menuAction = event.target.closest('[data-menu-action]'); if (menuAction) { const action = menuAction.dataset.menuAction; if (action === 'start') startCase(false); if (action === 'restart') startCase(true); return; }
  if (event.target.closest('#brandHome')) { event.preventDefault(); goMenu(); return; }
  if (event.target.closest('#menuBtn')) { goMenu(); return; }
  if (event.target.closest('#restartBtn')) { startCase(true); return; }
  if (event.target.closest('#confirmBtn')) { if (event.detail > 1) return; confirmCurrent(); return; }
  const select = event.target.closest('[data-select-kind]'); if (select) { setSelection(select.dataset.selectKind, select.dataset.selectId); return; }
  const questionReview = event.target.closest('[data-question-review]'); if (questionReview) { openNotebookQuestion(questionReview.dataset.questionReview, questionReview); return; }
  const financialReview = event.target.closest('[data-financial-review]'); if (financialReview) { openFinancialReview(financialReview.dataset.financialReview, financialReview); return; }
  const dossierOpen = event.target.closest('[data-dossier-open]'); if (dossierOpen) { openDossier(dossierOpen.dataset.dossierOpen, dossierOpen); return; }
  const reviewTab = event.target.closest('[data-review-dossier]'); if (reviewTab) { dossierReviewIndex = Number(reviewTab.dataset.reviewDossier); renderDossierReview(); document.querySelector(`[data-review-dossier="${dossierReviewIndex}"]`)?.focus(); return; }
  if (event.target.closest('#reviewDossiersContinue')) { closeModal(); return; }
  if (event.target.closest('#modalClose') || event.target.id === 'evidenceModal') { closeModal(); return; }
  if (event.target.closest('#closeCaseBtn')) { goMenu(); return; }
  if (event.target.closest('#reopenCaseBtn')) { startCase(true); return; }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.querySelector('.doc-letter-zoom.zoomed')) { document.querySelector('.doc-letter-zoom.zoomed').click(); return; }
  if (event.target.matches?.('.stepper-track') && ['ArrowLeft', 'ArrowRight'].includes(event.key)) {
    event.preventDefault();
    event.target.scrollBy({ left: event.key === 'ArrowRight' ? 160 : -160, behavior: 'smooth' });
    return;
  }
  const rules = document.getElementById('rulesModal');
  if (!rules.classList.contains('hidden')) {
    if (event.key === 'Escape') { event.preventDefault(); closeRules(); return; }
    if (event.key === 'Tab') {
      const focusable = [...rules.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')].filter((el) => !el.disabled);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
    return;
  }
  if (event.key === 'Escape' && (modalEvidenceId || modalDossierId)) closeModal();
});
document.addEventListener('scroll', (event) => { if (event.target.matches?.('.stepper-track')) updateStepperArrows(); }, true);

// A small read-only integration surface keeps the transition engine testable
// without adding a debug control to the production player flow.
window.MEDIFIN = Object.freeze({
  CASE_ID: CANONICAL_CASE_ID,
  makeInitialState,
  resolveRefinancing,
  updateHoundstooth,
  calculateFinancialOutcome,
  calculateGovernanceOutcome,
  calculateCounselorPerformance, investigationScore, reasoningScore, suitabilityScore, communicationScore, ethicsScore, adaptationScore, clientExperienceScore, resolveTreatmentApproval,
  reputationTier,
  validateEvidenceSelection,
  EVIDENCE,
  DOSSIERS,
  DIAGNOSES,
  TREATMENTS
});

render();
