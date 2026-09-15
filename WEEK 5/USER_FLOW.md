# MEDIFIN — CASE 01 USER FLOW

> **Financial Clinic Simulation**  
> 13 Screens · Conditional Financial Decisions · Evidence-Based Diagnosis · Multiple Outcomes

---

## 1. Case Overview

| Field | Information |
|---|---|
| **Company** | Toy Kingdom Inc. — a fictional company inspired by Toys "R" Us, Inc. |
| **Industry** | Specialty Retail — Toys & Children's Products |
| **FY2026 Revenue** | $11.540 billion |
| **Scale** | ~1,700 stores worldwide |
| **Ownership** | Anderson Family 78% (David — CEO, Michael — younger brother, Richard — uncle); Private Equity Fund 22% |
| **FY2026 Adjusted EBITDA** | $792 million |
| **FY2026 Operating Earnings** | $460 million |
| **FY2026 Net Loss Attributable to the Company** | −$36 million |
| **Reason for Consultation** | Operating performance shows signs of improvement, yet the company continues to face financial pressure and lacks sufficient capacity to reinvest. Meanwhile, disagreements within the controlling family are increasingly affecting strategic decisions. |

### Player's Main Task

The player acts as a **financial counselor**, or "financial doctor."

The player's job is not simply to identify every problem in the company. Instead, the player must:

1. collect relevant information;
2. distinguish symptoms from underlying causes;
3. identify the company's primary financial constraint;
4. choose an appropriate treatment;
5. manage the trade-offs created by that treatment; and
6. reassess the decision when new information becomes available.

The central question is:

> **What is the company's primary financial problem, and what should be done about it?**

---

# 2. Game Structure

The case contains **13 screens**, organized into four main stages:

| Stage | Screens | Player's Task |
|---|---|---|
| **INVESTIGATE** | 0–5 | Meet the client, select information, ask questions, and analyze financial data |
| **DIAGNOSE** | 6 | Identify the primary financial problem |
| **TREAT** | 7–9 | Choose a treatment, implementation timing, and stakeholder priorities |
| **FOLLOW-UP** | 10–12 | Observe consequences, reassess the decision, and receive the final outcome |

### Core Game Loop

**INVESTIGATE → DIAGNOSE → TREAT → FOLLOW-UP**

The game is designed around **incomplete information**.

The player cannot inspect every piece of information before making a decision. Therefore, selecting the right information is part of the financial reasoning process.

---

# 3. Internal Game Logic

> **DESIGNER NOTE — NOT DISPLAYED TO THE PLAYER AT THE START OF THE CASE**

This section defines information and variables used internally by the game engine.

---

## 3.1 Designer-Only Hidden Information

Michael has entered into a conditional agreement with **Houndstooth Capital**.

If Adjusted EBITDA falls by another **5% from its FY2026 level**, Houndstooth gains a preferential right to acquire part of the Anderson family's equity at a discounted price.

Meanwhile, Richard is considering the sale of international assets to generate immediate cash distributions.

These facts are **not shown to the player at the beginning of the case**.

They can be fully verified only if the player opens:

> **HS-G — Governance & Family**

on Screen 2.

### Why does this hidden information exist?

The purpose is to create an **information asymmetry**.

A financial decision may appear reasonable based only on the financial statements, but additional governance information may reveal another important consequence.

For example:

**Treatment → Short-term EBITDA decline → Houndstooth trigger becomes more likely → Governance risk increases**

Therefore, the player is rewarded for understanding not only financial numbers but also the constraints surrounding those numbers.

---

# 4. Variables Tracked by the Game

The game tracks **one decision-quality indicator** and **two outcome dimensions**.

This distinction is important.

---

## 4.1 Decision-Quality Indicator — Credibility

**Credibility** measures how much the board and key stakeholders trust the player's professional judgment.

Credibility changes when the player:

- makes decisions with sufficient evidence;
- makes unsupported conclusions;
- changes a diagnosis without new evidence;
- successfully justifies a difficult decision.

Credibility may also determine whether certain treatments can be approved.

For example:

> **PD-F — Combined Restructuring** requires High Credibility.

