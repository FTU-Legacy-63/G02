# MEDIFIN — Individual Development Footprint

**Role:** Lead Developer  
**Project:** MEDIFIN / Financial Clinic — an educational financial-consulting simulation  
**Main case discussed here:** Case 01, *Toy Kingdom Inc.* (an educational simulation inspired by Toys “R” Us)  
**Development scope:** early playable prototype → MEDIFIN V2 → MEDIFIN V4 → iterative scoring, gameplay, and interface refinements

> **My contribution in one sentence:** I translated the team's financial-consulting game concept into playable decision logic, built MEDIFIN V2's first decision-and-scoring implementation, and then invested most of my development effort in MEDIFIN V4—the first visually complete version of the experience—while repeatedly reviewing whether the scoring and outcomes actually made sense.

## 1. What I was responsible for

As Lead Developer, I worked primarily on **game implementation, scoring and state logic, frontend integration, and debugging**. My responsibility was to turn specifications created with the financial-content, game-planning, and design members into behavior that a player could actually interact with and that the team could explain and test.

I used AI coding tools, particularly Codex, throughout development. This was **AI-assisted implementation**, not a claim that I hand-wrote every line. My work involved breaking requirements into actionable prompts, reviewing the generated code and game behavior, identifying inconsistencies, revising the requirements, and checking important decision paths. My most substantial contribution was making the **financial reasoning and the playable experience work together**, rather than treating scoring as a decorative number shown at the end.

## 2. My work across the development stages

| Stage | What I contributed | Why it mattered |
|---|---|---|
| **Early phase — MVP and first playable flow** | Worked on the first functional prototype, its frontend and underlying game-logic draft, core flow, decision-to-consequence connections, initial finance/scoring logic, and reproducible run process. | Moved MEDIFIN from a game idea and written case into something players could test. |
| **MEDIFIN V2 — first decision set and scoring formulas** | Built the first version that brought the decision set and score-calculation formulas into the playable game, then examined inconsistencies between selected decisions, intended scoring rules, and the displayed result. | Created the initial measurable game logic and exposed where the scoring model needed further calibration. |
| **MEDIFIN V4 — first visually complete version** | Worked intensively on scene-based frontend implementation, character-led dialogue, transitions, conditional story routes, document popups, follow-up interactions, and summary presentation. | Established MEDIFIN's first complete visual-novel-style interface across the core player journey. |
| **Subsequent refinements** | Iterated on scoring fairness, decision dependencies, visual consistency, and the integration of updated game logic with the designed interface. | Reduced the risk of a visually polished game displaying logically inconsistent decisions or misleading scores. |

### 2.1 Early phase — making the MVP explainable and playable

My early-stage work was centred on connecting the core consulting journey:

**Client situation → select and inspect information → diagnose the problem → recommend a treatment → observe consequences → reassess → receive feedback.**

In this phase I helped turn the team's raw game flow and financial information into a prototype with choices, state changes, and results. This required understanding which information the player had actually seen, when later choices should become available, and how earlier decisions should influence later outcomes.

I also worked with the financial logic behind the case. Rather than treating the company's statements as background decoration, I had to be able to calculate and interpret indicators such as revenue growth, gross margin, operating margin, interest coverage, and leverage, and then explain how those indicators supported or challenged a diagnosis.

On the development side, I organised and demonstrated the playable code through GitHub and worked on instructions for teammates—including non-coders—to obtain and run the project. I could demonstrate the flow, reproduce a decision path, identify where its result diverged from the expected behavior, and turn the issue into a specific AI-coding request.

### 2.2 MEDIFIN V2 — the first decision set and scoring implementation

**V2 was my first major game-logic milestone.** It was the version in which I implemented the initial decision set and the first score-calculation formulas in a playable form.

The main challenge was that a scoring formula can be syntactically valid but still be **wrong as an assessment of consulting quality**. I therefore spent considerable effort reviewing which actions deserved credit, how scores accumulated across rounds, how choices depended on previously discovered information, and whether the final result was proportionate to the player's actual decisions.

I focused especially on cases where the game produced implausibly **low scores for strong decision paths** or **high scores for weak paths**. An earlier scoring review, for example, found a configuration in which the effective Counselor Process ceiling was approximately 79 points even though the game was supposed to distinguish exceptional 90–100 performance. I treated that as a **calibration and rule-coverage problem**, not simply a UI problem to be solved by adding bonus points.

