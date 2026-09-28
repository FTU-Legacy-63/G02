# CORE FLOW & INTEGRATION

## MEDIFIN — Case #01: Toy Kingdom Inc.

**Working Build:**  
[MEDIFIN Live Demo](https://kirisakitrangngocbk-a11y.github.io/Medifin/)

---

## 1. Working Core Flow

MEDIFIN's Week 6 build focuses on one complete playable mission:

> The player acts as a **Junior Financial Counselor** who investigates Toy Kingdom's financial condition, identifies the primary problem, selects a treatment, plans its execution, observes the consequences, reassesses the decision, and receives a final Counselor Case Report.

The working flow is:

```text
Investigation
↓
Select Diagnostic Files & Questions
↓
Diagnosis
↓
Treatment & Execution Planning
↓
Consequence
↓
Reassessment
↓
Counselor Case Report
```

The MVP retains the **13-screen / 6-phase structure** defined in the previous project documentation.

---

## 2. End-to-End Product Route

The current build connects the main product components through the following route:

```text
Player Input
↓
Input Validation
↓
Case Data & Game State
↓
Decision / Scoring Logic
↓
Consequence & Updated State
↓
Final Output
↓
Player Reflection / Next Action
```

### Input

The player provides decisions including:

- diagnostic files and questions;
- primary diagnosis;
- treatment strategy;
- execution timing and stakeholder priorities;
- reassessment decision.

### Process

The game uses the player's choices together with the predefined Case #01 financial data and decision rules to:

1. validate required selections;
2. update the current game state;
3. evaluate the player's decision process;
4. generate the corresponding consequence;
5. calculate the Counselor Performance result.

### Output

The player receives a **Counselor Case Report** containing:

- Counselor Performance;
- decision feedback;
- Financial Resilience;
- Governance Stability;
- Final Case Outcome.

---

## 3. Integration Check

| Connection | Expected Behavior | Current Evidence | Status |
|---|---|---|---|
| **Input → Validation** | Required player choices are checked before progression | The interface requires the necessary selections before continuing | **Working** |
| **Input → Game State** | Player decisions are retained for later stages | Diagnosis, treatment, execution, and reassessment choices are carried through the case | **Working** |
| **Case Data → Decision Logic** | Toy Kingdom financial information supports diagnosis and decision evaluation | Case financial data and diagnostic evidence are used throughout the investigation and decision stages | **Working** |
| **Decision Logic → Consequence** | Player choices affect the simulated consequence | Treatment and execution choices are connected to later case developments | **Working / Refining** |
| **Scoring → Final Report** | Stage evaluation is combined into Counselor Performance | Final report presents the player's performance and decision feedback | **Working** |
| **Outcome Logic → Final Report** | Company state is presented separately from player performance | Financial Resilience and Governance Stability are reported separately from Counselor Performance | **Working / Refining** |
| **Repository → Public Build** | The current MVP can be accessed outside the local development environment | [Public GitHub Pages Build](https://kirisakitrangngocbk-a11y.github.io/Medifin/) | **Deployed** |

> **Note:** Detailed decision-to-outcome mappings are still being refined. This does not change the protected core flow, but the consequence rules will continue to be calibrated and tested during Week 6.

---

## 4. Financial Logic Connection

The financial data is not displayed only as background information. It supports the player's investigation and later decisions.

Two key indicators currently used in Case #01 include:

### Interest Coverage

$begin:math:display$
\\text\{Interest Coverage\}
\=
\\frac\{\\text\{Operating Earnings\}\}\{\\text\{Interest Expense\}\}
\=
\\frac\{460\}\{457\}
\\approx 1\.01\\times
$end:math:display$

### Debt / EBITDA

$begin:math:display$
\\text\{Debt \/ EBITDA\}
\=
\\frac\{\\text\{Total Debt\}\}\{\\text\{Adjusted EBITDA\}\}
\=
\\frac\{4\,800\}\{792\}
\\approx 6\.06\\times
$end:math:display$

These indicators help connect the financial evidence to the diagnosis and treatment stages.

The game therefore follows the logic:

```text
Financial Evidence
        ↓
Player Investigation
        ↓
Diagnosis
        ↓
Treatment & Execution
        ↓
Consequence
        ↓
Learning Feedback
```

---

## 5. Counselor Performance vs. Company Outcome

MEDIFIN keeps **player performance** separate from the **company outcome**.

### Counselor Performance

Evaluates the quality of the player's decision process across:

- Investigation — 20%
- Diagnosis — 30%
- Treatment — 20%
- Execution Planning — 15%
- Reassessment — 15%

```text
Counselor Score
= 20% Investigation
+ 30% Diagnosis
+ 20% Treatment
+ 15% Execution Planning
+ 15% Reassessment
```

### Company Outcome

Represents the simulated condition of Toy Kingdom after the player's decisions.

It is summarized through:

```text
Financial Resilience
+
Governance Stability
↓
Final Case Outcome
```

This separation allows a player to make a reasonable decision even when the company remains financially fragile.

---

## 6. Current Integration Status

### Integrated

- Case #01 financial data;
- investigation flow;
- diagnosis selection;
- treatment selection;
- execution planning;
- reassessment;
- Counselor Performance scoring;
- final Counselor Case Report;
- public playable interface.

### Still Being Refined

- detailed decision-to-outcome combinations;
- consequence calibration;
- controlled scenario variation;
- final outcome and feedback wording.

These items will be refined through Week 6 testing without changing the core MVP structure.

---

## 7. Week 6 Build Boundary

The protected Week 6 MVP is:

> **One complete playable Case #01 — Toy Kingdom Inc., using the existing 13-screen / 6-phase financial counseling flow.**

The Week 6 priority is therefore:

> **Integration → Testing → Bug Fixing → Stabilization**

rather than adding new major features or expanding the MVP scope.