Credibility does **not directly determine the final outcome matrix**.

Instead, it evaluates the **quality of the player's decision-making process**.

---

## 4.2 Outcome Dimension 1 — Financial Resilience

**Financial Resilience** measures the company's ability to:

- maintain liquidity;
- preserve access to financing;
- manage debt obligations;
- maintain sufficient operating runway; and
- avoid severe covenant or refinancing stress.

At the end of the case, the company is classified as:

- **Financially Stable**
- **Financially Fragile**
- **Financial Collapse**

---

## 4.3 Outcome Dimension 2 — Governance Stability

**Governance Stability** measures whether David can maintain effective control of the company while managing conflict within the Anderson family.

At the end of the case, governance is classified as:

- **Family Control Stabilized**
- **Family Divided but Control Maintained**
- **Loss of Control**

---

## 4.4 How the Final Outcome Is Determined

The final ending is determined primarily by:

> **Financial Resilience × Governance Stability**

This creates a **3 × 3 outcome matrix** with nine possible endings.

Credibility is reported separately and changes how the player's performance is interpreted.

In simple terms:

- **Financial Resilience:** What happened to the company financially?
- **Governance Stability:** What happened to control of the company?
- **Credibility:** How good was the player's decision-making process?

---

# SCREEN 0 — CLIENT INTAKE

A dark screen appears with a red heading:

> **[CONFIDENTIAL — CLIENT FILE]**  
> **ANDERSON FAMILY CASE**

The player sees the basic information from the **Case Overview**.

Importantly, the player does **not** receive information about the historical leveraged acquisition or the Houndstooth agreement at this stage.

The player selects:

> **[BEGIN CONSULTATION]**

to proceed.

---

# SCREEN 1 — THE CONSULTATION ROOM

### Setting

A dimly lit boardroom. A desk lamp illuminates **David Anderson**, CEO of Toy Kingdom.

> **David — CEO:**  
> "Sales continue to decline. Amazon, Walmart, and online retail are changing the entire industry. We have cut costs, closed underperforming stores, and invested in digital channels. Some indicators have improved, yet the company is becoming increasingly difficult to manage financially."

> **David — CEO:**  
> "Then there is the family. I recently discovered that Michael has hired his own lawyer, while Richard has been quietly exploring the sale of international assets without board approval. I no longer know whether the real problem lies in the market, in our financial structure, or within our own leadership."

The system displays:

> **[BEGIN DIAGNOSIS]**

---

# SCREEN 2 — DIAGNOSTIC FILES

## Player Decision

Choose exactly **3 of the 7 diagnostic files**.

The remaining four files will be permanently locked.

They cannot be reopened on Screens 3, 4, 5, or during the reassessment on Screen 11.

| Code | Diagnostic File | Main Focus |
|---|---|---|
| **HS-A** | Sales & Customer | Revenue, store traffic, channel shifts, e-commerce |
| **HS-B** | Stores & Investment | Store network and competing investment needs |
| **HS-C** | Liquidity | Cash, inventory requirements, vendor terms, debt maturities |
| **HS-D** | Capital Structure & Leverage History | Debt structure and historical financing |
| **HS-E** | Product & Category Trends | Traditional toys vs. entertainment/licensing |
| **HS-F** | Management Track Record | Results of previous management initiatives |
| **HS-G** | Governance & Family | Ownership conflict and hidden governance risks |

---

## HS-A — SALES & CUSTOMER

### Same-Store Sales

| | FY2024 | FY2025 | FY2026 |
|---|---:|---:|---:|
| Domestic | −1.0% | −0.6% | −1.3% |
| International | +1.8% | +3.2% | −1.6% |
| Consolidated | 0.0% | +0.9% | −1.4% |

> **Same-Store Sales (SSS)** measures the change in sales generated by stores that have been operating long enough to be comparable across periods. It helps separate changes in existing-store performance from changes caused by opening or closing stores.

### Revenue

| | FY2025 | FY2026 | Change |
|---|---:|---:|---:|
| Domestic | $7.356bn | $7.131bn | −3.1% |
| International | $4.446bn | $4.409bn | −0.8% |
| Consolidated | $11.802bn | $11.540bn | −2.2% |

