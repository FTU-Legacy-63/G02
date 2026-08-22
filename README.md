# MEDIFIN — Inside the Mind of a Counselor

> **MEDIFIN** is a financial counseling simulation game where players act as "financial doctors", diagnose clients' financial problems, investigate their underlying causes, and recommend appropriate treatments through financial analysis and decision-making.

---

## 1. Team Members and Roles

| Team Member | Student ID | Role | Main Output |
|---|---|---|---|
| **Nguyễn Phương Khuê** | 2413380023 | Coordinator & Scenario Designer | Coordinates project progress, reviews outputs, designs financial scenarios and develops sample treatment protocols. |
| **Trương Vĩnh Thịnh** | 2412380046 | Frontend & Integration Developer | Develops the playable interface and scenario integration, while collaborating on game logic implementation, testing and debugging. |
| **Lâm Diệu Anh** | 2413380007 | Financial Content Lead | Defines financial metrics for each financial disease, develops sample financial datasets and prepares answer keys. |
| **Bùi Lê Trà Giang** | 2413380015 | UI/UX Designer & Dialogue Writer | Designs screen flows and wireframes, and develops dialogue scripts and storylines for each scenario. |
| **Lê Bảo Ngọc** | 2412380033 | Game Engine & Logic Developer | Develops the core game engine, including diagnosis logic, scoring, treatment outcomes and player progression. |

---

## 2. Product Overview

**MEDIFIN – Financial Clinic** is a simulation game where players act as financial counselors — or "financial doctors" — who diagnose and treat clients' financial problems through investigation, financial analysis and decision-making.

Instead of being directly told what the financial problem is, players receive only the client's **symptoms** and must discover the underlying **financial disease** themselves.

> **Client Symptoms → Investigation → Financial Evidence → Diagnosis → Treatment**

---

## 3. Problem Candidates

During the initial problem exploration, the team considered three potential directions.

| Candidate | Target User | Task / Decision | Main Difficulty | Evaluation |
|---|---|---|---|---|
| **Candidate 1: Financial Clinic** – Financial Diagnosis & Counseling Simulation | Finance and Banking students interested in financial counseling careers; entry-level counselors, advisors or RMs | Collect evidence, distinguish symptoms from root causes, diagnose financial problems and recommend solutions while considering client behavior and constraints | Classroom exercises usually provide clear problems and clean data, while real clients may provide incomplete or conflicting information and make emotional decisions | **SELECTED** – Addresses a practical skill gap, supports diverse scenarios and allows deeper cause-and-effect simulation beyond a simple investment game |
| **Candidate 2: SME Cash-Flow & Working Capital Diagnostic Tool** | SME owners and corporate credit analysts | Analyze cash flow, inventory turnover, DSO and other metrics to develop a working-capital restructuring plan | Businesses may confuse accounting profit with actual cash flow, causing liquidity problems despite revenue growth | **FEASIBLE BUT NARROW** – Strong quantitative component, but focuses mainly on short-term corporate finance and provides less human interaction |
| **Candidate 3: Personal Wealth & Debt Restructuring Simulator** | Individuals/families facing financial difficulties and personal financial planners | Assess personal assets and liabilities, develop debt repayment plans and allocate household cash flow | Borrowers may hide debt, make emotional decisions or fail to follow spending-reduction plans | **NOT SELECTED** – Similar personal-finance products already exist and the concept may not fully utilize students' quantitative financial knowledge |

### Selected Direction

> **Candidate 1: Financial Clinic – Financial Diagnosis & Counseling Simulation**

The selected direction allows MEDIFIN to focus on the **reasoning process of a financial counselor** rather than simply teaching calculations or asking players to select investments.

---

## 4. Selected Target Users

### Primary Target User

The primary target users are:

> **Year 2–4 Finance and Banking students at FTU who are preparing for financial counseling or advisory careers.**

The expected player already has basic financial knowledge but has limited experience dealing with realistic and ambiguous client situations.

Therefore, the game does not mainly teach:

> *"What is Current Ratio?"*

Instead, it trains students to think:

> *"When should I examine Current Ratio? What does it tell me about this client's situation? How should that information affect my recommendation?"*

---

## 5. User Task or Decision

The player's main task is:

