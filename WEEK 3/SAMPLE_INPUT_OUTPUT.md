# SAMPLE INPUT OUTPUT

## Case #01 — Toy Kingdom Inc.

> **Educational financial simulation inspired by the historical Toys "R" Us case.**

---

## Purpose

This sample demonstrates how Case #01 can move from:

**Case Information → Player Investigation → Player Decision → Expected Consequence → Performance Feedback**

The purpose is to confirm that the information prepared in Week 3 is sufficient to support one complete sample playthrough.

This file does **not** define the final scoring formula or decision rules. Detailed formulas, weights, thresholds, and scoring logic will be specified and justified in Week 4.

---

# 1. Base Case Input

Most financial information remains fixed across playthroughs so that the core financial problem and learning objective remain consistent.

| Input | Sample Value | Source / Origin | Used For |
|---|---:|---|---|
| Net Sales | USD 11,540m | S01 + A04 | Sales analysis |
| Adjusted EBITDA | USD 792m | S01 / S02 + A04 | Operating performance / leverage |
| Operating Earnings | USD 460m | S01 + A04 | Financial performance |
| Interest Expense | USD 457m | S01 + A04 | Financing pressure |
| Cash | USD 566m | S01 + A04 | Liquidity analysis |
| Inventory | USD 2,476m | S01 + A04 | Liquidity / holiday exposure |
| Total Debt | Approx. USD 4,800m | S01 + A04 | Capital structure |
| Secured Debt | Approx. USD 3,400m | S01 + A04 | Capital structure |
| Historical Financing Event | 2005 leveraged acquisition | S03 | Financing history |

These inputs establish the core financial condition of Toy Kingdom and should not materially change between playthroughs.

---

# 2. Controlled Scenario Variation

To improve replayability, a small number of case variables may vary within a limited range when a new playthrough begins.

The variation must be small enough that it **changes the strength of a signal without reversing the intended interpretation of the case**.

### Example Playthrough

| Variable | Reference Value | Allowed Variation | Sample Value |
|---|---:|---:|---:|
| Same-Store Sales | -1.4% | -1.1% to -1.7% | **-1.6%** |
| Holiday Sales Stress Scenario | -10% | -8% to -12% | **-9%** |

For this sample playthrough:

- store performance is slightly weaker than the reference case;
- the simulated holiday downside scenario is slightly less severe.

The remaining core financial information stays unchanged.

> Controlled variation is used only for replayability. It must not randomly determine whether the player succeeds or fails.

---

# 3. Sample Investigation Input

The player can review only part of the available information before making a diagnosis.

### Diagnostic Files Selected

The player selects 3 of 7 Diagnostic Files:

| Selection | Diagnostic File | Main Information Obtained |
|---|---|---|
| ✓ | **HS-A — Sales & Customer** | Sales decline, same-store sales and e-commerce performance |
| ✓ | **HS-C — Liquidity** | Cash, inventory and liquidity exposure |
| ✓ | **HS-D — Capital Structure & Leverage** | Debt, leverage, interest burden and financing history |

Game state:

```text
selected_diagnostic_files = [HS-A, HS-C, HS-D]
