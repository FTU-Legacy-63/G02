# SOURCE USE MAP

## Case #01 — Toy Kingdom Inc.

> **Educational financial simulation inspired by the historical Toys "R" Us case.**
>
> This file identifies where case information comes from, what each source supports, how it is used in MEDIFIN, and its limitations.

---

## ID Guide

| ID | Meaning | Documented in |
|---|---|---|
| **S01, S02, ...** | Historical sources from public evidence | `SOURCE_USE_MAP.md` |
| **A01, A02, ...** | Assumptions or adaptations created by the MEDIFIN team | `ASSUMPTIONS.md` |
| **G01, G02, ...** | Player choices or game-generated states | Game system / `INPUT_DICTIONARY.md` |

### Information Classification

| Classification | Meaning | Typical Source |
|---|---|---|
| **Historical** | Based directly on public historical evidence | S |
| **Historical / Adapted** | Historical evidence adjusted to fit the Toy Kingdom simulation | S + A |
| **Simulated** | Created by the MEDIFIN team for the fictional case | A |
| **Game State** | Generated from player choices or game progression | G |

> Historical evidence supports the factual foundation of the case. It does not automatically validate fictional Toy Kingdom events, diagnoses, treatments, or simulated outcomes.

---

# 1. Historical Sources

## S01 — Toys "R" Us FY2016 Form 10-K

**Source:**  
Toys "R" Us, Inc., Annual Report on Form 10-K for the fiscal year ended January 28, 2017, filed with the U.S. Securities and Exchange Commission (SEC).

