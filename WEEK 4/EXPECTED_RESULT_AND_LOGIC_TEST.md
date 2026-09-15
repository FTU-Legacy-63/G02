# EXPECTED RESULT AND LOGIC TEST

## Case #01 — Toy Kingdom Inc.

> This document provides one expected player path to verify that MEDIFIN's decision and scoring logic behaves as intended before implementation.

---

## 1. Test Purpose

The logic test follows:

**Input → Player Decision → Rule → Expected Result**

The purpose is not to identify one perfect way to play the case, but to confirm that the game produces predictable and explainable outputs from predefined rules.

---

## 2. Initial Case State

Key financial indicators used in this test:

| Indicator | Case Value |
|---|---:|
| Revenue Growth | −2.2% |
| Gross Margin | 35.6% |
| EBIT Margin | 4.0% |
| Interest Coverage | 1.01x |
| Debt / EBITDA | 6.06x |
| Net Debt / EBITDA | 5.35x |

The combination suggests that operating pressure exists, while high leverage and a thin interest-coverage buffer create an important financing constraint.

---

## 3. Sample Player Path

### Phase 1 — Investigation

Assume the player:

- selects **2 strong/relevant Diagnostic Files**;
- selects **2 relevant Follow-Up Questions**;
- selects a **Useful Final Diagnostic Question**.

Expected scores:

```text
Diagnostic Files       = 80
Follow-Up Questions    = 100
Final Question         = 80
```

Therefore:

```text
Investigation
= 50%(80) + 30%(100) + 20%(80)
= 86/100
```

**Expected interpretation:** The player discovers enough evidence to build a strong diagnosis, although the investigation is not fully optimized.

---

### Phase 2 — Diagnosis

Assume the player:

- identifies **2 relevant financial problems**;
- selects **Capital Structure / Financing** as the Primary Diagnosis;
- has sufficient discovered evidence supporting that diagnosis.

Expected component scores:

```text
Problem Identification = 80
Primary Diagnosis      = 100
Evidence Support       = 80
```

Therefore:

```text
Diagnosis
= 40%(80) + 35%(100) + 25%(80)
= 87/100
```

**Expected interpretation:** The player identifies the main financing constraint and supports it with relevant evidence rather than relying only on the visible sales decline.

---

### Phase 3 — Treatment

Assume the player selects a restructuring-oriented treatment that strongly addresses the financing constraint but still involves execution risks.

Expected assessment:

```text
Root-Cause Fit = 100
Feasibility    = 80
Risk Awareness = 70
```

Therefore:

```text
Treatment
= 50%(100) + 30%(80) + 20%(70)
= 88/100
```

**Expected interpretation:** The treatment fits the diagnosis, but implementation remains difficult.

---

### Phase 4 — Execution Planning

Assume the player:

- selects a reasonable but not optimal execution timing;
- prioritizes the stakeholders most important to the selected treatment.

Expected assessment:

```text
Timing                  = 80
Stakeholder Preparation = 100
```

Therefore:

```text
Execution Planning
= 40%(80) + 60%(100)
= 92/100
```

**Expected interpretation:** Strong stakeholder preparation reduces execution risk despite imperfect timing.

---

### Phase 5 — Consequence

Screen 10 is **not scored**.

The game applies:

```text
Treatment
+ Timing
+ Stakeholder Preparation
+ Current Case Conditions
→ Simulated Consequences
```

For this sample path, the expected direction is:

- financing pressure begins to improve;
- near-term liquidity remains constrained;
- creditor cooperation supports execution;
- operating weaknesses are not immediately eliminated;
- governance tension may remain unresolved.

These are simulation consequences, not predictions of real restructuring success.

---

### Phase 6 — Reassessment

Assume the player correctly recognizes that the financing response is helping but that important operating and execution risks remain.

Expected assessment:

```text
Evidence Response     = 100
Decision Consistency  = 80
Risk Recognition      = 100
```

Therefore:

```text
Reassessment
= 50%(100) + 30%(80) + 20%(100)
= 94/100
```

---

## 4. Expected Final Counselor Score

| Criterion | Score | Weight |
|---|---:|---:|
| Investigation | 86 | 20% |
| Diagnosis | 87 | 30% |
| Treatment | 88 | 20% |
| Execution Planning | 92 | 15% |
| Reassessment | 94 | 15% |

```text
Counselor Score
= 0.20(86)
+ 0.30(87)
+ 0.20(88)
+ 0.15(92)
+ 0.15(94)

= 88.8 ≈ 89/100
```

### Expected Output

**Counselor Score: 89/100**

The final feedback should explain that the player:

- identified the main financing constraint;
- supported the diagnosis with relevant evidence;
- selected a treatment consistent with that diagnosis;
- prepared important stakeholders effectively;
- responded appropriately to new developments.

The feedback should also indicate that the initial investigation could have been more efficient without revealing the exact answer path.

---

## 5. Expected Case Outcome

The Counselor Score and Case Outcome are evaluated separately.

For this sample path:

```text
Strong financing response
+ reasonable timing
+ strong stakeholder preparation
→ improved financial position
but remaining operating/governance pressure
```

The game should therefore generate the corresponding:

**Financial Resilience + Governance Stability → Final Ending**

The exact classification rules are defined in `DECISION_RULES_AND_SCORING.md`.

> A Counselor Score of 89/100 does not automatically mean that Toy Kingdom reaches the best ending.

---

## 6. Logic Validation

The implementation passes this sample logic test when:

1. the same inputs and decisions generate the expected stage scores;
2. the final Counselor Score is approximately **89/100**;
3. Screen 10 consequences follow the predefined decision rules;
4. Counselor Performance remains separate from Case Outcome;
5. final feedback explains the result without revealing the hidden answer key.

If the implemented game produces a materially different result, the team should check the rule implementation before changing the expected result.