My work on V2 gave the team an operational base from which scoring gaps could be detected and corrected. It was **not** the final scoring architecture: the rules continued to evolve as the team refined the case, decision set, and definition of good financial consultation.

### 2.3 MEDIFIN V4 — the first visually complete version

**V4 took the greatest share of my development effort.** The reason is fundamental to the product: MEDIFIN is intended to feel like a **visual novel with financial decision-making**, not a questionnaire decorated with a few illustrations.

A visual-novel interface requires more than recreating Figma frames. Dialogue needs to appear at the right time; the player needs to understand which character is speaking; each document or scene must have the correct reveal condition; transitions must preserve the story; and branching dialogue must remain consistent with choices made several rounds earlier.

My V4 frontend work covered the implementation and refinement of **Scenes 1, 6, 8, 10, the Governance & Family route, Scene 14, and the Summary**, together with additional transitions and interactions across the playable flow. This involved:

- Creating or integrating character-led introduction scenes, including the client's document handover and the CFO's presentation of audited financial statements.
- Handling conditional narrative content for the **Governance & Family** investigation route, including the explanation of Toy Kingdom's unusually large **$149 million Other Income** item and its associated family dispute.
- Improving the Round 2 document interaction so that information appears at the intended point in the questioning workflow, with a larger and more readable popup.
- Refining follow-up scenes and choice layouts, including client-message interactions, character visuals, and the Round 11 interface.
- Improving readability and consistency: English-language copy, font uniformity, contrast, question wording, the customer profile, game-rule guidance, and the results screen.

V4 was the first version where the **visual presentation of the main game journey came together**. It still required refinement to align every scene with the latest game engine and decision rules; a complete interface should not be confused with a completely validated simulation.

## 3. The most demanding work: making the scoring meaningful

The scoring engine was not a minor feature for me. It was one of the most difficult parts of MEDIFIN because the game aims to simulate the **quality of a financial consultant's work**, not reward the player for guessing a preferred answer.

### What I tried to make the scoring reflect

1. **Evidence quality, not just activity.** Opening more documents or asking more questions should not automatically make someone a better consultant. Material information, relevance, and limited investigation resources matter.
2. **Evidence-backed diagnosis.** A diagnosis needs support from the information the player actually discovered. An irrelevant or contradictory item should not be rewarded as proof.
3. **Feasible treatment, not a superficially attractive option.** Recommendations should be assessed against the underlying problem, financial constraints, execution feasibility, and risks created.
4. **Professional judgment, not simply client approval.** A client may dislike responsible advice. Communication quality and ethics should not be reduced to how happy the client feels.
5. **Implemented actions versus intended actions.** A proposed treatment does not automatically improve the company's financial condition; the engine must respect what was actually executed and what later events changed.
6. **Adaptation after new information.** A strong consultant reassesses a plan when a material assumption no longer holds.

The documented Counselor Process framework uses six dimensions:

| Competency | Documented weight |
|---|---:|
| Investigation | 20% |
| Reasoning & Diagnosis | 20% |
| Solution Suitability | 25% |
| Communication | 15% |
| Professionalism & Ethics | 10% |
| Monitoring & Adaptation | 10% |
| **Total** | **100%** |

These are the **documented process-scoring dimensions**, not a claim that every historical V2 or V4 build already implemented all six perfectly. I used the evolving scoring specifications to identify where the playable logic and the intended assessment diverged.

The current case documentation also separates **Counselor Performance**, **Financial Outcome**, and the **Governance & Family outcome**. That distinction is important. A company can survive financially while governance deteriorates; similarly, a well-reasoned recommendation should not become a bad consulting decision solely because a later scenario event was unfavorable.

### How I reviewed scoring bugs

My debugging process was to trace the full chain:

`Player selection → available evidence → decision preconditions → state changes → scoring dimension → financial/governance consequences → final feedback`

I compared **strong, weak, and mixed decision paths** to look for score ranges that were unreasonable, decisions that had the wrong effect, and branches that could reach an outcome without the required information. I paid particular attention to both ends of the scale: a theoretically excellent path must be capable of receiving a genuinely high score, while a weak path should not receive an inflated result because it selected several individually rewarded options.

