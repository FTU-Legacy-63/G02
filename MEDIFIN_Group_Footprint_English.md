**Group Footprint**

# Product Name

MEDIFIN — Financial Clinic (Case #01: Toy Kingdom Inc.)

# Group Code

G02

# Demo Link

<https://kirisakitrangngocbk-a11y.github.io/Medifin/>

# Problem the Group Wants to Solve

Finance and banking students learn many concepts, metrics, and analytical methods, but have few opportunities to practise decision-making when a problem has not yet been clearly identified and information is incomplete. In reality, a company often faces several problems at once. Consultants must select relevant information, distinguish symptoms from root causes, make evidence-based recommendations, and understand the trade-offs of each option.

Therefore, the group developed MEDIFIN, a financial consulting simulation game. Players take on the role of a Junior Financial Counselor: investigating financial records, identifying the main problem, selecting a course of action, planning implementation, observing consequences, and reassessing decisions. The product does not merely indicate whether a decision is right or wrong; it explains why a decision is strong or weak. A key distinction is that decision quality (Counselor Performance) is assessed separately from the company's result (Case Outcome).

# Target Users

Students majoring in Finance, Banking, Accounting, or Business who already have a foundational understanding of financial statements. They need a visual tool to practise diagnostic thinking and decision-making rather than simply calculating metrics.

Use cases include studying, group demonstrations, and classroom discussions. For example, students may receive the same financial statements but select different evidence: one may focus on declining revenue and choose cost-cutting, while another identifies interest-payment pressure and chooses debt restructuring. The class can compare the reasoning behind each choice.

# What the Product Can Currently Do

- Simulates a complete financial consulting case. Case #01, Toy Kingdom Inc. (a fictional company inspired by Toys "R" Us), includes 13 screens across 6 stages: Client Intake & Investigation → Diagnosis → Treatment & Execution Planning → Consequence → Reassessment → Final Assessment.
- Limits information to make players prioritise evidence. Players select 3 of 7 Diagnostic Files, 2 Follow-Up Questions, and 1 Final Diagnostic Question. Unselected items are locked and remain locked during Reassessment.
- Provides sourced financial data. Financial statements and metrics are based on Toys "R" Us's 10-K, earnings release, and 2005 sale-leaseback records (S01–S03), distinguished from fictional elements (A01–A10).
- Supports diagnosis and treatment selection. Players identify relevant issues, choose one Primary Diagnosis (CD-A–F), one Treatment (PD-A–F), one Timing option (TG-A–D), and three stakeholder priorities.
- Generates consequences according to rules based on treatment, timing, stakeholders, and case conditions (sales, liquidity, debt, suppliers, stores, digital, and governance).
- Allows reassessment: players retain or revise their diagnosis and treatment and must explain their reasoning.
- Scores decisions and produces a final report: Counselor Score out of 100, Financial Resilience, Governance Stability, Final Ending, and feedback in a Counselor Case Report.
- Deployed on GitHub Pages; passed test cases T01–T10 and bug-log checks B01–B05.

# Input

- Diagnostic Files: select exactly 3 of 7 files (HS-A Sales & Customer, HS-C Liquidity, HS-D Capital Structure, HS-E Product & Category, HS-G Governance, etc.).
- Follow-Up Questions: select exactly 2 of 7 questions (CH1 group).
- Final Diagnostic Question: select 1 of 7 questions (CH2 group).
- Diagnosis: identify relevant issues and select 1 Primary Diagnosis (CD-A–F).
- Treatment: select 1 option (PD-A–F).
- Timing: select 1 option (TG-A–D).
- Stakeholder Priorities: select exactly 3 groups (e.g., Creditors, Suppliers, Holiday Inventory).
- Reassessment: retain or revise diagnosis and treatment, with a rationale.
- Fixed case data (not entered by the player): net sales 11,540m; Adjusted EBITDA 792m; operating earnings 460m; interest expense 457m; cash 566m; inventory 2,476m; total debt approximately 4,800m; secured debt approximately 3,400m (USD).
- Controlled variation: same-store sales and holiday sales stress fluctuate within permitted ranges. \[Confirm whether this feature is included in the final version.\]

# Logic or Processing Rules

Workflow: Evidence → Reasoning → Classification → Score. The score reflects decision quality, not the company's outcome.

## 1. Financial Metrics Used as Evidence (Not Directly Scored)

Interest Coverage = Operating Earnings / Interest Expense = 460 / 457 ≈ 1.01x

Debt / EBITDA = 4,800 / 792 ≈ 6.06x

Net Debt / EBITDA = (4,800 − 566) / 792 ≈ 5.35x

EBIT margin ≈ 4.0%; Gross margin ≈ 35.6%; Revenue growth ≈ −2.2%

Slightly declining revenue, interest coverage close to 1.0x, and high leverage suggest financing pressure is more significant than the decline in revenue.

## 2. Stage Scores (0–100)

Investigation = 50% Files + 30% Follow-Up + 20% Final Question

Diagnosis = 40% Problem Identification + 35% Primary Diagnosis + 25% Evidence Support

Treatment = 50% Root-Cause Fit + 30% Feasibility + 20% Risk Awareness

Execution = 40% Timing + 60% Stakeholder Preparation

Reassessment = 50% Evidence Response + 30% Decision Consistency + 20% Risk Recognition

## 3. Overall Score

Counselor Score = 0.20 Investigation + 0.30 Diagnosis + 0.20 Treatment + 0.15 Execution + 0.15 Reassessment

Test example: scores of 86 / 87 / 88 / 92 / 94 produce 88.8 ≈ 89/100. Screen 10 (Consequence) is not scored.

## 4. Important Rules

- Evidence Support is counted only when the player has actually opened the corresponding evidence (bug B02 was fixed to ensure this).
- Treatment, timing, and stakeholders are assessed in context; there is no universally optimal answer.
- Both retaining and changing a decision during reassessment can be valid. Only evidence-based reasoning earns points.
- Case Outcome = Financial Resilience (Stable / Fragile / Collapse) + Governance Stability (Stabilized / Divided / Loss of Control) → Final Ending. Credibility (Low / Medium / High) indicates judgement quality and may affect access to treatments, but does not determine the outcome alone.
- \[The document does not specify the exact mapping from Resilience + Stability to Final Ending, how Credibility is calculated, or the decision consequence table. The group should add these details.\]

# User Flow

1\. The user opens the game and views Client Intake (Screen 0), which presents client information without revealing the root cause.

2\. Consultation (Screen 1): hears the client's stated problem and competing explanations.

3\. Selects exactly 3 of 7 Diagnostic Files (Screen 2); the remaining files are locked.

4\. Selects exactly 2 Follow-Up Questions (Screen 3).

5\. Views the complete Financial Statements (Screen 4).

6\. Selects 1 Final Diagnostic Question (Screen 5).

7\. Diagnosis (Screen 6): identifies relevant issues and selects a Primary Diagnosis.

8\. Selects Treatment (Screen 7), Timing (Screen 8), and exactly 3 Stakeholder Priorities (Screen 9).

9\. Consequences (Screen 10): reviews developments generated by the plan.

10\. Reassessment (Screen 11): retains or revises the decision and provides a rationale.

11\. Case Closure (Screen 12): receives the Counselor Case Report, then reviews the decision path or replays the case.

Each step has clear validation, such as "Select exactly 3 Diagnostic Files to continue" or "Select exactly 3 stakeholder priorities." Weak choices do not block the game; they are reflected in scores and feedback.

# Output

- Consequence Screen: new developments generated by treatment, timing, stakeholders, and case conditions.
- Counselor Case Report includes Counselor Performance (Investigation, Diagnosis, Treatment, Execution Planning, Reassessment, and overall score /100); Case Outcome (Financial Resilience, Governance Stability, Final Ending); feedback structured as Result → Reason → Meaning → Action → Limit without revealing the answer; and options to Review Decision Path or Replay Case.
- Clear error messages when required inputs are missing or invalid.

# Important Design Choices

- One complete case rather than multiple cases: prioritises a full playthrough from investigation to feedback; scope was frozen in Week 6.
- Predefined, sourced data rather than real-time data: evidence is traceable, easy to test, and explainable. Fictional elements must be clearly identified in ASSUMPTIONS.
- Limited information (3 of 7 files): makes evidence selection part of professional decision-making.
- Separating Counselor Performance from Case Outcome: players may reason well and still face a difficult outcome, avoiding the misconception that a high score means the company performs well.
- Rule-based logic rather than an open-ended AI chatbot: easier to test and explain, and appropriate for the course scope.
- Assessing treatment against the player's diagnosis rather than a single correct answer: evaluates root-cause fit, feasibility, and risk awareness.
- Simplifying the family-governance storyline: keeps it secondary so it does not distract from the core financial problem.
- Code-based web implementation: Financial Case Data → Decision & Scoring Logic → Game Engine → Frontend → Browser; interface designed in Canva/Figma. \[Specify exact technologies (HTML/JS, framework, etc.) if desired.\]

# What the Group Did Well

1\. Evidence-based scoring logic. Evidence Support is penalised when players guess correctly without investigating (T02, B02), so the game rewards reasoning rather than answer-guessing tricks.

2\. Traceable data sources. S / A / G are clearly classified, historical facts are separated from fictional assumptions, and each metric is manually checked (F01, F02).

3\. Separating Counselor Performance from Case Outcome makes feedback fairer and more educational.

4\. A coherent gameplay flow with clear validation. The 13-screen flow is complete, error messages specify what needs correction, and duplicate submissions are prevented (B01).

5\. Prioritised testing and bug fixing. Ten test cases and five bugs were classified as Critical/Major/Minor, with assigned fixers and reviewers.

6\. Scope discipline. Freezing scope prevented new features from being added before the core was stable; the public build runs successfully.

# Current Limitations

1\. Only one case: consulting skills across industries and other scenarios cannot yet be assessed, and replay value is limited.

2\. Rule-based consequences rather than real-world forecasts: thresholds and outcomes are educational rules; Resilience, Stability, and Credibility are not standard metrics or credit ratings.

3\. The 3-of-7 information limit is a game rule and does not reflect every real consulting situation.

4\. Family-governance elements (Houndstooth and the Anderson conflict) are fictional and simplified, not historical evidence.

# What the Group Learned

- Problem and users: Initially, the group focused on testing financial calculations. During development, it realised the greater challenge was helping players understand a company's problems, make decisions with incomplete information, and accept trade-offs.
- Flow design: The group moved from a static interface concept to a prototype in which each choice could affect later developments. It also realised that a dashboard should do more than display figures; it should help players track the company's financial position throughout decision-making.
- Turning theory into game rules: Evidence-based diagnosis and financial decision evaluation seem clear in theory, but implementation required defining what counts as evidence, which choices affect scores, and which consequences follow. This required more consideration than expected.
- Testing: Bug B02 showed that a game running does not necessarily mean it functions correctly. Errors in scoring conditions or choice handling can make the final result misrepresent the player's decisions. Both financial logic and interactions among game rules must be tested.
- Scope management: Freezing scope in Week 6 helped the group focus on integration, testing, and bug fixing instead of adding features. A complete product does not need many features; consistency among existing features matters more.
- Teamwork: Dividing work into scenario, frontend, financial content, UI/UX, and logic gave each member a clear responsibility. However, completing individual parts well is not enough; everyone must understand how the parts connect to avoid inconsistencies during integration.

# Suggestions for the Next Cohort

1\. Add more cases using the same Investigate → Diagnose → Treat → Execute → Reassess framework for other industries and crises, such as liquidity, working capital, and M&A.

2\. Complete and validate the consequence matrix. Define the consequence table before coding and create test cases for each combination of decisions.

3\. Introduce controlled variation once the fixed flow is stable, increasing replay value without changing financial conclusions.

4\. Test with real users earlier and measure whether the feedback helps them understand the reasoning.

5\. Prioritise core logic over secondary features, and update documentation alongside the code so the demo remains consistent with the product description.