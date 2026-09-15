# INPUT DICTIONARY

## Case #01 — Toy Kingdom Inc.

> **Educational financial simulation inspired by the historical Toys "R" Us case.**
>
> Historical information and fictional elements created for the simulation are explicitly distinguished below.

---

## Purpose

This file defines the **minimum information and state variables required for Case #01**.

An item is included only when its meaning, source, and effect on the product can be clearly identified.

### Main Product Output

**Counselor Case Report** — summarizes the player's investigation, diagnosis, treatment, reassessment, and final case outcome.

---

## Data Classification

| Type | Meaning |
|---|---|
| **Historical** | Based on publicly available information from the real Toys "R" Us case |
| **Simulated** | Created or adapted by the team for Toy Kingdom Inc.; disclosed in `ASSUMPTIONS.md` |
| **Game State** | Generated from the player's choices during gameplay |

> **Fictional elements:** Toy Kingdom Inc., the Anderson family, Houndstooth Capital, the FY2026 timeline, and related governance events are created for educational simulation. They are not historical facts about Toys "R" Us.

---

# 1. Financial & Operating Information

These fields provide the main financial evidence used by the player during investigation and diagnosis.

| Field | Meaning | Unit / Format | Type / Source | Used in / Output affected |
|---|---|---|---|---|
| `net_sales` | Consolidated annual revenue | USD million · number | Historical, adapted to simulation timeline | Sales analysis → Diagnosis |
| `same_store_sales` | Change in sales from comparable stores | % · decimal | Historical | Sales analysis → Diagnosis |
| `ecommerce_growth` | Growth in online sales | % · decimal | Historical / adapted | Sales analysis → Diagnosis |
| `gross_profit` | Sales less cost of goods sold | USD million · number | Historical | Financial Statements → Diagnosis |
| `gross_margin_pct` | Gross profit as a percentage of sales | % · decimal | Historical | Financial Statements → Diagnosis |
| `sga_to_sales` | SG&A expenses relative to sales | % · decimal | Historical | Cost analysis → Diagnosis |
| `operating_earnings` | Earnings from operations before interest and tax effects | USD million · number | Historical | Financial Statements / Capital Structure → Diagnosis |
| `adjusted_ebitda` | Adjusted earnings before interest, tax, depreciation and amortization | USD million · number | Historical | Capital Structure → Diagnosis |
| `interest_expense` | Annual financing cost on outstanding debt | USD million · number | Historical | Capital Structure → Diagnosis |
| `net_loss` | Profit or loss attributable to the company after financing and other expenses | USD million · number | Historical | Financial Statements → Diagnosis |
| `cash` | Cash and cash equivalents at reporting date | USD million · number | Historical | Liquidity analysis → Diagnosis / Treatment |
| `receivables` | Amounts owed to the company by customers and other parties | USD million · number | Historical | Liquidity analysis → Diagnosis |
| `inventory` | Merchandise held for sale | USD million · number | Historical | Liquidity analysis → Diagnosis / Timing |
| `current_assets` | Assets expected to be converted into cash or used within the operating cycle | USD million · number | Historical | Liquidity analysis → Diagnosis |
| `property_equipment` | Long-term physical assets including stores and equipment | USD million · number | Historical | Investment / Asset analysis → Treatment |
| `total_debt` | Total interest-bearing indebtedness | USD million · number | Historical | Capital Structure → Diagnosis / Treatment |
| `secured_debt` | Debt backed by specific company assets | USD million · number | Historical | Capital Structure → Diagnosis / Treatment |
| `stockholders_deficit` | Negative shareholders' equity | USD million · number | Historical | Financial Statements → Diagnosis |
| `historical_operating_cash_flow` | Operating cash flow before the major leveraged transaction | USD million · array | Historical | Capital Structure history → Diagnosis |
| `leveraged_transaction` | Historical leveraged acquisition that materially changed the financing structure | USD million + year | Historical, timeline adapted | Capital Structure history → Diagnosis |

### Key Terms

- **Same-Store Sales (SSS):** sales growth or decline from comparable existing stores, excluding the effect of opening or closing stores.
- **Secured Debt:** borrowing backed by specific assets that provide creditors with stronger claims over those assets.
- **Leverage:** the use of debt financing relative to the company's earnings, assets, or equity. High leverage may reduce financial flexibility, but does not by itself prove financial failure.