This was iterative calibration and debugging, not proof that every conceivable route is bug-free. The repository's [expected-path documentation](https://github.com/kirisakitrangngocbk-a11y/Medifin/blob/main/docs/case01/11_EXPECTED_PATHS.md) provides a useful reference for verifying combinations of financial survival and family-governance outcomes.

## 4. Gameplay and interface problems I identified or worked to correct

| Area | Problem I identified | Correction I specified or worked on |
|---|---|---|
| **Decision dependencies** | Round 9 asked the player to choose whether David agreed, even though his response should depend on prior communication. | Derive the client's response from earlier choices/state rather than letting the player select the outcome directly. |
| **Invalid follow-up state** | A later question did not make sense when the player kept both previous decisions unchanged. | Make follow-up copy and available choices consistent with the retained diagnosis/treatment. |
| **Document reveal timing** | A selected dossier appeared at the wrong time during Round 2. | Show its popup after the appropriate **Record Question** action; improve popup readability. |
| **Branching narrative** | The Governance & Family route needed information and scenes unavailable to other routes. | Condition additional narrative screens on the investigation path and keep the common flow coherent. |
| **Round 11 usability** | Redundant briefing/agreement text and oversized choice cards interrupted the follow-up experience. | Simplify the interaction and resize the four options relative to the adjacent character artwork. |
| **Language and visual consistency** | Low-contrast text, inconsistent fonts, unclear labels, and mixed-language screens made decisions harder to interpret. | Standardize English copy, hierarchy, question phrasing, contrast, profile visuals, and result presentation. |
| **Onboarding and results** | Players could misunderstand the rules and how their performance was evaluated. | Introduce contextual guidance, a Game Rules popup, and clearer final score presentation. |
| **Frontend–logic divergence** | The visually designed build and the newer rules/scoring build were no longer aligned. | Specify how to preserve the preferred visual treatment while incorporating the updated decision and scoring logic. |

**Scope note:** These examples include issues I directly diagnosed, implementation requirements I wrote for Codex, and subsequent revisions. A request in a prompt is not automatically proof that the fix was successfully merged or regression-tested; completion should be checked against the relevant source snapshot or demo.

## 5. What I can personally explain, calculate, demonstrate, and reproduce

### Explain

I can walk through the financial-clinic flow from evidence collection to diagnosis, treatment, follow-up, and results. I can explain why later options need to read previous decisions, why Counselor Process differs from Financial Outcome, and how I translate a game-design issue into a structured AI implementation prompt.

### Calculate

I can interpret the financial numbers used in Toy Kingdom rather than merely repeat them. For example, the **fictional FY2026 case figures** support the following checks:

| Indicator | Calculation from the case | Result |
|---|---|---:|
| Revenue growth | `11,540 / 11,802 − 1` | **−2.2%** |
| Gross margin | `4,108 / 11,540` | **35.6%** |
| Operating earnings margin | `460 / 11,540` | **4.0%** |
| Interest coverage (operating earnings / interest expense) | `460 / 457` | **1.01×** |
| Debt / Adjusted EBITDA | `4,800 / 792` | **6.06×** |
| Net debt / Adjusted EBITDA | `(4,800 − 566) / 792` | **5.35×** |

These figures explain why apparent operating improvement is not enough to establish that a highly leveraged client has recovered. They are **figures from MEDIFIN's educational scenario**, not assertions about Toys “R” Us having these results in calendar-year 2026. See the [case brief](https://github.com/kirisakitrangngocbk-a11y/Medifin/blob/main/docs/case01/00_CASE_BRIEF.md) and [source material](https://github.com/kirisakitrangngocbk-a11y/Medifin/blob/main/docs/CASE02_SOURCE_BRIEF.md).

### Demonstrate

I can demonstrate the playable consultation flow, point out where selected evidence changes the available choices, show how results are displayed, and explain the repository structure and basic local run process to another team member.

### Reproduce

I can follow a specified decision path, record the actual choices and score, compare them with the documented expected result, and isolate where a mismatch occurs. I can then describe the precise correction for an AI coding tool and rerun the affected route. This is particularly important after changes to scoring formulas, state dependencies, or scene transitions.

## 6. Repository evidence and attribution

