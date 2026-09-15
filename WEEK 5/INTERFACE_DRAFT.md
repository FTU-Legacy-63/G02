# INTERFACE DRAFT

## MEDIFIN — Case #01: Toy Kingdom Inc.

> **Week 5 Product Refinement — Working Interface Evidence**

The current MEDIFIN interface has been developed from an initial visual concept into an **interactive Figma prototype** representing the core financial counseling flow.

---

## 1. Working Interface

### Design Draft

🎨 **[Canva — Initial UI/UX Concept](https://www.canva.com/design/DAHUrjuo2iU/TwEgLcpHq5jNEXqZxAyq5Q/edit?ui=eyJBIjp7fX0)**

The Canva draft represents the initial visual direction and screen concept of MEDIFIN.

### Interactive Prototype

🖥️ **[Figma — MEDIFIN Interactive Prototype](https://www.figma.com/proto/VtlhknTup0qQw5TX7OhloF/Medifin?node-id=1-14&p=f&t=Q6iSnSJUCTCF9sF1-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A8&starting-point-node-id=1%3A14)**

The Figma prototype demonstrates how the player moves through the main decision process rather than viewing the screens as isolated questions.

### Core Interface Flow

**Client Intake → Investigation → Diagnosis → Treatment → Execution → Consequence → Reassessment → Final Report**

The interface follows the **13-screen / 6-phase structure** defined in the Week 5 User Flow.

📄 **[View USER_FLOW.md](USER_FLOW.md)**

---

# 2. Input Screen Evidence

MEDIFIN is a decision-based simulation. Therefore, the interface must make each required player input clear before allowing the player to continue.

Key input screens include:

| Screen | Player Input | Interface Requirement |
|---|---|---|
| **Screen 2 — Diagnostic Files** | Select 3 of 7 files | Selected state + selection counter + Continue |
| **Screen 3 — Follow-Up Questions** | Select 2 questions | Selected state + selection limit |
| **Screen 5 — Final Diagnostic Question** | Select 1 question | Single selection |
| **Screen 6 — Diagnosis** | Identify relevant problems and select Primary Diagnosis | Clear primary selection |
| **Screen 7 — Treatment** | Select treatment strategy | Treatment options + trade-off information |
| **Screen 8 — Timing** | Select implementation timing | Timing options + risk information |
| **Screen 9 — Stakeholder Priorities** | Select 3 priorities | Selection counter + validation |
| **Screen 11 — Reassessment** | Keep or revise previous judgment | Previous decision + new evidence + reassessment action |

### Input Design Pattern

Each decision screen follows:

> **Instruction → Information → Choice → Selection State → Continue**

The player should always understand:

- what decision must be made;
- what information is available;
- what has already been selected; and
- what action continues the case.

---

# 3. Output Screen Evidence

The interface does not only collect decisions. It must also clearly communicate the result produced by the game logic.

Two screens are especially important.

## Screen 10 — Consequence

Screen 10 presents the developments resulting from the player's previous decisions.

The displayed consequence depends on:

> **Treatment + Timing + Stakeholder Priorities + Case Conditions**

Possible developments include:

- Sales
- Liquidity
- Debt / Refinancing
- Suppliers
- Stores
- Digital investment
- Governance / Board

The purpose of this screen is **not to immediately tell the player whether the decision was correct or incorrect**.

Instead, it provides new evidence that the player must interpret before reassessment.

**Output → New Evidence → Reassessment**

---

## Screen 12 — Counselor Case Report

The final interface provides two separate outputs.

### A. Counselor Performance

The player's decision-making process is evaluated across:

- Investigation
- Diagnosis
- Treatment
- Execution Planning
- Reassessment
- **Overall Counselor Score**

### B. Case Outcome

The simulated company outcome reports:

- Financial Resilience
- Governance Stability
- Final Ending

The interface keeps:

> **Decision Quality ≠ Company Outcome**

A strong reasoning process does not automatically guarantee the best simulated company outcome.

### Explanation Pattern

Final feedback follows:

> **Result → Reason → Meaning → Action → Limit**

This ensures that the player receives an explanation rather than an unexplained score.

### Next Action

The final screen provides clear next actions:

> **[REVIEW DECISION PATH]**

or

> **[REPLAY CASE]**

---

# 4. Error & Validation Evidence

The interface prevents incomplete or invalid decisions from silently entering the game logic.

| Screen | Invalid State | Error Message |
|---|---|---|
| **2 — Diagnostic Files** | Selection ≠ 3 | `Select exactly 3 Diagnostic Files to continue.` |
| **3 — Follow-Up Questions** | Selection ≠ 2 | `Select exactly 2 Follow-Up Questions to continue.` |
| **5 — Final Question** | No selection | `Select one final question before continuing.` |
| **6 — Diagnosis** | No Primary Diagnosis | `Select a Primary Diagnosis before submitting your diagnosis.` |
| **7 — Treatment** | No treatment selected | `Select a treatment strategy to continue.` |
| **8 — Timing** | No timing selected | `Select an implementation timing.` |
| **9 — Stakeholders** | Selection ≠ 3 | `Select exactly 3 stakeholder priorities.` |
| **11 — Reassessment** | Revised decision incomplete | `Complete your revised decision before closing the case.` |

### Error Handling Pattern

> **Invalid Input → Clear Message → Correct Input → Continue**

Error messages should tell the player **what needs to be corrected**, rather than displaying a generic error.

---

# 5. Interface → Logic Connection

The interface represents the user-facing layer of MEDIFIN.

The financial reasoning, scoring, and consequence rules are documented separately so that every important interface action can be traced back to the approved product logic.

| Interface Element | Logic Source |
|---|---|
| **13-Screen User Journey** | [USER_FLOW.md](USER_FLOW.md) |
| **Overall Decision Chain** | [PROJECT_LOGIC_CHAIN.md](../WEEK%204/PROJECT_LOGIC_CHAIN.md) |
| **Investigation & Diagnosis Logic** | [DECISION_RULES_AND_SCORING.md](../WEEK%204/DECISION_RULES_AND_SCORING.md) |
| **Treatment & Execution Logic** | [DECISION_RULES_AND_SCORING.md](../WEEK%204/DECISION_RULES_AND_SCORING.md) |
| **Consequence & Reassessment Logic** | [PROJECT_LOGIC_CHAIN.md](../WEEK%204/PROJECT_LOGIC_CHAIN.md) |
| **Expected Final Result** | [EXPECTED_RESULT_AND_LOGIC_TEST.md](../WEEK%204/EXPECTED_RESULT_AND_LOGIC_TEST.md) |

Therefore:

> **Interface = What the player sees and does**

> **Logic = How MEDIFIN evaluates the decision and generates the result**

This separation makes the product easier to test and prevents interface design from changing the underlying financial logic.

---

# 6. Interface Design Decisions

The prototype currently applies three main interface decisions.

### 1. Decision-Based Interactive Flow

The interface was refined from a collection of static screens into a connected decision flow.

Instead of presenting independent questions, player decisions form a continuous counseling process:

> **Situation → Investigation → Diagnosis → Treatment → Consequence → Reassessment → Explanation**

This makes MEDIFIN a **scenario-based financial counseling simulation**, rather than a correct/incorrect quiz.

---

### 2. Split-View Workspace

The working interface uses a dashboard-style structure with:

- persistent navigation; and
- a dynamic information workspace.

This allows the player to review financial information while remaining inside the same counseling workflow.

---

### 3. Reusable Case Structure

The interface is designed around a reusable case structure.

Future cases may replace:

- storyline;
- financial data;
- evidence;
- diagnosis options;
- treatments; and
- consequences

without rebuilding the complete interaction structure.

For Week 5, however, the implementation priority remains:

> **Complete and test Case #01 before expanding to additional cases.**

---

# 7. Interface Ownership

| Owner | Role | Visible Contribution |
|---|---|---|
| **Bùi Lê Trà Giang** | UI/UX Designer & Dialogue Writer | Screen flows, wireframes, dialogue scripts, Canva concept, and Figma interface prototype |
| **Trương Vĩnh Thịnh** | Frontend & Integration Developer | Converts the approved interface into playable screens and connects UI states with financial data and game logic |
| **Lê Bảo Ngọc** | Game Engine & Logic Developer | Provides decision states, validation conditions, consequence rules, scoring, and outcome logic used by the interface |
| **Lâm Diệu Anh** | Financial Content Lead | Validates financial information, decision content, and user-facing financial explanations |
| **Nguyễn Phương Khuê** | Project Coordinator & Scenario Designer | Maintains consistency between scenario progression, dialogue, and the overall counseling flow |

---

# 8. Current Interface Status

| Evidence | Status | Link |
|---|---|---|
| Initial UI/UX Concept | ✅ Available | [Canva](https://www.canva.com/design/DAHUrjuo2iU/TwEgLcpHq5jNEXqZxAyq5Q/edit?ui=eyJBIjp7fX0) |
| Interactive Prototype | ✅ Available | [Figma](https://www.figma.com/proto/VtlhknTup0qQw5TX7OhloF/Medifin?node-id=1-14&p=f&t=Q6iSnSJUCTCF9sF1-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A8&starting-point-node-id=1%3A14) |
| Input Screen Design | ✅ Drafted | Figma Prototype |
| Output Screen Design | 🟡 Refinement | Figma Prototype |
| Error / Validation States | 🟡 Refinement | Frontend Integration |
| UI ↔ Game Logic Integration | 🟡 In Progress | Game Implementation |
| Complete Case #01 Flow | 🟡 In Progress | Game Implementation |

---

## Week 5 Interface Priority

The interface is considered ready for the next development stage when the player can:

> **Enter Case → Make Inputs → Receive Validation → Complete Decisions → Observe Consequences → Reassess → Understand Final Output**

without requiring additional explanation from the development team.# INTERFACE DRAFT

## MEDIFIN — Case #01: Toy Kingdom Inc.

> **Week 5 Product Refinement — Working Interface Evidence**

The current MEDIFIN interface has been developed from an initial visual concept into an **interactive Figma prototype** representing the core financial counseling flow.

---

## 1. Working Interface

### Design Draft

🎨 **[Canva — Initial UI/UX Concept](https://www.canva.com/design/DAHUrjuo2iU/TwEgLcpHq5jNEXqZxAyq5Q/edit?ui=eyJBIjp7fX0)**

The Canva draft represents the initial visual direction and screen concept of MEDIFIN.

### Interactive Prototype

🖥️ **[Figma — MEDIFIN Interactive Prototype](https://www.figma.com/proto/VtlhknTup0qQw5TX7OhloF/Medifin?node-id=1-14&p=f&t=Q6iSnSJUCTCF9sF1-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A8&starting-point-node-id=1%3A14)**

The Figma prototype demonstrates how the player moves through the main decision process rather than viewing the screens as isolated questions.

### Core Interface Flow

**Client Intake → Investigation → Diagnosis → Treatment → Execution → Consequence → Reassessment → Final Report**

The interface follows the **13-screen / 6-phase structure** defined in the Week 5 User Flow.

📄 **[View USER_FLOW.md](USER_FLOW.md)**

---

# 2. Input Screen Evidence

MEDIFIN is a decision-based simulation. Therefore, the interface must make each required player input clear before allowing the player to continue.

Key input screens include:

| Screen | Player Input | Interface Requirement |
|---|---|---|
| **Screen 2 — Diagnostic Files** | Select 3 of 7 files | Selected state + selection counter + Continue |
| **Screen 3 — Follow-Up Questions** | Select 2 questions | Selected state + selection limit |
| **Screen 5 — Final Diagnostic Question** | Select 1 question | Single selection |
| **Screen 6 — Diagnosis** | Identify relevant problems and select Primary Diagnosis | Clear primary selection |
| **Screen 7 — Treatment** | Select treatment strategy | Treatment options + trade-off information |
| **Screen 8 — Timing** | Select implementation timing | Timing options + risk information |
| **Screen 9 — Stakeholder Priorities** | Select 3 priorities | Selection counter + validation |
| **Screen 11 — Reassessment** | Keep or revise previous judgment | Previous decision + new evidence + reassessment action |

### Input Design Pattern

Each decision screen follows:

> **Instruction → Information → Choice → Selection State → Continue**

The player should always understand:

- what decision must be made;
- what information is available;
- what has already been selected; and
- what action continues the case.

---

# 3. Output Screen Evidence

The interface does not only collect decisions. It must also clearly communicate the result produced by the game logic.

Two screens are especially important.

## Screen 10 — Consequence

Screen 10 presents the developments resulting from the player's previous decisions.

The displayed consequence depends on:

> **Treatment + Timing + Stakeholder Priorities + Case Conditions**

Possible developments include:

- Sales
- Liquidity
- Debt / Refinancing
- Suppliers
- Stores
- Digital investment
- Governance / Board

The purpose of this screen is **not to immediately tell the player whether the decision was correct or incorrect**.

Instead, it provides new evidence that the player must interpret before reassessment.

**Output → New Evidence → Reassessment**

---

## Screen 12 — Counselor Case Report

The final interface provides two separate outputs.

### A. Counselor Performance

The player's decision-making process is evaluated across:

- Investigation
- Diagnosis
- Treatment
- Execution Planning
- Reassessment
- **Overall Counselor Score**

### B. Case Outcome

The simulated company outcome reports:

- Financial Resilience
- Governance Stability
- Final Ending

The interface keeps:

> **Decision Quality ≠ Company Outcome**

A strong reasoning process does not automatically guarantee the best simulated company outcome.

### Explanation Pattern

Final feedback follows:

> **Result → Reason → Meaning → Action → Limit**

This ensures that the player receives an explanation rather than an unexplained score.

### Next Action

The final screen provides clear next actions:

> **[REVIEW DECISION PATH]**

or

> **[REPLAY CASE]**

---

# 4. Error & Validation Evidence

The interface prevents incomplete or invalid decisions from silently entering the game logic.

| Screen | Invalid State | Error Message |
|---|---|---|
| **2 — Diagnostic Files** | Selection ≠ 3 | `Select exactly 3 Diagnostic Files to continue.` |
| **3 — Follow-Up Questions** | Selection ≠ 2 | `Select exactly 2 Follow-Up Questions to continue.` |
| **5 — Final Question** | No selection | `Select one final question before continuing.` |
| **6 — Diagnosis** | No Primary Diagnosis | `Select a Primary Diagnosis before submitting your diagnosis.` |
| **7 — Treatment** | No treatment selected | `Select a treatment strategy to continue.` |
| **8 — Timing** | No timing selected | `Select an implementation timing.` |
| **9 — Stakeholders** | Selection ≠ 3 | `Select exactly 3 stakeholder priorities.` |
| **11 — Reassessment** | Revised decision incomplete | `Complete your revised decision before closing the case.` |

### Error Handling Pattern

> **Invalid Input → Clear Message → Correct Input → Continue**

Error messages should tell the player **what needs to be corrected**, rather than displaying a generic error.

---

# 5. Interface → Logic Connection

The interface represents the user-facing layer of MEDIFIN.

The financial reasoning, scoring, and consequence rules are documented separately so that every important interface action can be traced back to the approved product logic.

| Interface Element | Logic Source |
|---|---|
| **13-Screen User Journey** | [USER_FLOW.md](USER_FLOW.md) |
| **Overall Decision Chain** | [PROJECT_LOGIC_CHAIN.md](../WEEK%204/PROJECT_LOGIC_CHAIN.md) |
| **Investigation & Diagnosis Logic** | [DECISION_RULES_AND_SCORING.md](../WEEK%204/DECISION_RULES_AND_SCORING.md) |
| **Treatment & Execution Logic** | [DECISION_RULES_AND_SCORING.md](../WEEK%204/DECISION_RULES_AND_SCORING.md) |
| **Consequence & Reassessment Logic** | [PROJECT_LOGIC_CHAIN.md](../WEEK%204/PROJECT_LOGIC_CHAIN.md) |
| **Expected Final Result** | [EXPECTED_RESULT_AND_LOGIC_TEST.md](../WEEK%204/EXPECTED_RESULT_AND_LOGIC_TEST.md) |

Therefore:

> **Interface = What the player sees and does**

> **Logic = How MEDIFIN evaluates the decision and generates the result**

This separation makes the product easier to test and prevents interface design from changing the underlying financial logic.

---

# 6. Interface Design Decisions

The prototype currently applies three main interface decisions.

### 1. Decision-Based Interactive Flow

The interface was refined from a collection of static screens into a connected decision flow.

Instead of presenting independent questions, player decisions form a continuous counseling process:

> **Situation → Investigation → Diagnosis → Treatment → Consequence → Reassessment → Explanation**

This makes MEDIFIN a **scenario-based financial counseling simulation**, rather than a correct/incorrect quiz.

---

### 2. Split-View Workspace

The working interface uses a dashboard-style structure with:

- persistent navigation; and
- a dynamic information workspace.

This allows the player to review financial information while remaining inside the same counseling workflow.

---

### 3. Reusable Case Structure

The interface is designed around a reusable case structure.

Future cases may replace:

- storyline;
- financial data;
- evidence;
- diagnosis options;
- treatments; and
- consequences

without rebuilding the complete interaction structure.

For Week 5, however, the implementation priority remains:

> **Complete and test Case #01 before expanding to additional cases.**

---

# 7. Interface Ownership

| Owner | Role | Visible Contribution |
|---|---|---|
| **Bùi Lê Trà Giang** | UI/UX Designer & Dialogue Writer | Screen flows, wireframes, dialogue scripts, Canva concept, and Figma interface prototype |
| **Trương Vĩnh Thịnh** | Frontend & Integration Developer | Converts the approved interface into playable screens and connects UI states with financial data and game logic |
| **Lê Bảo Ngọc** | Game Engine & Logic Developer | Provides decision states, validation conditions, consequence rules, scoring, and outcome logic used by the interface |
| **Lâm Diệu Anh** | Financial Content Lead | Validates financial information, decision content, and user-facing financial explanations |
| **Nguyễn Phương Khuê** | Project Coordinator & Scenario Designer | Maintains consistency between scenario progression, dialogue, and the overall counseling flow |

---

# 8. Current Interface Status

| Evidence | Status | Link |
|---|---|---|
| Initial UI/UX Concept | ✅ Available | [Canva](https://www.canva.com/design/DAHUrjuo2iU/TwEgLcpHq5jNEXqZxAyq5Q/edit?ui=eyJBIjp7fX0) |
| Interactive Prototype | ✅ Available | [Figma](https://www.figma.com/proto/VtlhknTup0qQw5TX7OhloF/Medifin?node-id=1-14&p=f&t=Q6iSnSJUCTCF9sF1-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A8&starting-point-node-id=1%3A14) |
| Input Screen Design | ✅ Drafted | Figma Prototype |
| Output Screen Design | 🟡 Refinement | Figma Prototype |
| Error / Validation States | 🟡 Refinement | Frontend Integration |
| UI ↔ Game Logic Integration | 🟡 In Progress | Game Implementation |
| Complete Case #01 Flow | 🟡 In Progress | Game Implementation |

---

## Week 5 Interface Priority

The interface is considered ready for the next development stage when the player can:

> **Enter Case → Make Inputs → Receive Validation → Complete Decisions → Observe Consequences → Reassess → Understand Final Output**

without requiring additional explanation from the development team.
