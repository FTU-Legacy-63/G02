# MIDTERM REVIEW

## Case #01 — Toy Kingdom Inc.

> Educational financial simulation inspired by the historical Toys "R" Us case.

---

## 1. Midterm Evidence Index

This file provides a quick map of the project evidence prepared for the midterm review.

| Evidence | Document | What It Shows |
|---|---|---|
| **Product Direction** | [`PROJECT_PROPOSAL.md`](../WEEK%202/PROJECT_PROPOSAL.md) | Problem, target user, desired outcome, product statement, and feasibility |
| **Solution Structure** | [`SOLUTION_STRUCTURE.md`](../WEEK%202/SOLUTION_STRUCTURE.md) | User → Input → Process → Output → User Action, MVP flow, scope, and responsibilities |
| **Input Readiness** | [`INPUT_DICTIONARY.md`](../WEEK%203/INPUT_DICTIONARY.md) | Required financial data, case information, player choices, and game states |
| **Source Readiness** | [`SOURCE_USE_MAP.md`](../WEEK%203/SOURCE_USE_MAP.md) | Historical sources and how each source supports the case |
| **Assumptions** | [`ASSUMPTIONS.md`](../WEEK%203/ASSUMPTIONS.md) | Historical evidence, fictional adaptations, and simulation assumptions |
| **Sample Input & Output** | [`SAMPLE_INPUT_OUTPUT.md`](../WEEK%203/SAMPLE_INPUT_OUTPUT.md) | Example information flow from case input to intended output |
| **Project Logic** | [`PROJECT_LOGIC_CHAIN.md`](PROJECT_LOGIC_CHAIN.md) | Complete reasoning flow from investigation to final output |
| **Decision & Scoring Logic** | [`DECISION_RULES_AND_SCORING.md`](DECISION_RULES_AND_SCORING.md) | Financial calculations, decision criteria, stage scoring, and outcome logic |
| **Expected Result** | [`EXPECTED_RESULT_AND_LOGIC_TEST.md`](EXPECTED_RESULT_AND_LOGIC_TEST.md) | Predicted output and hand-calculated result used to validate the logic |

---

## 2. Current MVP

The current MVP is:

> **One complete playable financial counseling case — Toy Kingdom Inc.**

The player acts as a **Junior Financial Counselor** and moves through **13 screens organized into 6 phases**:

```text
1. Client Intake & Investigation
        ↓
2. Diagnosis
        ↓
3. Treatment & Execution Planning
        ↓
4. Consequence
        ↓
5. Reassessment
        ↓
6. Final Assessment
```

The player investigates incomplete financial information, identifies the primary financial problem, recommends a treatment, plans execution, observes consequences, and reassesses the decision.

### Main Output

The final **Counselor Case Report** includes:

- Counselor Performance
- Decision Feedback
- Financial Resilience
- Governance Stability
- Final Case Outcome

---

## 3. Logic Readiness

The project currently supports the following reasoning chain:

> **Input / State → Investigation → Diagnosis → Treatment → Execution → Consequence → Reassessment → Final Output**

| Component | Status |
|---|---|
| Product direction and target user | ✅ Ready |
| MVP scope and user flow | ✅ Ready |
| Required case inputs | ✅ Ready |
| Historical sources and assumptions | ✅ Ready |
| Financial calculations | ✅ Ready |
| Investigation & diagnosis logic | ✅ Ready |
| Treatment & execution logic | ✅ Ready |
| Counselor scoring structure | ✅ Ready |
| Expected result / logic test | ✅ Ready |
| Consequence & ending rules | 🟡 Refinement |
| Controlled scenario variation | 🟡 Refinement |
| UI ↔ Game Logic integration | 🟡 In Progress |

The documented logic can therefore be traced as:

> **Input / State → Rule / Process → Expected Result → Explanation**

---

## 4. Current Progress

### Completed

- Product direction and target user defined
- Case #01 selected and structured
- Required inputs and financial evidence documented
- Historical sources and fictional assumptions separated
- 13-screen / 6-phase flow defined
- Financial reasoning and scoring rules defined
- Expected result tested before implementation
- Feature Map and User Flow refined
- Canva UI concept and Figma interactive prototype developed

### In Progress

- Frontend implementation
- UI ↔ Game Engine integration
- Consequence and ending refinement
- Error / validation states
- Final Counselor Case Report
- Additional decision-path testing

---

## 5. Individual Output & Ownership

| Member | Role | Visible Output |
|---|---|---|
| **Nguyễn Phương Khuê** | Project Coordinator & Scenario Designer | Scenario structure, storyline, and case progression |
| **Trương Vĩnh Thịnh** | Frontend & Integration Developer | Frontend implementation and integration of UI, case data, and game logic |
| **Lâm Diệu Anh** | Financial Content Lead | Financial data, evidence, diagnosis/treatment content, and feedback |
| **Bùi Lê Trà Giang** | UI/UX Designer & Dialogue Writer | Screen flow, Canva/Figma prototype, and dialogue |
| **Lê Bảo Ngọc** | Game Engine & Logic Developer | Decision rules, scoring, consequence logic, and game engine |

---

## 6. Remaining / Provisional Items

The following items remain subject to refinement during implementation:

### Case Outcome Rules

The rules converting simulated consequences into:

> **Financial Resilience × Governance Stability → Final Ending**

will continue to be tested against different player paths.

### Controlled Scenario Variation

A limited amount of variation may be added to improve replayability.

Variation must:

- remain within predefined limits;
- preserve the intended financial interpretation;
- never randomly determine player success or failure.

### Implementation & Testing

The next steps are:

1. connect the interface with the game engine;
2. implement validation and consequence rules;
3. complete the Counselor Case Report;
4. compare implemented outputs with the expected logic test;
5. test alternative paths and edge cases.

---

## 7. Claim Boundary

Toy Kingdom Inc. and the Anderson Family are fictionalized for educational purposes and are inspired by the historical Toys "R" Us case.

Historical evidence, fictional adaptations, simulation assumptions, and player-generated states are documented separately.

MEDIFIN's scoring and consequence rules are **educational design rules**, not empirically validated financial prediction models.

Simulated outcomes are intended for learning purposes and should not be interpreted as professional financial advice or predictions of real restructuring outcomes.

---

## Midterm Review Summary

MEDIFIN has established:

> **Product Direction → Required Information → Evidence → Decision Logic → Expected Result**

The project has now moved from product definition toward:

> **Interface Refinement → Integration → Testing → Playable MVP**
