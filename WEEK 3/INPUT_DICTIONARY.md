# INPUT DICTIONARY

## Case #01 — Toy Kingdom Inc.

> **Educational financial simulation inspired by the historical Toys "R" Us case.**
>
> This file defines the minimum information and state variables required for Case #01 and identifies where each item comes from.

---

## Purpose

The Input Dictionary defines the information required for the player to investigate the case, make decisions, and generate the final product output.

An item is included only when its meaning, source, and effect on the product can be clearly identified.

### Main Product Output

**Counselor Case Report** — summarizes the player's investigation, diagnosis, treatment, reassessment, and final case outcome.

---

## ID Guide

| ID | Meaning | Documented in |
|---|---|---|
| **S01, S02, ...** | Historical sources from public evidence | `SOURCE_USE_MAP.md` |
| **A01, A02, ...** | Assumptions or adaptations created by the MEDIFIN team | `ASSUMPTIONS.md` |
| **G01, G02, ...** | Player choices or game-generated states | Game system / this Input Dictionary |

### Data Classification

| Classification | Meaning | Typical Source |
|---|---|---|
| **Historical** | Based directly on public historical evidence | S |
| **Historical / Adapted** | Historical evidence adjusted to fit the Toy Kingdom simulation | S + A |
| **Simulated** | Created by the MEDIFIN team for the fictional case | A |
| **Game State** | Generated from player choices or game progression | G |

> Toy Kingdom Inc., the Anderson family, Houndstooth Capital, and related governance events are fictional simulation elements. Historical financial information and simulated case information must not be interpreted as equivalent.

---

# 1. Financial & Operating Information

These fields provide the main financial evidence used during investigation, diagnosis, and treatment selection.

| Field | Meaning | Unit / Format | Classification | Source / Origin | Output Affected |
|---|---|---|---|---|---|
| `net_sales` | Consolidated annual revenue | USD million · number | Historical / Adapted | S01 + A04 | Sales Analysis → Diagnosis |
| `same_store_sales` | Change in sales from comparable existing stores | % · decimal | Historical / Adapted | S01 / S02 + A04 | Sales Analysis → Diagnosis |
| `ecommerce_growth` | Growth in online sales | % · decimal | Historical | S02 | Sales Analysis → Diagnosis |
| `gross_profit` | Net sales less cost of goods sold | USD million · number | Historical / Adapted | S01 + A04 | Financial Statements → Diagnosis |
| `gross_margin_pct` | Gross profit as a percentage of net sales | % · decimal | Historical / Adapted | S01 + A04 | Financial Statements → Diagnosis |
| `sga_to_sales` | SG&A expenses relative to net sales | % · decimal | Historical / Adapted | S01 + A04 | Cost Analysis → Diagnosis |
| `operating_earnings` | Earnings from operations before financing and tax effects | USD million · number | Historical / Adapted | S01 + A04 | Financial Statements / Capital Structure → Diagnosis |
| `adjusted_ebitda` | Adjusted earnings before interest, tax, depreciation and amortization | USD million · number | Historical / Adapted | S01 / S02 + A04 | Capital Structure → Diagnosis |
| `interest_expense` | Annual interest expense associated with financing obligations | USD million · number | Historical / Adapted | S01 + A04 | Capital Structure → Diagnosis |
| `net_loss` | Profit or loss attributable to the company after financing and other expenses | USD million · number | Historical / Adapted | S01 + A04 | Financial Statements → Diagnosis |
| `cash` | Cash and cash equivalents at the reporting date | USD million · number | Historical / Adapted | S01 + A04 | Liquidity Analysis → Diagnosis / Treatment |
| `receivables` | Receivables and related amounts reported by the company | USD million · number | Historical / Adapted | S01 + A04 | Liquidity Analysis → Diagnosis |
| `inventory` | Merchandise held for sale | USD million · number | Historical / Adapted | S01 + A04 | Liquidity Analysis → Diagnosis / Timing |
| `current_assets` | Assets expected to be converted into cash or used within the operating cycle | USD million · number | Historical / Adapted | S01 + A04 | Liquidity Analysis → Diagnosis |
| `property_equipment` | Long-term physical assets including stores and equipment | USD million · number | Historical / Adapted | S01 + A04 | Investment / Asset Analysis → Treatment |
| `total_debt` | Total interest-bearing indebtedness used in the case | USD million · number | Historical / Adapted | S01 + A04 | Capital Structure → Diagnosis / Treatment |
| `secured_debt` | Debt backed by company assets | USD million · number | Historical / Adapted | S01 + A04 | Capital Structure → Diagnosis / Treatment |
| `stockholders_deficit` | Negative shareholders' equity | USD million · number | Historical / Adapted | S01 + A04 | Financial Statements → Diagnosis |
| `leveraged_transaction` | Historical leveraged acquisition that changed the company's financing structure | USD million + year | Historical | S03 | Capital Structure History → Diagnosis |

### Key Terms

- **Same-Store Sales (SSS):** sales growth or decline from comparable existing stores, excluding the direct effect of opening or closing stores.
- **Secured Debt:** borrowing backed by specific assets that provide creditors with claims over those assets.
- **Leverage:** the use of debt financing relative to earnings, assets, or equity. High leverage may reduce financial flexibility but does not by itself prove financial failure.
- **Adjusted EBITDA:** an adjusted earnings measure used in the case to evaluate operating performance and leverage. It should not be interpreted as cash flow.

---

# 2. Business & Governance Information

These fields provide business context and simulated constraints that may affect diagnosis, treatment, timing, or implementation.