---

# 2. Business & Governance Information

These fields provide additional context that may affect diagnosis, treatment, or implementation.

| Field | Meaning | Unit / Format | Type / Source | Used in / Output affected |
|---|---|---|---|---|
| `investment_needs` | Competing capital needs such as store renovation, digital, fulfillment, supply chain and holiday inventory | list | Simulated / adapted | Investment analysis → Treatment |
| `product_category_trends` | Differences in performance across major product categories | % + text | Historical / adapted | Product analysis → Diagnosis |
| `management_track_record` | Results of major initiatives implemented in previous periods | structured list | Simulated / adapted | Management analysis → Diagnosis |
| `holiday_liquidity_risk` | Potential liquidity pressure if holiday performance is weaker than expected | scenario state | Simulated | Liquidity analysis → Timing / Consequence |
| `governance_conflict` | Conflict among David, Michael and Richard over company strategy and control | text | Simulated | Governance analysis → Consequence |
| `houndstooth_trigger` | Conditional governance event if Adjusted EBITDA declines another 5% | threshold + text | Simulated | Governance analysis → Treatment / Consequence |
| `international_asset_sale_plan` | Richard's attempt to explore the sale of international assets | boolean + text | Simulated | Governance / Asset analysis → Treatment / Consequence |

---

# 3. Investigation State

These variables record **what information the player has chosen to investigate**.  
They are gameplay states, not facts about the company.

| Field | Meaning | Format | Source | Output affected |
|---|---|---|---|---|
| `selected_diagnostic_files` | Three diagnostic files selected by the player | array of HS codes | Game State | Determines evidence available for Diagnosis |
| `locked_diagnostic_files` | Diagnostic files not selected and therefore unavailable in the current playthrough | array of HS codes | Derived Game State | Limits available evidence |
| `hs_g_opened` | Whether the Governance & Family file has been reviewed | boolean | Derived Game State | Determines whether governance evidence is verified |
| `selected_followup_questions` | Two supplemental questions selected by the player | array of CH1 codes | Game State | Adds targeted evidence before Diagnosis |
| `selected_final_question` | Final question selected before making a diagnosis | CH2 code | Game State | Adds final evidence before Diagnosis |

> **Why is information limited?**  
> The player must decide which information is important enough to investigate before making a professional judgment. This simulates decision-making under incomplete information.

---

# 4. Decision & Derived State

These variables record player decisions or outcomes generated from those decisions.

| Field | Meaning | Format | Source | Output affected |
|---|---|---|---|---|
| `selected_diagnosis` | Primary financial problem identified by the player | CD-A to CD-F | Game State | Diagnosis → Treatment |
| `selected_treatment` | Financial or operational response selected by the player | PD-A to PD-F | Game State | Treatment → Consequence |
| `selected_timing` | Timing chosen for implementation | TG-A to TG-D | Game State | Timing → Consequence |
| `stakeholder_priorities` | Three stakeholder groups prioritized before implementation | array of 3 categories | Game State | Stakeholder Preparation → Consequence |
| `credibility` | Quality of the player's judgment based on available evidence | Low / Medium / High | Derived Game State | Treatment access / Final Report |
| `financial_resilience` | Company's resulting financial condition | Stable / Fragile / Collapse | Derived Game State | Final Outcome |
| `governance_stability` | Resulting stability of company control and family governance | Stable / Divided / Loss of Control | Derived Game State | Final Outcome |
| `revised_diagnosis` | Diagnosis retained or changed after new developments | CD-A to CD-F | Game State | Reassessment → Final Report |
| `revised_treatment` | Treatment retained or changed after new developments | PD-A to PD-F | Game State | Reassessment → Final Outcome |

> Detailed formulas, thresholds, scoring rules, and state-transition logic are defined in the **Week 4 logic evidence**, not in this Week 3 Input Dictionary.

---

# Information Readiness Rules

1. **Historical information** must be traceable in `SOURCE_USE_MAP.md`.
2. **Simulated information** must be disclosed in `ASSUMPTIONS.md`.
3. If an item does not affect evidence, a decision, a consequence, or the final output, it is excluded from the MVP.