**E-commerce Sales Growth:** +11%

> **Market Analyst:**  
> "Store traffic is weakening, but not every channel is declining. E-commerce continues to grow at a double-digit rate."

### What should the player notice?

The company faces genuine competitive pressure, but the evidence does not show that every part of the business is collapsing.

---

## HS-B — STORES & INVESTMENT

### Major Programs Competing for Capital

- Store renovation
- Mobile & web development
- Omnichannel fulfillment
- Supply-chain improvements
- Customer-experience initiatives
- Holiday inventory

> **Head of Operations:**  
> "We have a fairly clear idea of what needs to be improved."

> "The problem is that every year too many initiatives compete for a limited amount of capital."

### What should the player notice?

The company has several potential investment opportunities but limited financial capacity to fund all of them.

This raises an important question:

> **Is underinvestment itself the root problem, or is another financial constraint preventing the company from investing?**

---

## HS-C — LIQUIDITY

### FY2026

| Metric | Value |
|---|---:|
| Cash & Cash Equivalents | $566m |
| Accounts & Other Receivables | $255m |
| Merchandise Inventory | $2.476bn |
| Total Current Assets | $3.389bn |
| Property & Equipment | $3.067bn |

> **Treasurer:**  
> "Year-end cash does not tell the full liquidity story for a retailer."

> "Holiday inventory requirements, vendor payment terms, and upcoming debt maturities all matter."

### What should the player notice?

A retailer may appear to have substantial current assets while still facing liquidity pressure because a large portion of those assets may be tied up in inventory.

Liquidity must therefore be interpreted together with:

- inventory requirements;
- vendor terms;
- financing availability; and
- upcoming debt obligations.

---

## HS-D — CAPITAL STRUCTURE & LEVERAGE HISTORY

### Current Funding Structure — FY2026

| Metric | Value |
|---|---:|
| Cash | $566m |
| Total Indebtedness | ~$4.8bn |
| Secured Indebtedness | ~$3.4bn |
| Adjusted EBITDA | $792m |
| Operating Earnings | $460m |

The company's funding structure includes:

- secured notes;
- senior notes;
- term facilities;
- revolving facilities;
- international debt; and
- other financing arrangements.

> **CFO:**  
> "Leverage is high, but it has been part of our capital structure for years."

### Key Terms

**Leverage** refers to the use of debt financing relative to the company's earnings, assets, or equity.

**Secured debt** is debt backed by specific company assets that creditors may have claims over if the borrower fails to meet its obligations.

### Historical Financing Event — 2015

Toy Kingdom underwent a **$6.6 billion leveraged acquisition** in 2015.

A **leveraged acquisition / leveraged buyout (LBO)** is an acquisition financed substantially with borrowed money.

In subsequent years, the company completed multiple rounds of:

- refinancing;
- maturity extensions;
- secured borrowing;
- store-investment decisions; and
- restructuring initiatives.

### Operating Cash Flow Before the 2015 Transaction

| Year | Operating Cash Flow |
|---|---:|
| 2012 | $575m |
| 2013 | $801m |
| 2014 | $746m |

### What should the player notice?

The game does **not** automatically tell the player that the leveraged transaction caused the company's distress.

Instead, the player should investigate whether the resulting capital structure created a long-term financial constraint.

---

## HS-E — PRODUCT & CATEGORY TRENDS

### FY2026 Category Performance

- **Domestic toy categories excluding entertainment:** +2.5% SSS
- **Consolidated toy categories excluding entertainment:** +1.1% SSS

Entertainment- and licensing-related categories continue to underperform and remain highly dependent on external movie and product-release cycles.

In years without major blockbuster releases, these categories tend to weaken more significantly than the rest of the portfolio.

> **Merchandising Director:**  
> "There is still genuine demand for traditional toys."

> "But a meaningful part of category performance increasingly depends on entertainment-release cycles that we do not control."

### What should the player notice?

Traditional toy categories are **not collapsing**.

Performance differs across categories, so the player must determine whether product mix is a primary problem or only a contributing factor.

---

