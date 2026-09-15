# FEATURE MAP

## Case #01 — Toy Kingdom Inc.

> Week 5 Product Refinement — MEDIFIN

---

## 1. Main User Goal

The player acts as a **Junior Financial Counselor**.

The player's goal is to:

> **Investigate a client's financial condition, identify the primary financial problem, recommend an appropriate response, and reassess the decision after observing its consequences.**

The main output is the **Counselor Case Report**, which summarizes the player's decision quality, simulated company outcome, and learning feedback.

---

## 2. Main Feature

### Financial Counseling Decision Simulation

MEDIFIN's main feature is an interactive financial counseling simulation in which the player moves through a complete professional decision process:

**Investigate → Diagnose → Treat → Plan Execution → Observe Consequences → Reassess → Receive Final Report**

This feature directly supports the main user goal and uses the financial and decision logic developed in Week 4.

**Decision:** KEEP — Must work in the MVP.

**Feature Owner:** Team Integration  
**Primary Integration Owner:** Trương Vĩnh Thịnh — Frontend & Integration Developer

---

## 3. Supporting Features

Supporting features enable the Main Feature and help the player understand the case, make decisions, and interpret the result.

| Supporting Feature | Purpose | Decision | Primary Owner |
|---|---|---|---|
| **Client Intake & Consultation** | Introduces the client, presenting problem, and counseling task | **Keep · Simplify** | Nguyễn Phương Khuê |
| **Investigation System** | Allows the player to select Diagnostic Files and questions under limited information access | **Keep** | Lâm Diệu Anh + Lê Bảo Ngọc |
| **Financial Evidence View** | Presents financial statements and relevant evidence for analysis | **Keep** | Lâm Diệu Anh + Trương Vĩnh Thịnh |
| **Diagnosis System** | Allows the player to identify relevant problems and determine the Primary Diagnosis | **Keep** | Lâm Diệu Anh + Lê Bảo Ngọc |
| **Treatment Selection** | Allows the player to recommend a response based on the diagnosis | **Keep** | Lâm Diệu Anh + Lê Bảo Ngọc |
| **Execution Planning** | Adds treatment timing and stakeholder priorities | **Keep** | Nguyễn Phương Khuê + Lê Bảo Ngọc |
| **Consequence Engine** | Generates case developments from the selected treatment and execution plan | **Keep** | Lê Bảo Ngọc |
| **Reassessment** | Allows the player to maintain or revise judgment after new developments | **Keep** | Lê Bảo Ngọc + Nguyễn Phương Khuê |
| **Counselor Scoring** | Evaluates Investigation, Diagnosis, Treatment, Execution Planning, and Reassessment | **Keep** | Lê Bảo Ngọc |
| **Case Outcome System** | Generates Financial Resilience, Governance Stability, and the final case ending | **Keep** | Lê Bảo Ngọc + Nguyễn Phương Khuê |
| **Contextual Feedback** | Explains why decisions were strong or weak without revealing the hidden answer key | **Keep** | Lâm Diệu Anh + Bùi Lê Trà Giang |
| **Input / Selection Validation** | Prevents incomplete or invalid choices and provides clear error guidance | **Keep** | Trương Vĩnh Thịnh + Lê Bảo Ngọc |
| **Counselor Case Report** | Presents final score, reasoning, company outcome, improvement areas, and limitations | **Keep** | Trương Vĩnh Thịnh + Lâm Diệu Anh |
| **Interface & Dialogue** | Makes each decision step and financial output understandable to the player | **Keep** | Bùi Lê Trà Giang + Trương Vĩnh Thịnh |

---

## 4. Removed / Postponed Features

Week 5 prioritizes one complete and understandable MVP flow. Features that do not directly support this goal are simplified, postponed, or removed.

| Feature | Decision | Reason |
|---|---|---|
| **Complex Governance / Family Storyline** | **Simplify** | Governance remains a secondary constraint but should not distract from the main financial problem |
| **Controlled Scenario Variation** | **Postpone** | Replayability is useful, but the fixed core flow should work before variation is added |
| **Advanced Animations / Visual Effects** | **Postpone** | Improves appearance but is not required for the financial counseling task |
| **Additional Cases** | **Postpone** | The MVP prioritizes one complete playable Case #01 |
| **Multiplayer** | **Remove from MVP** | Does not support the main learning task and increases implementation complexity |
| **Open-Ended AI Chatbot** | **Remove from MVP** | The product uses controlled financial decision logic rather than unrestricted conversation |
| **Real-Time Financial Data** | **Remove from MVP** | Case #01 uses predefined and traceable case evidence |

---

## 5. Main Feature Flow

The retained features support one connected product experience:

```mermaid
flowchart LR
    A["Client Intake"] --> B["Investigation"]
    B --> C["Financial Evidence"]
    C --> D["Diagnosis"]
    D --> E["Treatment"]
    E --> F["Execution Planning"]
    F --> G["Consequences"]
    G --> H["Reassessment"]
    H --> I["Final Assessment"]
    I --> J["Counselor Case Report"]
```

This flow is implemented through the **13 screens / 6 phases** defined in Week 4.

---

## 6. Feature Ownership

Each team member owns a visible part of the product rather than only a role title.

| Member | Role | Main Feature Responsibility |
|---|---|---|
| **Nguyễn Phương Khuê** | Coordinator & Scenario Designer | Case flow, scenario design, execution conditions, and governance storyline |
| **Trương Vĩnh Thịnh** | Frontend & Integration Developer | Playable interface, validation, output display, and integration of UI with case data and game logic |
| **Lâm Diệu Anh** | Financial Content Lead | Financial evidence, diagnosis/treatment criteria, and learning feedback |
| **Bùi Lê Trà Giang** | UI/UX Designer & Dialogue Writer | Screen experience, dialogue, interface clarity, and user-facing explanations |
| **Lê Bảo Ngọc** | Game Engine & Logic Developer | Decision rules, scoring, consequence generation, reassessment, and outcome logic |

---

## 7. Connection to Existing Logic

Week 5 refines the user experience of the logic already developed in Week 4.

| Feature Area | Logic Evidence |
|---|---|
| Investigation & Diagnosis | [`DECISION_RULES_AND_SCORING.md`](../WEEK%204/DECISION_RULES_AND_SCORING.md) |
| Treatment & Execution | [`DECISION_RULES_AND_SCORING.md`](../WEEK%204/DECISION_RULES_AND_SCORING.md) |
| Consequence & Reassessment | [`PROJECT_LOGIC_CHAIN.md`](../WEEK%204/PROJECT_LOGIC_CHAIN.md) |
| Counselor Performance | [`DECISION_RULES_AND_SCORING.md`](../WEEK%204/DECISION_RULES_AND_SCORING.md) |
| Expected Output | [`EXPECTED_RESULT_AND_LOGIC_TEST.md`](../WEEK%204/EXPECTED_RESULT_AND_LOGIC_TEST.md) |

---

## 8. Week 5 Feature Decision

For the current MVP:

> **Build one complete Case #01 before expanding the product.**

### Keep
Financial counseling flow and all features required to complete it.

### Simplify
Story and governance elements that may distract from financial reasoning.

### Postpone
Replayability features, additional cases, and advanced visual effects.

### Remove from MVP
Features outside the agreed product scope.

The Week 5 priority is therefore:

**Complete Core Flow → Clear User Experience → Connected Logic → Testable MVP**
