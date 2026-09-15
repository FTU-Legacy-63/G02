# SAMPLE INPUT OUTPUT

## Case #01 — Toy Kingdom Inc.

> Educational financial simulation inspired by the historical Toys "R" Us case.

## 1. Purpose

This sample demonstrates that the information prepared for Case #01 can support one complete path:

**Case Information → Investigation → Diagnosis → Treatment → Expected Consequence → Feedback**

Most case information remains fixed. A small number of variables may change within a controlled range to improve replayability without changing the core financial problem.

Detailed scoring formulas and decision rules will be defined in Week 4.

---

## 2. Sample Case Input

### Fixed Case Information

| Input | Sample Value | Source / Origin |
|---|---:|---|
| Net Sales | USD 11,540m | S01 + A04 |
| Adjusted EBITDA | USD 792m | S01 / S02 + A04 |
| Operating Earnings | USD 460m | S01 + A04 |
| Interest Expense | USD 457m | S01 + A04 |
| Cash | USD 566m | S01 + A04 |
| Inventory | USD 2,476m | S01 + A04 |
| Total Debt | Approx. USD 4,800m | S01 + A04 |
| Secured Debt | Approx. USD 3,400m | S01 + A04 |
| Historical Financing Event | 2005 leveraged acquisition | S03 |

### Controlled Variation

For replayability, selected variables may vary slightly between playthroughs.

| Variable | Reference | Allowed Range | Sample Run |
|---|---:|---:|---:|
| Same-Store Sales | -1.4% | -1.1% to -1.7% | **-1.6%** |
| Holiday Sales Stress | -10% | -8% to -12% | **-9%** |

**Rule:** variation may change the strength of a signal but must not reverse the intended interpretation of the case.

---

## 3. Sample Player Input

### Investigation

The player selects:

- **Diagnostic Files:** HS-A — Sales & Customer; HS-C — Liquidity; HS-D — Capital Structure & Leverage
- **Follow-Up Questions:** CH1-C — Holiday Sales Stress; CH1-D — Nearest Debt Maturity
- **Final Question:** CH2-F — Biggest Risk in the Next 12 Months

### Diagnosis

The player identifies three relevant problems:

- **CD-B — Operating / Store Network Problem**
- **CD-C — Liquidity Stress**
- **CD-D — Capital Structure / Financing Problem**

**Primary Diagnosis:** CD-D — Capital Structure / Financing Problem

### Treatment & Execution

- **Treatment:** PD-C — Debt Restructuring
- **Timing:** TG-A — Act Immediately
- **Stakeholder Priorities:** Creditors, Suppliers, Holiday Inventory

---

## 4. Expected Output

Based on the information investigated and decisions made, the expected consequence is:

> Early creditor engagement addresses refinancing pressure and may improve near-term financial flexibility. However, creditor cooperation remains uncertain, and debt restructuring alone does not resolve weaker store performance or competitive pressure.

The system should recognize both the **strength** of addressing an important financing constraint and the **limitation** of leaving other business problems unresolved.

This is an educational simulation outcome, not a prediction of real-world restructuring success.

---

## 5. Sample Performance Feedback

The final assessment evaluates the player's decision process across the case.

| Area | Illustrative Score |
|---|---:|
| Investigation | 90 / 100 |
| Diagnosis | 100 / 100 |
| Treatment | 85 / 100 |
| Timing | 90 / 100 |
| Stakeholder Preparation | 80 / 100 |
| Reassessment | 90 / 100 |

These scores are **illustrative expected outputs only**. Exact scoring rules, weights and thresholds will be defined in Week 4.

### Example Feedback

**Diagnosis — 100/100**

> Strong diagnostic judgment. You identified the major financial pressures and distinguished the primary constraint from related problems.

**Treatment — 85/100**

> Your recommendation addressed an important financial constraint, but some longer-term operating implications may require further consideration.

Feedback should guide replay **without revealing the exact correct choices**.

---

## 6. Replay Example

A new playthrough may generate slightly different values:

| Variable | Run 1 | Run 2 |
|---|---:|---:|
| Same-Store Sales | -1.6% | -1.2% |
| Holiday Sales Stress | -9% | -11% |

The player may also investigate different files and therefore discover different evidence.

Replayability comes from:

1. **small controlled variation in selected case variables; and**
2. **different information discovered through player choices.**

The underlying financial condition and learning objective remain consistent.

---

## 7. Week 3 Boundary

This sample confirms that the prepared information can support:

**Input → Player Decision → Expected Consequence → Feedback**

The following are deferred to **Week 4**:

- exact scoring formulas and weights;
- Credibility calculation;
- Financial Resilience and Governance Stability rules;
- treatment access conditions;
- consequence rules and final ending logic.