## HS-F — MANAGEMENT TRACK RECORD

### Major Initiatives During the Past Three Years

| Period | Initiative | Outcome |
|---|---|---|
| FY2024 | Store renovation pilot | Improved local traffic, but benefits did not fully offset investment costs |
| FY2024 | First round of SG&A reductions | Lower costs, but reduced marketing contributed to weaker traffic |
| FY2025 | New digital platform & mobile app | Double-digit e-commerce growth, but not enough to offset store declines |
| FY2025–26 | Partial international debt restructuring | Reduced near-term pressure without materially changing overall leverage |

> **Board Member:**  
> "We have tried several approaches."

> "The problem is that no single initiative has been large enough to reverse the overall trend. Each one has addressed only part of the problem."

### What should the player notice?

Several management initiatives produced real improvements, but none removed the company's broader financial constraints.

---

## HS-G — GOVERNANCE & FAMILY

Opening this file confirms previously unverified governance information.

The player discovers:

- legal correspondence showing that Michael is preparing to challenge David's leadership;
- the conditional agreement between Michael and Houndstooth Capital;
- Richard's attempts to explore international asset sales outside the normal board process.

### If HS-G Is Opened

The player gains verified evidence about governance risk and can use it when making stakeholder and reassessment decisions.

### If HS-G Is Not Opened

The player can still diagnose and treat the company's financial problems.

However, governance-related decisions will be made with less information.

---

# SCREEN 3 — FOLLOW-UP QUESTIONS

## Player Decision

Choose exactly **2 of 7 questions**.

Each question reveals a narrow piece of information related to one diagnostic area.

A question can be asked even if the corresponding full file was not opened on Screen 2.

However, the answer provides only surface-level information and does **not** replace the complete file.

| Code | Question | Answer |
|---|---|---|
| **CH1-A** | Store traffic is declining while e-commerce is growing. Are customers leaving or simply changing channels? | A significant portion appears to be shifting channels. Online margins are materially lower than store margins. Governance-related rumors have also caused some customers to worry about potential store closures. |
| **CH1-B** | Which investment program has been postponed the longest? | Store renovation has been postponed for three consecutive years as omnichannel investment repeatedly received priority. |
| **CH1-C** | What happens to liquidity if holiday sales underperform by 10%? | The company can continue operating, but its liquidity buffer and covenant headroom would narrow materially. |
| **CH1-D** | Which debt obligation matures first? | A portion of secured notes matures within 18 months. It is the nearest maturity, although not necessarily the company's largest financial pressure. |
| **CH1-E** | Which product categories are currently performing best? | Traditional toy categories remain comparatively resilient, although they represent only part of the overall portfolio. |
| **CH1-F** | Is the management team aligned? | No. Michael has privately retained a lawyer specializing in corporate control and ownership disputes. |
| **CH1-G** | What rights does Houndstooth Capital actually have? | A conditional preferential purchase right becomes exercisable if EBITDA declines by another 5%. |

### Key Term — Covenant Headroom

A **covenant** is a condition imposed by lenders under a financing agreement.

**Covenant headroom** refers to the remaining buffer before the company breaches that condition.

For example:

> More headroom = greater financial flexibility  
> Less headroom = closer to a potential covenant breach

---

# SCREEN 4 — FULL FINANCIAL STATEMENTS

There is no viewing limit from this point onward.

The CFO provides the complete financial package.

## Consolidated Income Statement
*USD millions*

| Metric | FY2024 | FY2025 | FY2026 |
|---|---:|---:|---:|
| Net Sales | 12,361 | 11,802 | 11,540 |
| Cost of Sales | (7,931) | (7,576) | (7,432) |
| **Gross Profit** | **4,430** | **4,226** | **4,108** |
| SG&A | (3,915) | (3,593) | (3,480) |
| Depreciation & Amortization | (377) | (343) | (317) |
| Other Income, Net | 53 | 88 | 149 |
| **Operating Earnings** | **191** | **378** | **460** |
| Interest Expense | (451) | (429) | (457) |
| Interest Income | 4 | 3 | 2 |
| **Earnings / (Loss) Before Tax** | **(256)** | **(48)** | **5** |
| Income Tax Expense | (32) | (76) | (34) |
| **Net Loss** | **(288)** | **(124)** | **(29)** |
| Noncontrolling Interest | (4) | (6) | (7) |
| **Net Loss Attributable to Toy Kingdom** | **(292)** | **(130)** | **(36)** |

