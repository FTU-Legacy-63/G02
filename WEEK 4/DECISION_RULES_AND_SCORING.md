# DECISION RULES AND SCORING

## Case #01 — Toy Kingdom Inc.

> Educational financial simulation inspired by the historical Toys "R" Us case.

---

## 1. Purpose

This document defines how MEDIFIN evaluates player decisions.

The core principle is:

**Evidence → Reasoning → Classification → Score**

Scores represent the quality of the player's decision process. They are separated from the simulated company's final outcome.

---

## 2. Financial Reasoning

Financial calculations provide evidence for diagnosis. They do **not** directly award points.

| Indicator | Formula | Case #01 Result | Interpretation |
|---|---|---:|---|
| Revenue Growth | `(Revenueₜ − Revenueₜ₋₁) / Revenueₜ₋₁` | **−2.2%** | Sales pressure exists, but not a collapse |
| Gross Margin | `Gross Profit / Revenue` | **35.6%** | Gross margin remains relatively stable |
| EBIT Margin | `Operating Earnings / Revenue` | **4.0%** | Measures operating profitability |
| Interest Coverage | `EBIT / Interest Expense` | **1.01x** | Operating earnings barely cover interest expense |
| Debt / EBITDA | `Total Debt / Adjusted EBITDA` | **6.06x** | Indicates high leverage in the case context |
| Net Debt / EBITDA | `(Debt − Cash) / Adjusted EBITDA` | **5.35x** | Shows leverage after available cash |

These indicators should be interpreted together rather than individually.

For example:

**Mild Sales Decline + Improving Operating Earnings + Interest Coverage ≈ 1.0x + High Leverage**

→ suggests that financing pressure may be more important than sales decline alone.

---

## 3. Counselor Performance Score

MEDIFIN evaluates the player across **5 decision criteria**, each scored from **0–100**.

| Criterion | Screens | Weight |
|---|---:|---:|
| **Investigation** | 0–5 | 20% |
| **Diagnosis** | 6 | 30% |
| **Treatment** | 7 | 20% |
| **Execution Planning** | 8–9 | 15% |
| **Reassessment** | 11 | 15% |
| **Total** |  | **100%** |

Screen 10 generates consequences and therefore is **not scored as a player decision**.

### Final Counselor Score

```text
Counselor Score =
20% × Investigation
+ 30% × Diagnosis
+ 20% × Treatment
+ 15% × Execution Planning
+ 15% × Reassessment
```

---

## 4. Stage Scoring Rules

### 4.1 Investigation — Screens 0–5

Investigation measures whether the player collects relevant evidence before diagnosing the client.

```text
Investigation =
50% × Diagnostic Files
+ 30% × Follow-Up Questions
+ 20% × Final Diagnostic Question
```

#### Diagnostic Files

| Relevant files selected | Score |
|---|---:|
| 3 | 100 |
| 2 | 80 |
| 1 | 60 |
| 0 | 40 |

#### Follow-Up Questions

| Relevant questions | Score |
|---|---:|
| 2 | 100 |
| 1 | 70 |
| 0 | 40 |

A question that only repeats already-discovered information receives reduced value.

The Final Diagnostic Question is classified as **Critical / Useful / Contextual / Weak**, corresponding to **100 / 80 / 60 / 40**.

---

### 4.2 Diagnosis — Screen 6

The player identifies relevant financial problems and selects one **Primary Diagnosis**.

```text
Diagnosis =
40% × Problem Identification
+ 35% × Primary Diagnosis
+ 25% × Evidence Support
```

**Problem Identification** measures how many relevant problems are recognized.

**Primary Diagnosis** measures whether the player correctly prioritizes the main financial constraint.

**Evidence Support** measures whether the diagnosis is supported by evidence the player actually discovered.

This prevents a player from receiving full credit by guessing the expected diagnosis without investigation.

---

### 4.3 Treatment — Screen 7

Treatment is evaluated against the player's diagnosis rather than through one universally "correct" answer.

```text
Treatment =
50% × Root-Cause Fit
+ 30% × Feasibility
+ 20% × Risk Awareness
```

- **Root-Cause Fit:** Does the treatment address the diagnosed problem?
- **Feasibility:** Is it realistic under the company's financial condition?
- **Risk Awareness:** Does the plan recognize important implementation risks?

A treatment can therefore be financially relevant but still lose points because it is difficult to execute or creates significant new risks.

---

### 4.4 Execution Planning — Screens 8–9

Execution combines **Timing** and **Stakeholder Preparation**.

```text
Execution Planning =
40% × Timing
+ 60% × Stakeholder Preparation
```

Timing is evaluated in the context of the selected treatment.

Stakeholder priorities are also treatment-dependent. For example, creditors become especially important in debt restructuring, while suppliers become critical when restructuring may threaten inventory availability.

Therefore, no timing or stakeholder choice is universally optimal.

---

### 4.5 Reassessment — Screen 11

Reassessment measures whether the player responds appropriately to new developments.

```text
Reassessment =
50% × Evidence Response
+ 30% × Decision Consistency
+ 20% × Risk Recognition
```

The player is **not automatically rewarded for changing** a decision or penalized for keeping it.

The score depends on whether the updated judgment is supported by new evidence.

---

## 5. Example Score

Suppose a player receives:

| Criterion | Score |
|---|---:|
| Investigation | 86 |
| Diagnosis | 87 |
| Treatment | 88 |
| Execution Planning | 92 |
| Reassessment | 94 |

Then:

```text
Counselor Score
= 0.20(86)
+ 0.30(87)
+ 0.20(88)
+ 0.15(92)
+ 0.15(94)

= 88.8 ≈ 89/100
```

The final feedback shows both the overall score and the five component scores so the player can identify where the decision process was strong or weak.

---

## 6. Counselor Score vs. Case Outcome

MEDIFIN separates **player performance** from **company outcome**.

```text
PLAYER DECISIONS
      │
      ├──→ Counselor Performance → Counselor Score /100
      │
      └──→ Treatment + Timing + Stakeholders + Case Conditions
                                      ↓
                             Simulated Consequences
                                      ↓
                  Financial Resilience + Governance Stability
                                      ↓
                                  Final Ending
```

Therefore:

> **A high Counselor Score does not guarantee a successful company outcome.**

A well-reasoned professional decision may still face a difficult outcome because of the company's starting condition and execution constraints.

---

## 7. Scoring & Claim Boundary

All scoring thresholds and treatment classifications are **educational design rules**, not empirical predictions of real restructuring success.

MEDIFIN follows four rules:

1. **Reason before score** — explain why a decision is strong or weak before assigning points.
2. **Evidence before conclusion** — unsupported guesses cannot receive full credit.
3. **Criteria before recommendation** — treatments are evaluated against explicit criteria.
4. **Decision quality before outcome** — counselor performance and simulated company outcome remain separate.

Detailed expected results and sample logic tests are documented in `EXPECTED_RESULT_AND_LOGIC_TEST.md`.