**Project repository:** [MEDIFIN on GitHub](https://github.com/kirisakitrangngocbk-a11y/Medifin)

| Repository evidence | What it demonstrates |
|---|---|
| [`app.js`](https://github.com/kirisakitrangngocbk-a11y/Medifin/blob/main/app.js), [`index.html`](https://github.com/kirisakitrangngocbk-a11y/Medifin/blob/main/index.html), [`styles.css`](https://github.com/kirisakitrangngocbk-a11y/Medifin/blob/main/styles.css) | A browser-based playable implementation, UI, and runtime logic in the repository. |
| [Evidence and diagnosis rules](https://github.com/kirisakitrangngocbk-a11y/Medifin/blob/main/docs/case01/03_EVIDENCE_TRUTH.md) | The distinction between revealed evidence, support, contradiction, and diagnosis requirements. |
| [Outcome framework](https://github.com/kirisakitrangngocbk-a11y/Medifin/blob/main/docs/case01/04_OUTCOME_ENGINE.md) | Separation of Counselor Process, financial outcome, and governance/family result. |
| [Financial engine](https://github.com/kirisakitrangngocbk-a11y/Medifin/blob/main/docs/case01/07_FINANCIAL_ENGINE.md) | How simulated financial state and risk contribute to outcomes. |
| [Governance engine](https://github.com/kirisakitrangngocbk-a11y/Medifin/blob/main/docs/case01/08_GOVERNANCE_ENGINE.md) | Conditional family/governance logic, separate from financial survival. |
| [Events and reassessment](https://github.com/kirisakitrangngocbk-a11y/Medifin/blob/main/docs/case01/09_EVENT_AND_REASSESSMENT.md) | How new events affect the second-period decision state. |
| [Expected paths](https://github.com/kirisakitrangngocbk-a11y/Medifin/blob/main/docs/case01/11_EXPECTED_PATHS.md) | Reference paths across the three financial and three governance outcome categories. |
| [Source boundaries](https://github.com/kirisakitrangngocbk-a11y/Medifin/blob/main/docs/case01/12_SOURCE_BOUNDARIES.md) | Which facts are historical references, fictional scenario assumptions, or balancing rules. |

These links establish **project-level technical evidence**, not automatic personal authorship of every line or document. My specifically attributable evidence also includes the historical V2 and V4 builds, Codex prompt/revision history, screenshots of the scenes I implemented, and decision-path debugging records. Where those version snapshots or test records are not yet linked in the public repository, I do **not** claim they are independently verified by the current commit history.

## 7. Boundaries of my contribution

I worked closely with the game-planning, financial-content, and UI/UX members. I do **not** claim sole ownership of the original game concept, all case research and financial source data, the storyline/dialogue writing, or all Figma artwork. My central contribution was the **implementation and integration effort**: turning those inputs into a playable game, identifying when the mechanics or scores contradicted the intended logic, and directing technical revisions with AI assistance.

I also distinguish **implemented work** from **design proposals or ongoing fixes**. Proposed randomization of financial case inputs, more granular learning feedback, and later scoring/communication improvements should not be presented as shipped features until a specific build demonstrates them. Similarly, the existence of a scoring specification or expected-path table does not establish that all possible decisions have been tested.

## 8. What I learned and what I would improve

This project taught me that the hardest part of an AI-assisted financial simulation is often **not generating code**. It is defining precisely what should happen, ensuring financial assumptions and rules are consistent, and deciding how to test whether the result is reasonable.

V2 taught me that a score can calculate correctly in code but still be fundamentally unfair or poorly calibrated. V4 taught me that visual storytelling is a technical integration problem: scene timing, branch conditions, dialogue, and the underlying game state have to remain synchronized. Both versions made me more systematic about prompting, debugging, and distinguishing a working screen from a working product.

If I were continuing the project, I would keep one canonical build, maintain versioned decision/scoring specifications, and attach a repeatable expected-versus-actual test to each material scoring or state change. I would also preserve direct links from every individual contribution claim to the corresponding source snapshot, test, or before-and-after demonstration.

---

**Personal contribution summary:** My strongest MEDIFIN work lies in **V2's first playable decision-and-scoring system, V4's first visually complete visual-novel interface, and the iterative effort to make the financial-consulting simulation coherent, fair, and explainable**. I used AI to accelerate coding, but the difficult part I owned was understanding the desired behavior, finding contradictions, defining fixes, and making the experience more faithful to the reasoning process of a real financial consultant.