---

## Operating Metrics

| Metric | FY2024 | FY2025 | FY2026 |
|---|---:|---:|---:|
| Gross Margin % | 35.8% | 35.8% | 35.6% |
| SG&A / Sales | 31.7% | 30.4% | 30.2% |
| Adjusted EBITDA | $642m | $800m | $792m |
| Consolidated SSS | 0.0% | +0.9% | −1.4% |

---

## Balance Sheet Snapshot — FY2026

### Assets

| Metric | Value |
|---|---:|
| Cash & Cash Equivalents | $566m |
| Receivables | $255m |
| Inventory | $2.476bn |
| Total Current Assets | $3.389bn |
| Property & Equipment | $3.067bn |

### Capital & Funding

| Metric | Value |
|---|---:|
| Total Indebtedness | ~$4.8bn |
| Secured Indebtedness | ~$3.4bn |
| Stockholders' Deficit | ~$1.3bn |

---

## Key Financial Clues

The player is **not automatically given the interpretation**, but the data allows several useful calculations.

### Debt / EBITDA

`Debt / EBITDA = 4,800 / 792 ≈ 6.06x`

This indicates a substantial debt burden relative to the company's earnings capacity.

### Net Debt / EBITDA

`Net Debt / EBITDA = (4,800 − 566) / 792 ≈ 5.35x`

This adjusts debt for available cash.

### Interest Coverage

`Interest Coverage = Operating Earnings / Interest Expense`

`= 460 / 457 ≈ 1.01x`

An Interest Coverage Ratio of approximately **1.01x** means operating earnings are only slightly greater than annual interest expense.

> This is an important indicator of limited financial flexibility, but it does **not by itself prove** that debt is the sole cause of the company's problems.

---

## Governance Note

*Displayed only if HS-G was opened on Screen 2.*

A significant portion of the unusually high **$149 million Other Income, Net** is associated with a one-off insurance-related payment following the death of the founding shareholder.

The proceeds have become part of an internal dispute.

David favors reinvestment, while Michael and Richard favor an immediate distribution.

> **CFO:**  
> "You now have the full financial package. I can answer one final question before you submit your diagnosis."

---

# SCREEN 5 — FINAL DIAGNOSTIC QUESTION

## Player Decision

Choose exactly **1 of 7 questions**.

These questions help the player test the hypothesis currently being considered.

| Code | Question | Answer |
|---|---|---|
| **CH2-A** | Which costs or obligations are most difficult to reduce? | Some financial obligations can be refinanced, but refinancing does not eliminate them. |
| **CH2-B** | If additional capital became available, where would it be invested? | Digital capabilities, fulfillment, and store renovation. |
| **CH2-C** | Why not close significantly more stores? | Some stores should close, but excessive closures would shrink the revenue base and could weaken the network further. |
| **CH2-D** | If Amazon disappeared tomorrow, would the company be financially healthy? | No. Debt, liquidity, reinvestment, and governance pressures would remain. |
| **CH2-E** | If most of the debt burden were removed, would all problems disappear? | No. Store productivity, competitive pressure, and governance conflict would remain. |
| **CH2-F** | What is the greatest concern over the next 12 months? | Liquidity and refinancing capacity. |
| **CH2-G** | What happens if EBITDA declines by another 5%? | If HS-G has been opened, the player receives confirmation that the Houndstooth preferential purchase right becomes exercisable. |

---

# SCREEN 6 — DIAGNOSIS

## Player Decision

Choose exactly **1 of 6 diagnoses**.

The game does not label any diagnosis as correct or incorrect before the player makes a decision.

