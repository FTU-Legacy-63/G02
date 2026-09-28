# WEEK 6 — TEST CASES

## MEDIFIN — Case #01: Toy Kingdom Inc.

This document records the main tests used to verify that the Week 6 MVP works as intended.

Testing focuses on two areas:

1. **Technical correctness** — inputs, validation, game state, navigation, and outputs work correctly.
2. **Financial correctness** — calculations, scoring, and financial interpretation are consistent with the approved case logic.

---

## 1. Test Structure

Each test follows:

```text
Input / Player Action
        ↓
Expected Result
        ↓
Actual Result
        ↓
Pass / Fail
```

The expected result is defined from the approved project logic before comparison with the implemented result.

---

## 2. Core Test Table

| ID | Type | Input / Test Action | Expected Result | Actual Result | Status | Tester / Verifier |
|---|---|---|---|---|---|---|
| **T01** | Normal | Complete one valid path from Investigation → Diagnosis → Treatment → Execution → Reassessment | All stages accept the selections and generate a complete Counselor Case Report | Full case can be completed and final report is generated | **Pass** | Lê Bảo Ngọc / Trương Vĩnh Thịnh |
| **T02** | Boundary | Select no relevant diagnostic evidence before diagnosis | Investigation receives the minimum score and Diagnosis Evidence Support is penalized | Investigation = 40/100 and evidence-support penalty is applied | **Pass** | Lê Bảo Ngọc / Lâm Diệu Anh |
| **T03** | Invalid Input | Attempt to continue without completing the required investigation selections | Validation prevents progression and tells the player what is missing | Validation message appears and progression is blocked | **Pass** | Trương Vĩnh Thịnh / Nguyễn Phương Khuê |
| **T04** | Financial | Check Interest Coverage using Operating Earnings = 460 and Interest Expense = 457 | 460 / 457 ≈ **1.01x** | Calculation returns approximately **1.01x** | **Pass** | Lâm Diệu Anh / Lê Bảo Ngọc |
| **T05** | Financial | Check Debt / EBITDA using Debt = 4,800 and Adjusted EBITDA = 792 | 4,800 / 792 ≈ **6.06x** | Calculation returns approximately **6.06x** | **Pass** | Lâm Diệu Anh / Lê Bảo Ngọc |
| **T06** | Scoring | Use a treatment that fits the diagnosis but select a weak execution timing | Treatment evaluation remains stronger while Execution Planning score decreases | Treatment and Execution are evaluated separately as intended | **Pass** | Lê Bảo Ngọc / Nguyễn Phương Khuê |
| **T07** | Reassessment | Make a reassessment after receiving new case information | New evidence can affect the reassessment evaluation and feedback | Reassessment choice is recorded and reflected in final feedback | **Pass** | Lê Bảo Ngọc / Bùi Lê Trà Giang |
| **T08** | Validation | Submit an invalid or incomplete diagnosis state | Invalid state is rejected rather than producing a final result | Validation blocks the invalid state | **Pass** | Trương Vĩnh Thịnh / Lê Bảo Ngọc |
| **T09** | Data / UI | Trigger a case-data loading problem | Application handles the problem without breaking the entire interface | Error state is shown without crashing the main interface | **Pass** | Trương Vĩnh Thịnh / Lê Bảo Ngọc |
| **T10** | End-to-End | Complete the full Case #01 flow from first screen to final report | Player reaches the final Counselor Case Report with decisions and scores preserved | Full playable session completes successfully | **Pass** | Nguyễn Phương Khuê / Trương Vĩnh Thịnh |

---

## 3. Manual Financial Verification

Two core financial calculations are manually checked against the game logic.

### Test F01 — Interest Coverage

Formula:

```text
Interest Coverage
= Operating Earnings / Interest Expense
= 460 / 457
= 1.0066
≈ 1.01x
```

**Expected:** approximately `1.01x`  
**Result:** Pass

---

### Test F02 — Debt / EBITDA

Formula:

```text
Debt / EBITDA
= Total Debt / Adjusted EBITDA
= 4,800 / 792
= 6.0606
≈ 6.06x
```

**Expected:** approximately `6.06x`  
**Result:** Pass

These checks confirm that the displayed financial indicators are consistent with the underlying Case #01 data.

---

## 4. Scoring Consistency Check

The Counselor Score is calculated from five separate components:

| Component | Weight |
|---|---:|
| Investigation | 20% |
| Diagnosis | 30% |
| Treatment | 20% |
| Execution Planning | 15% |
| Reassessment | 15% |
| **Total** | **100%** |

Therefore:

```text
Counselor Score
= 0.20(Investigation)
+ 0.30(Diagnosis)
+ 0.20(Treatment)
+ 0.15(Execution Planning)
+ 0.15(Reassessment)
```

Testing verifies that:

- each component is evaluated separately;
- the weights total 100%;
- the final score uses the defined weights;
- company outcome is not directly used as the Counselor Score.

---

## 5. Current Testing Boundary

The current tests verify:

- input validation;
- progression through the core flow;
- financial calculations;
- scoring structure;
- game-state continuity;
- reassessment;
- final report generation;
- full end-to-end completion.

### Still to Be Tested After Decision Logic Is Finalized

Detailed consequence testing will be added after the final decision-to-outcome rules are approved.

This will include:

```text
Financial State
+ Diagnosis
+ Treatment
+ Timing
+ Stakeholder Priorities
        ↓
Expected Consequence
        ↓
Financial Resilience
+ Governance Stability
        ↓
Final Outcome
```

These tests are intentionally kept separate from the current test set because the detailed consequence matrix is still being finalized.

---

## 6. Week 6 Test Status

Current core testing confirms that the MEDIFIN MVP can:

> **Receive Player Input → Validate → Process Financial Logic → Preserve Game State → Generate Output → Complete the Case**

The next testing priority is to validate the finalized **decision-to-outcome relationships** and record any resulting issues in the Week 6 Bug Log.