**Primary Source:**  
[Toys "R" Us FY2016 Form 10-K — SEC EDGAR](https://www.sec.gov/Archives/edgar/data/1005414/000100541417000011/triu201610k.htm)

**Information supplied:**
- Net Sales
- Gross Profit and Gross Margin
- SG&A
- Operating Earnings
- Interest Expense and Net Loss
- Cash, Receivables, Inventory and other balance-sheet information
- Debt and financing information
- Store footprint and retail seasonality

**Used in MEDIFIN:**
- `HS-A` — Sales & Customer
- `HS-C` — Liquidity
- `HS-D` — Capital Structure & Leverage
- `Screen 4` — Full Financial Statements
- Financial evidence used in Diagnosis and Treatment

**Limitation:**
- The data belongs to the historical Toys "R" Us case, not Toy Kingdom Inc.
- Historical reporting years are adapted to the Toy Kingdom timeline through `A04`.
- Financial statements describe financial conditions but do not prove one unique root cause of distress.
- Adjusted EBITDA should not be interpreted as cash flow.

**Status:** Primary historical source — Ready

---

## S02 — Toys "R" Us FY2016 Earnings Release

**Source:**  
Toys "R" Us, Inc., *Reports Results for the Full Year and Fourth Quarter of Fiscal 2016*, April 12, 2017, filed with the SEC.

**Primary Source:**  
[Toys "R" Us FY2016 Earnings Release — SEC EDGAR](https://www.sec.gov/Archives/edgar/data/1005414/000100541417000010/truq4-16earningsreleaseexh.htm)

**Information supplied:**
- Consolidated Net Sales decline
- Same-Store Sales performance
- E-commerce growth
- Adjusted EBITDA
- Operating Earnings
- Product-category performance
- Management commentary on operating performance

**Used in MEDIFIN:**
- `HS-A` — Sales & Customer
- `HS-E` — Product & Category Trends
- Evidence of declining store performance alongside continued e-commerce growth
- Evidence of differences in performance across product categories

**Limitation:**
- It is a company-issued disclosure and includes management commentary.
- It reports operating performance but does not establish e-commerce, competition, product mix, or leverage as the single cause of financial distress.

**Status:** Primary company disclosure — Ready

---

## S03 — 2005 Toys "R" Us Acquisition Filings

**Source:**  
SEC filings relating to the 2005 acquisition of Toys "R" Us by affiliates of Bain Capital, KKR and Vornado Realty Trust.

**Primary Sources:**
- [2005 Acquisition Announcement — SEC EDGAR](https://www.sec.gov/Archives/edgar/data/1005414/000119312505057773/dex991.htm)
- [2005 Transaction Completion — SEC EDGAR](https://www.sec.gov/Archives/edgar/data/1040765/000110465905033479/a05-13329_18k.htm)

**Information supplied:**
- Approximately $6.6 billion transaction value
- Investor group involved in the acquisition
- Transaction timing
- Use of debt financing as part of the acquisition

**Used in MEDIFIN:**
- `HS-D` — Capital Structure & Leverage History
- `Historical Financing Event — 2005`
- Historical context for the company's financing structure

**Limitation:**
- The filings establish the acquisition and its financing context.
- They do not prove that the leveraged acquisition alone caused the company's later financial distress or bankruptcy.
- MEDIFIN therefore treats the transaction as evidence for analysis, not as a predetermined diagnosis.

**Status:** Primary historical source — Ready

---

# 2. Simulation Assumptions & Adaptations

The following information is created or adapted by the MEDIFIN team. Detailed explanations, purposes, limitations and disclosure rules are documented in `ASSUMPTIONS.md`.

| ID | Assumption / Adaptation | Classification | Used in MEDIFIN |
|---|---|---|---|
| **A01** | Toy Kingdom & Anderson Family | Simulated | Case setting, ownership and governance structure |
| **A02** | Houndstooth Capital Trigger | Simulated | `HS-G`, governance evidence and later developments |
| **A03** | Family Conflict & Asset-Sale Scenario | Simulated | Governance questions, stakeholder decisions and consequences |
| **A04** | Financial Timeline Adaptation | Historical / Adapted | FY2024–FY2026 financial statements and case timeline |
| **A05** | Investment & Management Scenario | Historical / Adapted | `HS-B`, `HS-F`, treatment trade-offs and developments |
| **A06** | Holiday Liquidity Scenario | Historical / Adapted | Liquidity questions, Timing and Holiday Inventory decisions |

> See `ASSUMPTIONS.md` for the full definition and limitation of each `A` item.

### Important Boundary

- `A01–A03` are fictional Toy Kingdom scenario elements.
- `A04–A06` use historical context or evidence but are adapted for the simulation.
- They must not be presented as direct historical facts about Toys "R" Us.

---

# 3. Game-State Sources

## G01 — Investigation Choices

**Source:** Player

**Information supplied:**
- Selected Diagnostic Files
- Selected Follow-Up Questions
- Selected Final Diagnostic Question

**Used in MEDIFIN:**  
Determines which evidence becomes available before the player makes a diagnosis.

**Limitation:**  
These variables represent player behavior, not company information.

**Status:** Game State

---

## G02 — Player Decisions

**Source:** Player

**Information supplied:**
- Diagnosis
- Treatment
- Timing
- Stakeholder Priorities
- Reassessment decisions

**Used in MEDIFIN:**  
Used by the game system to generate later developments and the final Counselor Case Report.

**Limitation:**  
A player decision is not automatically financially appropriate merely because the option is available.

**Status:** Game State

---

## G03 — Derived Outcome States

**Source:** MEDIFIN Game Engine

**Information supplied:**
- Credibility
- Financial Resilience
- Governance Stability
- Final Outcome

**Used in MEDIFIN:**
- Treatment access where applicable
- Consequence generation
- Final outcome
- Counselor Case Report

**Limitation:**
- These are educational simulation outputs, not empirical predictions of real corporate outcomes.
- Their meaning is documented in `ASSUMPTIONS.md — A07–A08`.
- Detailed calculation rules and thresholds belong to the Week 4 Logic Specification.

**Status:** Derived Game State

---

# 4. Source–Use Rules

1. **Historical information** must be traceable to an approved `S` source.
2. **Historical / Adapted information** must identify both its historical basis and the relevant `A` adaptation.
3. **Simulated information** must be documented as an `A` assumption in `ASSUMPTIONS.md`.
4. **Player and system-generated information** is identified as `G` Game State.
5. A source must not be used to support a stronger claim than the evidence provides.
6. Primary historical sources are preferred whenever available.

---

# 5. Evidence Readiness

Historical information is considered **Ready** only when it can be traced to an approved source above.

Any historical information that cannot yet be verified must be either:

- verified using an appropriate source before final implementation; or
- clearly reclassified as **Simulated / Historical-Adapted** and documented in `ASSUMPTIONS.md`.
