# MEDIFIN — PROJECT PROPOSAL

## 1. Problem Direction

Finance and Banking students learn financial concepts, ratios, and analytical methods in class, but have limited opportunities to practice **decision-making when the problem is not clearly identified and information is incomplete**.

In real financial situations, several problems may exist at the same time. A financial counselor must be able to:

- select relevant information;
- distinguish between **symptoms, contributing problems, and primary causes**;
- make evidence-based recommendations;
- understand the trade-offs and consequences of each decision.

### Core Problem

> **Finance students lack a practical environment to apply financial knowledge to investigating, diagnosing, and responding to real-world financial problems.**

---

## 2. Target User and User Task

### Target User

**Finance and Banking students with basic financial knowledge.**

### Core User Task

The player acts as a **Junior Financial Counselor** and follows the decision process:

> **Investigate → Diagnose → Treat → Observe Consequences → Reassess**

The player is not given the root cause in advance. Instead, they must select and analyze financial evidence before making a decision.

---

## 3. Desired User Outcome

After completing the case, the player should be better able to:

- select and analyze relevant financial evidence;
- identify the **primary financial constraint**;
- make evidence-based recommendations;
- understand the trade-offs of different treatments;
- reassess a decision when new information becomes available.

> **The goal is to develop financial reasoning and decision-making skills, rather than simply test financial calculations.**

---

## 4. Product Statement

**MEDIFIN — Financial Clinic** is a **scenario-based financial counseling simulation**.

The player acts as a “financial doctor” who investigates a company's financial condition, identifies its primary financial problem, recommends an appropriate treatment, and observes the consequences of that decision.

### Current MVP

> **Case #01 — Toy Kingdom Inc.**

Toy Kingdom is a retail company facing multiple pressures, including competition, liquidity constraints, reinvestment needs, and a heavy financial burden.

The player must answer the central question:

> **What is the company's primary financial problem, and what should be done about it?**

---

## 5. Main Output

At the end of the case, the player receives a **Counselor Case Report**, including:

- Counselor Performance;
- Financial Resilience;
- Governance Stability;
- Final Case Outcome;
- Decision Feedback.

The feedback explains **what the player did, why the result occurred, and how their financial reasoning could be improved**.

---

## 6. Product Pattern

> **Scenario-Based Decision Simulation**

```text
Situation
↓
Investigation
↓
Diagnosis
↓
Treatment & Execution
↓
Consequence
↓
Reassessment
↓
Learning Feedback
```

Rather than answering independent questions, the player moves through a connected financial decision process in which earlier choices affect later consequences and feedback.

---

## 7. Feasibility and Open Questions

### Feasibility

MEDIFIN is feasible as a **web-based scenario simulation** because the MVP focuses on one complete case using predefined financial data and rule-based decision logic.

The project does not require real-time data, complex AI, or 3D development.

The current development route is:

> **Financial Case Data → Decision Logic → Game Engine → Frontend → Browser**

### Open Questions

The team will continue to refine:

1. How much financial information should be shown without overwhelming the player?
2. How should consequence rules balance financial realism and simplicity?
3. How much controlled variation should be added to improve replayability?
4. Which supporting features should be added after Case #01 is fully playable?

> These questions may be refined during development without changing MEDIFIN's core product direction.