| Code | Diagnosis | Supporting Evidence |
|---|---|---|
| **CD-A** | Competitive / E-commerce Pressure | Declining store traffic and measurable channel migration |
| **CD-B** | Operating / Store Network Problem | Prolonged underinvestment and delayed store renovation |
| **CD-C** | Liquidity Stress | Limited liquidity buffer and narrowing covenant headroom |
| **CD-D** | Capital Structure / Financing Problem | High leverage, significant secured debt, heavy interest burden, and refinancing pressure |
| **CD-E** | Product / Category Mix Problem | Materially different performance across product categories |
| **CD-F** | Multiple / Mixed Financial Problems | Multiple interacting financial and operating constraints |

---

## Condition for CD-F

A broad mixed diagnosis requires broader evidence.

The player should have reviewed:

> **HS-D + at least one of HS-A / HS-B / HS-E / HS-F**

Otherwise, the system displays:

> **"A mixed diagnosis requires broader evidence than you currently have. The board may interpret this as avoiding a clear judgment."**

**Credibility −1**

### Important

CD-F is **not automatically the best diagnosis**.

A company may have several real problems at the same time.

The player's task is to distinguish:

- **Primary constraint**
- **Contributing pressures**
- **Symptoms**

For example:

> Competitive pressure may be real, while high leverage may still be the primary constraint preventing the company from responding effectively.

---

# SCREEN 7 — TREATMENT PLAN

## Player Decision

Choose exactly **1 of 6 treatment strategies**.

There is no universally superior treatment.

| Code | Treatment | Conditions / Trade-Offs |
|---|---|---|
| **PD-A** | Invest in Competitiveness | Improves stores, digital capabilities, and fulfillment but consumes scarce liquidity. Requires at least Medium Credibility. |
| **PD-B** | Deep Cost Cutting | Improves short-term cash generation but may weaken long-term revenue and competitiveness. |
| **PD-C** | Debt Restructuring | Directly addresses financing pressure but depends on creditor cooperation. |
| **PD-D** | Asset Sale | Generates immediate liquidity but may require selling valuable or strategically important assets. |
| **PD-E** | Bankruptcy Restructuring | Provides a formal mechanism to restructure an unsustainable debt burden but creates significant stakeholder-confidence risk. |
| **PD-F** | Combined Restructuring | Combines financial and operational measures. Potentially powerful but difficult to execute. Requires High Credibility. |

---

## What Is Bankruptcy Restructuring?

Bankruptcy restructuring does **not automatically mean closing the company**.

It is a formal legal process through which a financially distressed company attempts to restructure obligations while preserving viable business operations.

For this U.S.-based case:

> **PD-E is modeled on Chapter 11 reorganization.**

Chapter 11 allows a company to seek court-supervised restructuring while continuing operations.

Liquidation may occur later if restructuring fails, but it is **not automatically the initial objective**.

---

# SCREEN 8 — TIMING

## Player Decision

Choose exactly **1 of 4 implementation timings**.

| Code | Timing | Trade-Off / Risk |
|---|---|---|
| **TG-A** | Act Immediately | Earlier intervention, but holiday-season information remains incomplete |
| **TG-B** | Act After the Holiday Season | Better information, but liquidity may deteriorate while waiting |
| **TG-C** | Attempt Refinancing First | Success improves flexibility; failure may signal financial weakness |
| **TG-D** | Wait Six Months | More observation time, but the highest risk of running out of financial runway |

### What Is Financial Runway?

**Financial runway** refers to how long the company can continue operating before its available liquidity becomes insufficient.

---

# SCREEN 9 — STAKEHOLDER PREPARATION

## Player Decision

Choose exactly **3 of 7 stakeholder priorities**.

| Priority | Why Prioritize It? | Typical Trade-Off |
|---|---|---|
| **Suppliers** | Preserve supply and negotiate payment terms | Less management capacity for creditor negotiations |
| **Employees** | Retain key personnel and stabilize operations | Less capacity for creditor/landlord negotiations |
| **Customers** | Preserve confidence and sales activity | Requires marketing resources |
| **Creditors** | Begin restructuring or refinancing discussions early | May increase concern among suppliers |
| **Landlords** | Protect critical store locations and lease flexibility | Less negotiating capacity elsewhere |
| **Holiday Inventory** | Ensure sufficient merchandise for the peak season | Uses cash that could otherwise be preserved |
| **Governance & Family** | Stabilize leadership and key shareholder relationships | May delay external negotiations and communication |