> **Investigate a client's financial situation, identify the underlying financial problem, and recommend an appropriate treatment.**

The diagnosis is **not given directly** to the player.

Instead, the player follows the process:

> **Client presents symptoms → Player investigates → Player analyzes evidence → Player diagnoses → Player recommends treatment**

The player therefore needs to make decisions about:

- What information should be investigated.
- Which financial evidence is relevant.
- What the underlying financial problem is.
- Which treatment is most appropriate.
- How the recommendation should be communicated to the client.

---

## 6. Draft Problem Statement

Finance and Banking students understand financial theories and analytical tools but often struggle to apply them in realistic counseling situations because classroom exercises usually provide clean data and clearly defined problems.

In real financial counseling, however, clients may present vague symptoms, incomplete information, conflicting objectives and emotional biases.

> **Therefore, Finance and Banking students lack a safe and realistic environment to practice investigating ambiguous financial situations, diagnosing underlying problems, and making appropriate client-oriented financial decisions before entering the workplace.**

---

## 7. Visible Contribution — Week 1

| Team Member | Week 1 Contribution | Visible Output |
|---|---|---|
| **Nguyễn Phương Khuê** | Organized the repository and integrated Week 1 work into a reviewable README | README structure and evidence links |
| **Lâm Diệu Anh** | Analyzed and defined the target users and explored initial product directions | Target-user definition and problem candidate |
| **Trương Vĩnh Thịnh** | Researched, analyzed and proposed problem candidates and the core user task | Problem candidates and user task |
| **Bùi Lê Trà Giang** | Defined MEDIFIN's financial reasoning and clarified the core difficulty and finance relevance | Difficulty description and problem statement |
| **Lê Bảo Ngọc** | Identified unresolved Week 1 issues and consolidated Checkpoint 1 feedback | Open questions and Checkpoint 1 summary |

---

## 8. Open Questions

The team still needs to validate and decide:

1. Should the game include both **individual and corporate clients**, or should the target scenarios be narrowed?
2. How many **decision points** should each case contain to provide sufficient depth without becoming too long?
3. Should the **investigation process** be limited by time or investigation points?
4. How complex should the **financial datasets** be to remain realistic but still suitable for students?
5. Which dimensions should be included in the **player scoring system** — Investigation, Diagnosis, Treatment and/or Communication?
6. Should each treatment have one **best answer**, or should multiple reasonable solutions be accepted with different trade-offs?
7. What evidence should be collected to validate whether students actually experience the problem assumed by the team?

---

## 9. Checkpoint 1 Feedback and Revision

| Item | Record |
|---|---|
| **Feedback Received** | The Financial Counselor concept may overlap with Group 1's Shark Tank-style investment simulation. The scenarios need to be more distinctive and cover a wider range of client situations. The responsibilities of the two developer roles also initially overlapped. |
| **Decision** | **Change / Refine** — Keep the Financial Counselor concept but clarify the core task and gameplay. |
| **Revision Made** | Shift the focus from investment selection to **financial diagnosis and treatment**; introduce the **Financial Clinic** metaphor; separate technical responsibilities into **Game Engine & Logic Developer** and **Frontend & Integration Developer**. |
| **Reason** | Differentiate MEDIFIN from investment simulations and ensure that each team member has a distinct and reviewable output. |
| **Remaining Questions** | Determine the final scenario set and further validate the target-user problem. |

---

## 10. Week 2 — Product Development

Based on the selected problem direction, Week 2 develops MEDIFIN into a more concrete and testable product structure.

### Week 2 Deliverables

- [Project Proposal](docs/PROJECT_PROPOSAL.md)
- [Solution Structure](docs/SOLUTION_STRUCTURE.md)

### Core Product Direction

> **OBSERVE → INVESTIGATE → DIAGNOSE → TREAT → CONSEQUENCE → LEARN**

The goal is not simply to reward players with points or badges, but to help them **practice thinking and making decisions like financial counselors**.

---

## Project Status

**Current Stage:** Week 2 – Product Definition & MVP Planning

**Selected Concept:** MEDIFIN – Financial Clinic

**Product Pattern:** Scenario-Based Decision Simulation

**Initial MVP:** One complete playable financial counseling case
