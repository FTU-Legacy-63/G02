# MEDIFIN — SOLUTION STRUCTURE

## 1. User → Input → Process → Output → User Action

MEDIFIN follows one connected product chain:

> **Finance Student → Financial Case & Evidence → Investigate & Decide → Counselor Case Report → Review & Improve**

| Stage | Description |
|---|---|
| **User** | Finance and Banking student with basic financial knowledge |
| **Input** | Client scenario, financial data, diagnostic files, and decision options |
| **Process** | Investigate → Diagnose → Treat → Execute → Observe Consequences → Reassess |
| **Output** | Counselor Case Report with decision quality, case outcome, and feedback |
| **User Action** | Review the decision path, learn from feedback, or replay the case |

---

## 2. Initial Required Information

Each MEDIFIN case requires four main information groups:

### A. Client & Scenario Information

- Company background
- Presenting financial problem
- Business context and constraints

### B. Financial Information

- Financial statements
- Operating indicators
- Liquidity and debt information
- Other case-specific financial evidence

### C. Investigation Evidence

Information is divided into selectable sources such as:

- Diagnostic Files
- Follow-Up Questions
- Financial Statements
- Final Diagnostic Question

The player cannot access every piece of information at the beginning, making **evidence selection part of the decision process**.

### D. Decision Set

The case requires decisions on:

- Diagnosis
- Treatment
- Implementation Timing
- Stakeholder Priorities
- Reassessment

---

## 3. Core Process Type

### Product Pattern

> **Scenario-Based Decision Simulation**

### Core Process

```text
CLIENT SITUATION
↓
INVESTIGATE
↓
ANALYZE EVIDENCE
↓
DIAGNOSE
↓
TREAT & PLAN EXECUTION
↓
OBSERVE CONSEQUENCES
↓
REASSESS
↓
LEARN
```

The game does not simply evaluate whether an answer is correct or incorrect.

Instead, it evaluates how the player **uses evidence, makes financial decisions, responds to trade-offs, and updates judgment when new information appears**.

---

## 4. MVP Flow

### Case #01 — Toy Kingdom Inc.

The current MVP is one complete corporate financial counseling case.

Toy Kingdom is a retail company facing several simultaneous pressures, including competition, liquidity constraints, reinvestment needs, and a heavy financial burden.

The player must determine:

> **What is the company's primary financial problem, and what should be done about it?**

### MVP Flow

The case contains **13 screens organized into 6 phases**:

| Phase | Screens | Main Task |
|---|---:|---|
| **1. Client Intake & Investigation** | 0–5 | Understand the case and collect financial evidence |
| **2. Diagnosis** | 6 | Identify the primary financial problem |
| **3. Treatment & Execution Planning** | 7–9 | Select treatment, timing, and stakeholder priorities |
| **4. Consequence** | 10 | Observe developments resulting from the decisions |
| **5. Reassessment** | 11 | Keep or revise professional judgment |
| **6. Final Assessment** | 12 | Receive the Counselor Case Report |

---

## 5. Target / Fallback / Out of Scope

### MVP Scope

> **1 complete playable case — Toy Kingdom Inc.**

The priority is to demonstrate that the full financial counseling loop works from investigation to final feedback.

### Target Scope

After Case #01 is complete and stable, MEDIFIN may expand to additional financial counseling cases using the same core structure.

### Fallback Scope

If development time is limited:

> **Complete and polish Case #01 without optional replay or visual features.**

The core decision process will not be removed.

### Out of Scope

The current project does not include:

- Multiplayer
- Real-time financial market data
- AI-generated scenarios
- Open-ended AI chatbot
- 3D / Open World
- Voice interaction
- Real-money transactions

---

## 6. Initial Route Hypothesis

### Product Route

> **Code-Based Web Simulation**

The current development route is:

```text
Financial Case Data
↓
Decision & Scoring Logic
↓
Game Engine
↓
Frontend Interface
↓
Browser
```

The interface is designed through Canva/Figma and implemented as an interactive browser-based experience.

---

## 7. Responsibility by Output

| Member | Role | Main Output / Responsibility |
|---|---|---|
| **Nguyễn Phương Khuê** | Project Coordinator & Scenario Designer | Scenario structure, storyline, and case progression |
| **Trương Vĩnh Thịnh** | Frontend & Integration Developer | Playable frontend and integration of interface, data, and game logic |
| **Lâm Diệu Anh** | Financial Content Lead | Financial data, evidence, diagnosis/treatment content, and financial feedback |
| **Bùi Lê Trà Giang** | UI/UX Designer & Dialogue Writer | Screen flow, UI/UX prototype, and dialogue |
| **Lê Bảo Ngọc** | Game Engine & Logic Developer | Decision rules, scoring, consequence logic, and main game engine |

---

## Solution Chain

The complete Week 2 solution structure can be summarized as:

> **User Task → Financial Evidence → Decision Process → Counselor Case Report → Learning & Reassessment**

This structure defines the current MEDIFIN product direction while later weeks provide the detailed information, logic, interface, and testing evidence.