---

# SCREEN 10 — DEVELOPMENTS

The consequences depend on the interaction between:

> **Treatment + Timing + Stakeholder Priorities**

Seven updates are revealed sequentially.

| Update | What Changes |
|---|---|
| **Sales Update** | Store traffic, inventory availability, customer confidence |
| **Vendor Update** | Supplier terms and willingness to continue supplying |
| **Liquidity Update** | Cash position and borrowing capacity |
| **Store Update** | Renovations, closures, and store investment |
| **Digital Update** | Online growth and digital investment |
| **Debt Update** | Refinancing terms and creditor response |
| **Family / Board Update** | Internal support and control risk |

---

## Examples of Conditional Consequences

| Decision Combination | Illustrative Consequence |
|---|---|
| PD-B + TG-A + Employees not prioritized | Additional unplanned store closures occur as key personnel leave |
| PD-A + insufficient Credibility | The board refuses the full investment plan and scales it back |
| PD-C + Creditors prioritized | Creditors agree to extend maturities but require tighter terms and higher interest |
| HS-G opened + Governance not prioritized | Michael uses governance information to build support against David |

> **Important:** These are educational simulation rules. They are not predictions of what would necessarily occur in a real company.

---

# SCREEN 11 — REASSESSMENT

> **David — CEO:**  
> "We have new information now. Some of our earlier assumptions may no longer hold. Do you want to revise your diagnosis or treatment plan?"

| Decision | Consequence |
|---|---|
| **Keep diagnosis and treatment** | No Credibility penalty |
| **Change diagnosis** | −1 Credibility if unsupported by new evidence; no penalty if new evidence justifies the change |
| **Change treatment** | −1 Credibility if unsupported by new evidence; no penalty if new evidence justifies the change |

Previously locked files remain unavailable.

### Learning Purpose

Changing your mind is **not automatically a mistake**.

The game evaluates whether the player can:

> **Update a professional judgment when new evidence becomes available.**

---

# SCREEN 12 — CASE CLOSURE

The final outcome combines:

> **Financial Resilience × Governance Stability**

Credibility is reported separately.

---

## Financial Resilience

| Event | Points |
|---|---:|
| PD-A approved | +2 |
| PD-B selected | +3 short-term |
| PD-C + Creditors prioritized | +2 |
| PD-C without Creditors prioritized | 0 |
| PD-D selected | +2 |
| PD-E + Suppliers prioritized | +1 |
| PD-E without Suppliers prioritized | −2 |
| PD-F + High Credibility | +4 |
| TG-D selected | −1 |
| Holiday Inventory not prioritized | −1 |

### Financial Resilience Tier

- **≥ 5:** Financially Stable
- **1–4:** Financially Fragile
- **≤ 0:** Financial Collapse

> **Design Assumption:** These points and thresholds are educational simulation rules. They are not empirical bankruptcy probabilities or validated financial-risk coefficients.

---

## Governance Stability

| Event | Points |
|---|---:|
| HS-G opened | +1 |
| Governance & Family prioritized | +2 |
| Governance & Family not prioritized | −1 |
| Unsupported diagnosis/treatment change | −1 each |
| Financial Collapse | −2 |
| PD-D selected without reviewing HS-E | −1 |

### Governance Stability Tier

- **≥ 3:** Family Control Stabilized
- **0–2:** Family Divided but Control Maintained
- **< 0:** Loss of Control

> **Design Assumption:** Governance points are narrative simulation rules created for the educational case. They are not intended to represent a real-world corporate-governance model.

---

# FINAL 3 × 3 OUTCOME MATRIX