| Field | Meaning | Unit / Format | Classification | Source / Origin | Output Affected |
|---|---|---|---|---|---|
| `investment_needs` | Competing capital needs including store renovation, digital, fulfillment, supply chain and customer experience | structured list | Historical / Adapted | A05 + historical context where applicable | Investment Analysis → Treatment |
| `product_category_trends` | Differences in performance across major product categories | % + text | Historical | S02 | Product Analysis → Diagnosis |
| `management_track_record` | Results of selected management initiatives in previous case periods | structured list | Historical / Adapted | A05 + historical context where applicable | Management Analysis → Diagnosis |
| `holiday_liquidity_risk` | Potential liquidity pressure if holiday performance is weaker than expected | scenario state | Historical / Adapted | S01 + A06 | Liquidity Analysis → Timing / Consequence |
| `governance_conflict` | Conflict among David, Michael and Richard over company strategy and control | text | Simulated | A01 + A03 | Governance Analysis → Consequence |
| `houndstooth_trigger` | Conditional governance event if Adjusted EBITDA declines by another 5% | threshold + text | Simulated | A02 | Governance Analysis → Treatment / Consequence |
| `international_asset_sale_plan` | Richard's attempt to explore the sale of international assets | boolean + text | Simulated | A03 | Governance / Asset Analysis → Treatment / Consequence |

> Detailed definitions and limitations of `A01–A06` are documented in `ASSUMPTIONS.md`.

---

# 3. Investigation State

These variables record what information the player chooses to investigate.

They are gameplay states, not facts about the company.

| Field | Meaning | Format | Classification | Source / Origin | Output Affected |
|---|---|---|---|---|---|
| `selected_diagnostic_files` | Three Diagnostic Files selected by the player | array of HS codes | Game State | G01 — Player | Determines evidence available for Diagnosis |
| `locked_diagnostic_files` | Diagnostic Files not selected and therefore unavailable | array of HS codes | Game State | G01 — Derived | Limits available evidence |
| `hs_g_opened` | Whether the Governance & Family file has been reviewed | boolean | Game State | G01 — Derived | Determines whether governance evidence is verified |
| `selected_followup_questions` | Two Follow-Up Questions selected by the player | array of CH1 codes | Game State | G01 — Player | Adds targeted evidence before Diagnosis |
| `selected_final_question` | Final Diagnostic Question selected before diagnosis | CH2 code | Game State | G01 — Player | Adds final evidence before Diagnosis |

### Information Constraint

The player can access only part of the available evidence before making a diagnosis.

This is an educational design constraint intended to require evidence prioritization and professional judgment under incomplete information. The assumption and its limitation are documented in `ASSUMPTIONS.md — A09–A10`.

---

# 4. Decision & Derived State

These variables record player decisions and the resulting game states.

## 4.1 Player Decisions

| Field | Meaning | Format | Classification | Source / Origin | Output Affected |
|---|---|---|---|---|---|
| `selected_diagnosis` | Primary financial problem identified by the player | CD-A to CD-F | Game State | G02 — Player | Diagnosis → Treatment |
| `selected_treatment` | Financial or operational response selected by the player | PD-A to PD-F | Game State | G02 — Player | Treatment → Consequence |
| `selected_timing` | Timing selected for implementation | TG-A to TG-D | Game State | G02 — Player | Timing → Consequence |
| `stakeholder_priorities` | Three stakeholder areas prioritized before implementation | array of 3 categories | Game State | G02 — Player | Stakeholder Preparation → Consequence |
| `revised_diagnosis` | Diagnosis retained or changed after new developments | CD-A to CD-F | Game State | G02 — Player | Reassessment → Final Report |
| `revised_treatment` | Treatment retained or changed after new developments | PD-A to PD-F | Game State | G02 — Player | Reassessment → Final Outcome |

## 4.2 Derived Outcomes

| Field | Meaning | Format | Classification | Source / Origin | Output Affected |
|---|---|---|---|---|---|
| `credibility` | Quality of the player's judgment relative to the evidence available | Low / Medium / High | Game State | G03 — Derived | Treatment Access / Final Report |
| `financial_resilience` | Resulting financial condition of Toy Kingdom | Stable / Fragile / Collapse | Game State | G03 — Derived | Final Outcome |
| `governance_stability` | Resulting stability of company control and governance | Stabilized / Divided / Loss of Control | Game State | G03 — Derived | Final Outcome |
| `final_outcome` | Final case ending generated from the outcome dimensions | ending category | Game State | G03 — Derived | Counselor Case Report |

> **Financial Resilience** and **Governance Stability** are the two outcome dimensions used to determine the final ending.
>
> **Credibility** is a decision-quality indicator. It evaluates how well the player's judgment is supported by available evidence and may affect access to selected treatments, but it does not independently determine the final ending.
>
> These are educational simulation constructs as documented in `ASSUMPTIONS.md — A07–A08`.

---

# 5. Information Readiness Rules

1. **Historical information** must be traceable to an approved `S` source in `SOURCE_USE_MAP.md`.
2. **Historical / Adapted information** must identify both its historical basis and the relevant `A` adaptation where applicable.
3. **Simulated information** must be documented in `ASSUMPTIONS.md`.
4. **Player choices and game-generated states** must be identified as `G` Game State.
5. Information that does not affect evidence, a decision, a consequence, or the final product output is excluded from the MVP.
6. Detailed formulas, thresholds, scoring rules, and state-transition logic belong to the **Week 4 Logic Specification**, not this Week 3 Input Dictionary.
