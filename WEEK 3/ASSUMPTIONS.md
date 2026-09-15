# ASSUMPTIONS

## Case #01 — Toy Kingdom Inc.

> **Educational financial simulation inspired by the historical Toys "R" Us case.**
>
> This file identifies the assumptions, adaptations, and simulation constraints created by the MEDIFIN team. Its purpose is to clearly separate **historical evidence** from **fictional or adapted case information**.

---

## ID Guide

| ID | Meaning |
|---|---|
| **S01, S02, ...** | Historical sources documented in `SOURCE_USE_MAP.md` |
| **A01, A02, ...** | Assumptions or adaptations documented in this file |
| **G01, G02, ...** | Player choices or game-generated states |

> Historical facts must be traceable to an approved `S` source. Information created or materially adapted by the team must be identified as an `A` assumption.

---

# 1. Case Fiction & Governance

## A01 — Toy Kingdom & Anderson Family

**Assumption / Adaptation:**  
Toy Kingdom Inc. is a fictional company inspired by Toys "R" Us. The Anderson family, including David, Michael and Richard, and the 78% family / 22% private-equity ownership structure are created for the simulation.

**Why needed:**  
Creates a realistic corporate setting in which financial decisions interact with ownership and management interests.

**Limitation:**  
These entities, individuals and ownership percentages must not be interpreted as historical information about Toys "R" Us.

**Disclosure:**  
Clearly identified as fictional in the case disclaimer.

---

## A02 — Houndstooth Capital Trigger

**Assumption / Adaptation:**  
Michael has a conditional agreement with Houndstooth Capital. If Adjusted EBITDA declines by another 5%, Houndstooth receives a preferential right to acquire part of the family's equity at a discounted price.

**Why needed:**  
Creates a hidden governance constraint that can affect the consequences of financial decisions.

**Limitation:**  
The agreement and the 5% threshold are entirely fictional and are not based on an actual Toys "R" Us agreement.

**Disclosure:**  
Presented as part of the fictional Toy Kingdom scenario. It becomes verified evidence for the player only if the relevant governance information is discovered.

---

## A03 — Family Conflict & Asset-Sale Scenario

**Assumption / Adaptation:**  
David favors reinvestment and financial recovery, while Michael is considering changes in corporate control and Richard is exploring an international asset sale.

**Why needed:**  
Creates competing stakeholder objectives and allows the player to consider governance consequences alongside financial consequences.

**Limitation:**  
The family conflict and proposed asset sale are fictional simulation elements.

**Disclosure:**  
Presented only as Toy Kingdom case information, not as historical Toys "R" Us evidence.

---

# 2. Historical Adaptations

## A04 — Financial Timeline Adaptation

**Assumption / Adaptation:**  
Selected historical financial information from Toys "R" Us is adapted into Toy Kingdom's fictional FY2024–FY2026 timeline.

**Why needed:**  
Allows historical financial evidence to be used in a consistent fictional case timeline.

**Limitation:**  
FY2024–FY2026 are simulation years. They are not actual Toys "R" Us reporting periods.

**Disclosure:**  
Historical figures used in the case remain traceable to their original sources in `SOURCE_USE_MAP.md`.

---

## A05 — Investment & Management Scenario

**Assumption / Adaptation:**  
Toy Kingdom faces competing capital needs including store renovation, digital and omnichannel development, fulfillment, supply chain and customer experience. Specific management actions and their timing are adapted or created for the simulation.

**Why needed:**  
Creates realistic capital-allocation trade-offs under limited financial flexibility.

**Limitation:**  
The general business challenges are historically inspired, but the specific sequence of management actions and consequences is not an exact reconstruction of Toys "R" Us history.

**Disclosure:**  
Classified as **Historical / Adapted** rather than purely historical information.

---

## A06 — Holiday Liquidity Scenario

**Assumption / Adaptation:**  
A weak holiday period is assumed to increase pressure on Toy Kingdom's liquidity, inventory position and refinancing flexibility.

**Why needed:**  
Retail seasonality creates a meaningful timing trade-off for the player's decisions.

**Limitation:**  
Historical evidence supports the importance of the holiday season, but the specific consequences experienced by Toy Kingdom are simulation outcomes rather than empirical predictions.

**Disclosure:**  
Historical seasonality evidence and simulated consequences are kept separate.

---

# 3. Simulation Boundaries

## A07 — Treatment Outcomes

**Assumption:**  
The consequences of treatment choices represent educational scenarios designed to illustrate financial trade-offs.

**Why needed:**  
The alternative treatments are counterfactual decisions, so their exact real-world outcomes cannot be directly observed or verified.

**Limitation:**  
MEDIFIN does not claim that a treatment will produce the same result for a real company under similar conditions.

**Disclosure:**  
Final results are presented as **simulation outcomes**, not financial forecasts.

---

## A08 — Outcome Indicators

**Assumption:**  
MEDIFIN uses **Financial Resilience** and **Governance Stability** as outcome dimensions and **Credibility** as a decision-quality indicator.

**Why needed:**  
These indicators allow the game to summarize the financial, governance and evidence-quality consequences of the player's decisions.

**Limitation:**  
They are educational simulation constructs, not standardized financial ratios, credit ratings or validated professional assessment measures.

**Disclosure:**  
The meaning of each indicator is explained to the player. Detailed calculation rules and thresholds are defined separately in the Week 4 Logic Specification.

---

# 4. Information & Gameplay Constraints

## A09 — Limited Information Access

**Assumption:**  
The player cannot access every available piece of information before making decisions. For example, only a limited number of Diagnostic Files and Follow-Up Questions can be selected.

**Why needed:**  
The constraint requires the player to prioritize relevant evidence and make professional judgments under incomplete information.

**Limitation:**  
The access limits are game-design rules, not restrictions that necessarily exist in real financial advisory work.

**Disclosure:**  
The player is informed of the selection limits before making a choice.

---

## A10 — Evidence Remains Limited During Reassessment

**Assumption:**  
Information that was not selected during the investigation stage remains unavailable during reassessment. The player must reconsider the case using previously discovered evidence together with new developments.

**Why needed:**  
Preserves the consequences of earlier information-selection decisions and tests whether the player can update a judgment when new information appears.

**Limitation:**  
This is an educational gameplay constraint and does not represent a universal professional advisory process.

**Disclosure:**  
Locked information is clearly shown as unavailable in the interface.

---

# 5. Assumption Management Rules

To keep the case evidence-ready:

1. **Historical facts** must be traceable to an approved `S` source in `SOURCE_USE_MAP.md`.
2. **Fictional or materially adapted information** must be documented as an `A` assumption in this file.
3. **Player choices and game-generated states** are identified as `G` information.
4. Historical evidence and simulation assumptions must not be presented as equivalent.
5. Detailed formulas, scoring rules and thresholds belong to the **Week 4 Logic Specification**, not this Week 3 assumptions file.
6. If new unsupported information is added to the case, it must either be verified with an appropriate source or clearly documented here as an assumption.