| | **Family Control Stabilized** | **Family Divided but Control Maintained** | **Loss of Control** |
|---|---|---|---|
| **Financially Stable** | **The Successor** — David retains leadership and the company stabilizes. | **Conditional Truce** — The company stabilizes, but David must surrender part of his authority to preserve internal peace. | **Win the Company, Lose the Throne** — The company recovers financially, but David loses control. |
| **Financially Fragile** | **Holding the Line Together** — The company survives with limited financial flexibility while the family remains aligned. | **Dividing the Lifeboat** — The company survives in a weaker form while family members compete over remaining value. | **Cannibalizing the Company** — The business survives technically, but governance conflict consumes resources. |
| **Financial Collapse** | **United in Failure** — The company fails financially, but the family remains sufficiently aligned to manage the restructuring collectively. | **The Fund's Company** — Creditors or outside investors gain control while the family remains divided. | **Total Breakdown** — Financial collapse and governance failure occur simultaneously. |

---

# ROLE OF CREDIBILITY

Credibility does **not** determine the player's position in the 3 × 3 outcome matrix.

Instead, it evaluates the quality of the player's professional decision-making.

For example:

### High Credibility

> The board views the player as a disciplined financial counselor who used evidence, understood trade-offs, and adapted appropriately.

### Low Credibility

> Even if the company survives, the board questions whether the outcome resulted from sound judgment or favorable circumstances.

Therefore:

> **Outcome ≠ Decision Quality**

A good decision can still face an unfavorable external outcome, while a weak decision may occasionally benefit from favorable circumstances.

---

# FINAL COUNSELOR CASE REPORT

At the end of the case, the player receives a summary of the entire decision path.

| Field | Result |
|---|---|
| Diagnostic Files Reviewed | HS-... |
| Follow-Up Questions Asked | CH1-... |
| Final Diagnostic Question | CH2-... |
| Initial Diagnosis → Final Diagnosis | CD-... → CD-... |
| Initial Treatment → Final Treatment | PD-... → PD-... |
| Timing Decision | TG-... |
| Stakeholder Priorities | ... |
| Final Credibility | Low / Medium / High |
| Financial Resilience | Score → Tier |
| Governance Stability | Score → Tier |
| Final Outcome | Outcome Matrix Result |

The report also asks:

1. **What evidence did you prioritize?**
2. **What did you identify as the primary financial constraint?**
3. **Which problems did you consider contributing pressures rather than root causes?**
4. **Why did you choose your treatment?**
5. **What trade-offs did you accept?**
6. **Did new information change your judgment? Why?**

The purpose of the final report is to make the player's **financial reasoning visible**, rather than simply displaying a score.

---

# COMPARISON WITH THE REAL CASE

Toy Kingdom Inc. is a **fictional educational simulation inspired by Toys "R" Us**.

The following elements are fictionalized for gameplay:

- Toy Kingdom Inc.
- Anderson family
- David, Michael, and Richard
- Houndstooth Capital
- FY2026 timeline
- governance conflict
- conditional EBITDA trigger
- game scoring and outcome rules

They should **not** be interpreted as historical facts about Toys "R" Us.

The real Toys "R" Us filed for **Chapter 11 bankruptcy protection in 2017** in an attempt to restructure its financial obligations while continuing operations.

Its U.S. business subsequently moved toward liquidation in 2018 after the restructuring process failed to produce a sustainable path forward.

---

# CORE LEARNING MESSAGE

The case is **not designed to teach that Amazon alone caused the failure of Toys "R" Us**, nor that leverage alone explains every problem.

Instead, the player must evaluate several simultaneously valid pressures:

**Competitive Pressure**  
↓  
**Store / Product / Operating Challenges**  
↓  
**Need for Reinvestment**

while also considering:

**High Leverage**  
↓  
**Heavy Interest Burden**  
↓  
**Reduced Financial Flexibility**  
↓  
**Limited Capacity to Reinvest**

The central financial question is:

> **Did operating deterioration create the company's financial distress, or did its highly leveraged capital structure leave too little financial flexibility to respond effectively to that deterioration?**

The player should ultimately learn to distinguish between:

- **Symptoms**
- **Contributing pressures**
- **Primary financial constraints**
- **Treatment trade-offs**
- **Consequences under uncertainty**

> **Multiple problems can be true at the same time. The financial counselor's job is to determine which problem should receive priority and which treatment is most defensible given the available evidence and constraints.**

---

**[CLOSE CASE]** · **[REOPEN CASE]**
