# SOURCE USE MAP

## Case #01 — Toy Kingdom Inc.

> **Educational financial simulation inspired by the historical Toys "R" Us case.**
>
> This file identifies **where case information comes from, what information each source supports, how it is used in MEDIFIN, and its limitations**.

---

## ID Guide

To make each information item easy to trace across the Week 3 documents:

| ID | Meaning | Used for |
|---|---|---|
| **S01, S02, ...** | **Source** | Historical evidence from public sources |
| **A01, A02, ...** | **Assumption / Adaptation** | Information created or adapted by the MEDIFIN team for the simulation |
| **G01, G02, ...** | **Game State** | Information generated from player choices or the game system |

### Source Classification

| Classification | Meaning |
|---|---|
| **Historical** | Based directly on public information from the real Toys "R" Us case |
| **Historical / Adapted** | Based on historical evidence but adjusted to fit the fictional Toy Kingdom simulation |
| **Simulated** | Created by the MEDIFIN team for educational purposes |
| **Game State** | Generated during gameplay from player choices or game progression |

> Historical evidence supports the factual foundation of the case. It does not automatically validate fictional Toy Kingdom events, diagnoses, treatments, or simulated outcomes.

---

# 1. Historical Sources

## S01 — Toys "R" Us FY2016 Form 10-K

**Source:** Toys "R" Us, Inc., Annual Report on Form 10-K for the fiscal year ended January 28, 2017, filed with the U.S. Securities and Exchange Commission (SEC).

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
- financial evidence for Diagnosis and Treatment

**Limitation:**
- The data belongs to the historical Toys "R" Us case, not Toy Kingdom Inc.
- Historical reporting years are adapted to the Toy Kingdom timeline.
- Financial statements show financial conditions but do not prove one unique root cause of distress.
- Adjusted EBITDA should not be interpreted as cash flow.

**Status:** Primary historical source — Ready

---

## S02 — Toys "R" Us FY2016 Earnings Release

**Source:** Toys "R" Us, Inc., *Reports Results for the Full Year and Fourth Quarter of Fiscal 2016*, April 12, 2017, filed with the SEC.

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
- evidence of declining store performance alongside continued e-commerce growth
- evidence that performance differed across product categories

**Limitation:**
- It is a company-issued disclosure and includes management commentary.
- It reports performance but does not establish e-commerce, competition, product mix, or leverage as the single cause of financial distress.

**Status:** Primary company disclosure — Ready

---

## S03 — 2005 Toys "R" Us Acquisition Filings

**Source:** SEC filings relating to the 2005 acquisition of Toys "R" Us by affiliates of Bain Capital, KKR and Vornado Realty Trust.

**Information supplied:**
- approximately $6.6 billion transaction value
- investor group involved in the acquisition
- transaction timing
- use of debt financing as part of the acquisition

**Used in MEDIFIN:**
- `HS-D` — Capital Structure & Leverage History
- `Historical Financing Event — 2005`
- historical context for the company's financing structure

**Limitation:**
- The filings establish the transaction and its financing context.
- They do not prove that the leveraged acquisition alone caused the company's later financial distress or bankruptcy.
- MEDIFIN therefore treats the transaction as evidence for analysis, not as a predetermined diagnosis.

**Status:** Primary historical source — Ready

---

# 2. Simulation Assumptions & Adaptations

## A01 — Toy Kingdom Governance Scenario

**Created by:** MEDIFIN Scenario Design Team

**Information supplied:**
- Toy Kingdom Inc.
- Anderson family ownership
- David, Michael and Richard
- 78% family / 22% private-equity ownership
- family leadership conflict
- Houndstooth Capital and its conditional agreement
- Richard's international asset-sale plan

**Used in MEDIFIN:**
- `HS-G` — Governance & Family
- governance-related questions and stakeholder decisions
- Governance Stability outcome

**Limitation:**
- Entirely fictional.
- It must not be presented as historical information about Toys "R" Us.
- It exists to create information asymmetry and decision trade-offs in the simulation.

**Status:** Simulated — documented in `ASSUMPTIONS.md`

---

## A02 — Toy Kingdom Timeline Adaptation

**Created by:** MEDIFIN Scenario Design Team

**Information supplied:**

Historical financial information from Toys "R" Us is adapted into the fictional FY2024–FY2026 Toy Kingdom timeline.

**Used in MEDIFIN:**
- financial statements
- diagnostic files
- case progression

**Limitation:**
- FY2024–FY2026 are fictional simulation years.
- They must not be presented as actual Toys "R" Us reporting years.

**Status:** Historical / Adapted — documented in `ASSUMPTIONS.md`

---

## A03 — Investment & Management Scenario

**Created / adapted by:** MEDIFIN Scenario Design Team using historical retail context.

**Information supplied:**
- competing investment needs
- store renovation
- digital and omnichannel investment
- supply-chain and customer-experience investment
- simulated management track record

**Used in MEDIFIN:**
- `HS-B` — Stores & Investment
- `HS-F` — Management Track Record
- Treatment choices and later developments

**Limitation:**
- The general business challenges are historically inspired.
- The specific management actions, timing and consequences are simulation design and are not an exact reconstruction of Toys "R" Us history.

**Status:** Historical / Adapted — documented in `ASSUMPTIONS.md`

---

## A04 — Holiday Liquidity Scenario

**Created / adapted by:** MEDIFIN Scenario Design Team using historical seasonality evidence.

**Information supplied:**

A weak holiday period may increase Toy Kingdom's liquidity and refinancing pressure.

**Used in MEDIFIN:**
- liquidity-related follow-up questions
- Timing decisions
- Holiday Inventory priority
- later scenario developments

**Limitation:**
- Historical evidence supports the importance of the holiday season for a toy retailer.
- It does not provide an empirical probability that a specific Toy Kingdom treatment will succeed or fail.
- The resulting consequences remain simulation assumptions.

**Status:** Historical / Adapted — documented in `ASSUMPTIONS.md`

---

# 3. Game-State Sources

## G01 — Investigation Choices

**Source:** Player

**Information supplied:**
- selected diagnostic files
- selected follow-up questions
- selected final diagnostic question

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
- treatment access where applicable
- consequence generation
- final outcome
- Counselor Case Report

**Limitation:**
- These are simulation outputs, not empirical predictions of real corporate outcomes.
- Detailed rules and state transitions are defined separately in the Week 4 Logic Specification.

**Status:** Derived Game State

---

# 4. Source–Use Rules

1. **Historical information must be traceable to a historical source (`S`).**

2. **Fictional or adapted information must be identified as an assumption/adaptation (`A`) and documented in `ASSUMPTIONS.md`.**

3. **Player and system-generated information is classified as Game State (`G`).**

4. **A source must not support a stronger claim than the evidence actually provides.**

5. **Primary sources are preferred when available. Secondary sources should only be used when necessary and must have their limitations stated.**

---

# 5. Open Evidence Items

Before Case #01 is considered fully evidence-ready, the team should verify any remaining historical figures that are not directly supported by the approved historical sources above, particularly:

- historical operating cash flow before the leveraged acquisition;
- any exact debt figures not directly mapped to the FY2016 Form 10-K;
- any additional historical claims introduced into `HS-B`, `HS-F`, or later scenario developments.

If a historical claim cannot be verified, it must either:

- be removed; or
- be clearly reclassified as a simulation assumption in `ASSUMPTIONS.md`.
