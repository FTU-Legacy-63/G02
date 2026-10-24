// Run against the unmodified engine in an isolated browser context.
(() => {
  const commit = (s, screen) => {
    globalThis.state = s; // Match app.js's active state for distinctEvidenceIds.
    s.currentScreen = screen;
    const error = validateScreen(s);
    if (error) throw new Error(`Round ${screen}: ${error}`);
    applyScreen(s);
  };
  const base = makeInitialState();
  base.draftSelection.dossiers = ['HS-A', 'HS-D', 'HS-G']; commit(base, 2);
  base.draftSelection.questions1 = ['CH1-C', 'CH1-D']; commit(base, 3); commit(base, 4);
  base.draftSelection.question2 = 'CH2-F'; commit(base, 5);
  base.draftSelection.diagnosis = 'D';
  commit(base, 6);
  base.draftSelection.communicationAnswers = {Q1:'B',Q2:'C',Q3:'A',Q7:'C'};
  base.structured.approvalAck = 'accept-fallback';
  const priorities = [];
  for(let a=0;a<7;a++) for(let b=a+1;b<7;b++) for(let c=b+1;c<7;c++) priorities.push([PRIORITIES[a].id,PRIORITIES[b].id,PRIORITIES[c].id]);
  let best = null, count = 0, maxFinancial = 0, maxProcess = 0, maxRawFinancial = null;
  const byMode = {};
  for(const t of TREATMENTS) for(const timing of TIMINGS) for(const p of priorities) {
    const s = deepCopy(base);
    s.draftSelection.treatment=t.id; commit(s,7);
    s.draftSelection.timing=timing.id; commit(s,8);
    s.draftSelection.priorities=p; s.draftSelection.communicationAnswers={Q1:'B',Q2:'C',Q3:'A',Q7:'C'}; commit(s,9);
    do {commit(s,10);} while(s.currentScreen===10);
    for(const mode of ['KEEP','DIAGNOSIS','TREATMENT','BOTH']) {
      for(const next of (['TREATMENT','BOTH'].includes(mode)?TREATMENTS:[{id:null}])) {
        for(const reason of ['confirmed','invalidated','uncertain']) {
          const r=deepCopy(s);
          r.draftSelection.reassessmentMode=mode;
          r.draftSelection.reassessmentDiagnosis=['DIAGNOSIS','BOTH'].includes(mode)?'F':null;
          r.draftSelection.reassessmentTreatment=next.id;
          r.structured.reassessmentReason=reason; r.reassessment.monitorMetric='debt'; commit(r,11);
          if(!Number.isFinite(r.finalOutcome.overall)||r.finalOutcome.overall<0||r.finalOutcome.overall>100) throw new Error('Overall score escaped 0–100');
          count++;
          maxFinancial=Math.max(maxFinancial,r.finalOutcome.financial.score);
          if(maxRawFinancial===null || r.finalOutcome.financial.rawScore>maxRawFinancial.rawScore) maxRawFinancial={rawScore:r.finalOutcome.financial.rawScore,choices:deepCopy(r.draftSelection)};
          maxProcess=Math.max(maxProcess,r.finalOutcome.process.overall);
          if(!byMode[mode] || byMode[mode].finalOutcome.overall<r.finalOutcome.overall) byMode[mode]=r;
          if(!best || best.finalOutcome.overall<r.finalOutcome.overall) best=r;
        }
      }
    }
  }
  const concise = s => ({choices:s.draftSelection, reputation:s.reputation, outcome:s.finalOutcome});
  const keep=deepCopy(byMode.KEEP), evidenceProbe=deepCopy(keep);
  evidenceProbe.reassessment.evidenceIds=['TK-EVENT-LIQUIDITY']; finalize(evidenceProbe);
  const legacyRiskNoise=deepCopy(best); legacyRiskNoise.structured.riskPlan={risk:'cash',mitigation:'none'};
  const legacyNoise=deepCopy(best);
  legacyNoise.draftSelection.diagnosisEvidenceIds=['TK-A-SSS'];
  legacyNoise.draftSelection.reassessmentEvidenceIds=['TK-EVENT-SALES'];
  legacyNoise.initialDiagnosisEvidenceIds=['TK-A-SSS'];
  legacyNoise.reassessment.evidenceIds=['TK-EVENT-SALES'];
  legacyNoise.structured.primaryConstraint='operations';
  legacyNoise.structured.causalSummary='sales-chain';
  legacyNoise.structured.sourceChecks.mode='none';
  finalize(legacyNoise);
  if(legacyNoise.finalOutcome.overall!==best.finalOutcome.overall || legacyNoise.finalOutcome.process.overall!==best.finalOutcome.process.overall) throw new Error('Hidden legacy answers altered scoring');
  if(suitabilityScore(legacyRiskNoise)!==suitabilityScore(best) || adaptationScore(legacyRiskNoise)!==adaptationScore(best)) throw new Error('Legacy Risk Plan altered v6 scoring');
  const makeScenario=(answers)=>{const s=deepCopy(best);s.structured.initialBriefing={communicationVersion:'scenario-v1',answers};applyClientResponse(s);finalize(s);return s;};
  const average=makeScenario({Q1:'C',Q2:'A',Q3:'C',Q7:'B'});
  const poor=makeScenario({Q1:'A',Q2:'B',Q3:'B',Q7:'A'});
  const communicationCombos=[];
  for(const q1 of ['A','B','C']) for(const q2 of ['A','B','C']) for(const q3 of ['A','B','C']) for(const q7 of ['A','B','C']) {
    const s=makeScenario({Q1:q1,Q2:q2,Q3:q3,Q7:q7});
    communicationCombos.push({answers:{Q1:q1,Q2:q2,Q3:q3,Q7:q7},communication:communicationScore(s),ethics:ethicsScore(s).score,clientExperience:clientExperienceScore(s),consent:s.clientState.consent});
  }
  const perfectCommunication=communicationCombos.find(x=>x.answers.Q1==='B'&&x.answers.Q2==='C'&&x.answers.Q3==='A'&&x.answers.Q7==='C');
  if(communicationCombos.length!==81||perfectCommunication.communication!==100||perfectCommunication.ethics!==100||perfectCommunication.clientExperience!==100||communicationCombos.some(x=>![x.communication,x.ethics,x.clientExperience].every(Number.isFinite))) throw new Error('Communication enumeration/max score failed');
  const incomplete = makeInitialState(); incomplete.currentScreen=9; incomplete.draftSelection.priorities=['Suppliers','Creditors','Governance & Family'];
  const missingAnswersMessage=validateScreen(incomplete);
  const legacySave=deepCopy(best); legacySave.scoringVersion='scoring-v5'; legacySave.structured.initialBriefing={message:'explain',concern:'ack',checkBack:'teach',disclosure:'verified'}; legacySave.structured.riskPlan={risk:'creditor',mitigation:'stage'}; legacySave.draftSelection.communicationAnswers={}; legacySave.finalOutcome.overall=77; legacySave.clientState.consent='conditional';
  const legacyStoredOutcome=deepCopy(legacySave.finalOutcome); const legacyStoredClient=deepCopy(legacySave.clientState); migrateScoringState(legacySave);
  if(legacySave.structured.initialBriefing.message!=='explain'||Object.keys(legacySave.draftSelection.communicationAnswers).length||JSON.stringify(legacySave.finalOutcome)!==JSON.stringify(legacyStoredOutcome)||JSON.stringify(legacySave.clientState)!==JSON.stringify(legacyStoredClient)) throw new Error('Legacy confirmed communication was remapped or recalculated');
  return {count,maxFinancial,maxProcess,best:concise(best),byMode:Object.fromEntries(Object.entries(byMode).map(([k,v])=>[k,concise(v)])),
    auditScope:'35,280 treatment x timing x priority x reassessment paths plus all 81 communication combinations; profile/question selections fixed to the strongest investigated case.',
    previousScoringAudit:{scoringVersion:'scoring-v3',highestTestedOverall:85,scope:'Previously tested bounded set; its result is a comparison point, not a global maximum.'},
    maxRawFinancial,
    probes:{eventEvidenceStatuses:Object.fromEntries(Object.keys(best.eventEvidence).map(id=>[id,evidenceStatus(best,id)])),derivedConsent:best.clientState.consent,legacyConsent:best.structured.initialBriefing.consent??null,zeroIsPreserved:clamp(0)===0,
      clientState:best.clientState,keepAdaptation:adaptationScore(keep),keepWithEvidence:adaptationScore(evidenceProbe),
      suitabilityWithoutRiskPlan:suitabilityScore(best),legacyRiskPlanIgnored:true,communicationCombos:communicationCombos.length,perfectCommunication,missingAnswersMessage,legacyConfirmedAnswersPreserved:true,average:concise(average),poor:concise(poor)},
    evidenceTitles:base.initialDiagnosisEvidenceIds.map(id=>EVIDENCE[id].title)};
})()
