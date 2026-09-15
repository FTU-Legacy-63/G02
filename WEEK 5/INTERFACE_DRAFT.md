# INTERFACE DRAFT

## MEDIFIN — Case #01: Toy Kingdom Inc.

### Working Prototype

- 🎨 [Canva — UI/UX Draft](https://www.canva.com/design/DAHUrjuo2iU/TwEgLcpHq5jNEXqZxAyq5Q/edit?ui=eyJBIjp7fX0)
- 🖥️ [Figma — Interactive Prototype](https://www.figma.com/proto/VtlhknTup0qQw5TX7OhloF/Medifin?node-id=1-14&p=f&t=Q6iSnSJUCTCF9sF1-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A8&starting-point-node-id=1%3A14)

The Figma prototype demonstrates the working interface for MEDIFIN's decision-based financial counseling flow.

---

## 1. Input Screens

| Screen | Player Input | Validation |
|---|---|---|
| **Diagnostic Files** | Select 3 files | Exactly 3 required |
| **Follow-Up Questions** | Select 2 questions | Exactly 2 required |
| **Final Diagnostic Question** | Select 1 question | One required |
| **Diagnosis** | Select Primary Diagnosis | Primary Diagnosis required |
| **Treatment** | Select treatment | One required |
| **Timing** | Select implementation timing | One required |
| **Stakeholder Priorities** | Select 3 priorities | Exactly 3 required |
| **Reassessment** | Keep or revise decision | Complete decision required |

---

## 2. Output Screens

### Consequence Screen

Displays developments generated from the player's:

**Treatment + Timing + Stakeholder Priorities + Case Conditions**

The new information is then used for reassessment.

### Counselor Case Report

Displays:

- Counselor Score
- Financial Resilience
- Governance Stability
- Final Outcome
- Decision Feedback
- Next Action: **Review Decision Path / Replay Case**

---

## 3. Error Messages

| Invalid Input | Error Message |
|---|---|
| Diagnostic Files ≠ 3 | `Select exactly 3 Diagnostic Files to continue.` |
| Follow-Up Questions ≠ 2 | `Select exactly 2 Follow-Up Questions to continue.` |
| No Primary Diagnosis | `Select a Primary Diagnosis before continuing.` |
| No Treatment | `Select a treatment strategy to continue.` |
| Stakeholder Priorities ≠ 3 | `Select exactly 3 stakeholder priorities.` |

---

## 4. Link to Logic

| Interface | Logic Source |
|---|---|
| User Journey | [USER_FLOW.md](USER_FLOW.md) |
| Overall Logic | [PROJECT_LOGIC_CHAIN.md](../WEEK%204/PROJECT_LOGIC_CHAIN.md) |
| Decision & Scoring Logic | [DECISION_RULES_AND_SCORING.md](../WEEK%204/DECISION_RULES_AND_SCORING.md) |
| Expected Result | [EXPECTED_RESULT_AND_LOGIC_TEST.md](../WEEK%204/EXPECTED_RESULT_AND_LOGIC_TEST.md) |
