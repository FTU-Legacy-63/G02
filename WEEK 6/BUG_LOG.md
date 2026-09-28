# WEEK 6 — BUG LOG

## MEDIFIN — Case #01: Toy Kingdom Inc.

This document records issues identified during Week 6 integration and testing of the MEDIFIN MVP.

Issues are prioritized as:

- **Critical** — breaks the core flow or produces incorrect financial/logic results.
- **Major** — an important function works incorrectly but the core flow can continue.
- **Minor** — usability, interface, or presentation issue that does not break the core flow.

---

## 1. Bug Log

| ID | Issue / Steps to Reproduce | Severity | Expected Result | Fix / Current Status | Owner | Verifier |
|---|---|---|---|---|---|---|
| **B01** | Rapidly click **Submit Diagnosis** more than once | Major | Diagnosis should be submitted only once and game state should update once | Submission is disabled after the first valid click to prevent duplicate state updates — **Fixed** | Trương Vĩnh Thịnh | Lê Bảo Ngọc |
| **B02** | Select a diagnosis without unlocking the supporting diagnostic evidence | Critical | Evidence Support should depend on whether relevant evidence was actually investigated | Evidence-support logic now checks the player's unlocked evidence before awarding credit — **Fixed** | Lê Bảo Ngọc | Lâm Diệu Anh |
| **B03** | Attempt to complete Reassessment without providing the required rationale | Minor | Player should provide a rationale before completing the reassessment stage | Input validation added before submission — **Fixed** | Bùi Lê Trà Giang | Trương Vĩnh Thịnh |
| **B04** | Controlled scenario variation produces a change outside the intended range | Major | Variation should remain small enough that the core financial interpretation does not change | Variation range restricted to the predefined limit — **Fixed / Monitoring** | Lê Bảo Ngọc | Lâm Diệu Anh |
| **B05** | Open financial statement tables on a smaller screen | Minor | Financial information should remain readable without breaking the page layout | Responsive scrolling added to financial tables — **Fixed** | Bùi Lê Trà Giang | Trương Vĩnh Thịnh |

---

## 2. Priority Review

### Critical

**B02 — Evidence Support Logic**

This issue directly affected scoring correctness because a player could receive evidence-support credit without investigating the corresponding evidence.

It was prioritized because MEDIFIN's learning logic requires:

```text
Investigation
↓
Evidence
↓
Diagnosis
↓
Evaluation
```

The diagnosis should therefore not receive full evidence support when the supporting information has not been investigated.

**Status:** Fixed and verified.

---

### Major

**B01 — Duplicate Diagnosis Submission**

Could create duplicate state updates when the player submits the same decision multiple times.

**Status:** Fixed.

**B04 — Scenario Variation Boundary**

Controlled variation must remain within the approved range so that replayability does not change the intended financial interpretation of Case #01.

**Status:** Fixed / monitored during further testing.

---

### Minor

**B03 — Missing Reassessment Rationale**

Did not break the game engine but allowed the player to finish a decision stage without providing the intended reasoning.

**Status:** Fixed.

**B05 — Financial Table Display**

Affected readability on smaller screens but did not affect financial calculations or game logic.

**Status:** Fixed.

---

## 3. Current Critical Bug Status

At the current Week 6 checkpoint:

| Priority | Open | Fixed / Under Verification |
|---|---:|---:|
| Critical | 0 | 1 |
| Major | 0 | 2 |
| Minor | 0 | 2 |

No currently identified issue prevents the player from completing the protected core flow.

---

## 4. Remaining Testing Risk

The detailed **decision-to-outcome consequence rules** are still being finalized.

Therefore, additional bugs may be identified when the final consequence matrix is integrated and tested.

Any issue affecting:

- consequence generation;
- Financial Resilience;
- Governance Stability;
- Final Case Outcome;

will be added to this log and prioritized based on its effect on financial correctness and the core playable flow.
