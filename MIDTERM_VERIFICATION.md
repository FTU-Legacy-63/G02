# MIDTERM VERIFICATION

## MEDIFIN — Case #01: Toy Kingdom Inc.

> **Project Readiness & Contribution Verification**

---

# A. GROUP VERIFICATION

## 1. What is the biggest issue your team still needs to solve before Week 6?

Our biggest unresolved issue is **finalizing the decision-to-outcome logic for different combinations of player choices**.

MEDIFIN does not follow a simple right/wrong structure. A treatment may be reasonable under one financial condition but create different trade-offs under another. Therefore, we still need to clearly define how the player's **diagnosis, treatment, timing, and stakeholder priorities** combine with the company's financial state to generate specific consequences and feedback.

---

## 2. Why is this issue important?

This logic connects the player's decisions to the **consequences, final case outcome, and learning feedback**.

If these relationships are not clearly defined and financially justified, the results may feel arbitrary. Players may not understand **why their decisions led to a particular outcome, what trade-offs they missed, or how they could improve their financial reasoning**.

Therefore, the decision-to-outcome logic needs to be both **consistent and financially explainable**.

---

## 3. What has your team done about this issue so far?

We have already developed the main **financial calculations, decision criteria, scoring framework, and expected-result logic** for Case #01.

We also established criteria for evaluating the quality and relevance of player decisions. However, because MEDIFIN is not based on one universally correct answer, assigning a fixed score or outcome to every individual option would oversimplify the financial trade-offs.

Therefore, the remaining challenge is not defining the available choices, but **mapping different combinations of choices and case conditions to reasonable consequences**.

---

## 4. What will your team do next about this issue?

We will build a **rule-based consequence matrix** that connects:

> **Case Financial State + Diagnosis + Treatment + Timing + Stakeholder Priorities → Consequences → Final Outcome & Feedback**

Instead of labeling each option as simply right or wrong, the matrix will define how a decision performs under different conditions and what trade-offs it creates.

We will then **test several representative decision paths** and ask a mentor with relevant financial experience to review whether the relationships and consequences are reasonable and realistic for an educational simulation.

This will allow us to finalize the decision logic before integrating it into the playable Week 6 build.

---

# B. MEMBER CONTRIBUTION VERIFICATION

## 1. Lâm Diệu Anh

### What did this member actually produce?

- Developed the **MVP idea and financial content** for the case.
- Prepared the **financial dataset and key financial indicators** used in the MVP.
- Developed the **basic decision set and raw MVP flow**.

### How is it used in the project?

- The financial dataset provides the evidence that players investigate and analyze.
- The decision set provides the financial choices used throughout the game.
- The raw MVP flow serves as a foundation for the finalized game structure.

### What can this member personally explain, calculate, demonstrate, or reproduce?

- Explain why the current case was selected as the MVP.
- Explain the **financial data, ratios, underlying meaning, logic, and data sources** used in the case.
- Explain how different financial choices may lead to different consequences and why.

---

## 2. Nguyễn Phương Khuê

### What did this member actually produce?

- Developed the **game idea and base concept**.
- Created the **scenario, storyline, and dialogues** integrated into the MVP flow.
- Contributed to finalizing the **game scope and reasoning flow**.

### How is it used in the project?

- The scenario and dialogues guide players through the counseling process.
- The finalized game scope defines what is included or excluded from the MVP.
- The reasoning flow provides the narrative structure connecting one decision to the next.

### What can this member personally explain, calculate, demonstrate, or reproduce?

- Explain the **game concept, MVP scope, and reasoning behind the overall flow**.
- Demonstrate how the scenario, storyline, and dialogues fit into the game.
- Explain why certain content was included or cut and how narrative branches lead to later decisions.

---

## 3. Trương Vĩnh Thịnh

### What did this member actually produce?

- Developed **Backend + Frontend Draft 1**, which provided a foundation for Draft 2.
- Built/refined the **Project Logic Chain, 13-screen / 6-phase flow, and scoring framework**.
- Consolidated group discussions into documentation, reviewed the core game logic, identified loopholes, and **finalized the Week 1–5 GitHub files as the main repository editor**.

### How is it used in the project?

- Provides the foundation for **frontend and game-logic integration**.
- Defines how player decisions move through **each phase, scoring, consequences, and final output**.
- Keeps the project logic, documentation, and GitHub evidence **consistent and traceable**.

### What can this member personally explain, calculate, demonstrate, or reproduce?

- Explain the **Project Logic Chain and 13-screen / 6-phase MVP flow**.
- Explain the **scoring structure and how player decisions connect to consequences and final outputs**.
- Demonstrate the draft implementation and explain how group discussions were converted into finalized, organized GitHub documentation.

---

## 4. Bùi Lê Trà Giang

### What did this member actually produce?

- Developed the initial **Figma interactive prototype**.
- Created the **Canva visual concept** defining MEDIFIN's UI direction.
- Developed **in-game dialogue flow, instructions, and user-facing explanations**.

### How is it used in the project?

- Provides the visual and interaction framework for the game.
- Guides players through each stage of the counseling process.
- Communicates context, objectives, and information needed for player decisions and progression.

### What can this member personally explain, calculate, demonstrate, or reproduce?

- Explain the **design rationale, visual hierarchy, layout, and interaction logic**.
- Demonstrate the Figma prototype and reproduce the core UI elements and interactions.
- Explain how dialogue and instructions communicate context and guide player actions.

---

## 5. Lê Bảo Ngọc

### What did this member actually produce?

- Developed the **Backend + Frontend code** and improved the frontend through testing.
- Developed the **game engine and scoring rules** connecting player decisions with scenario outcomes.
- Implemented **diagnosis logic, information-unlocking rules, state dependencies, and decision pathways**, and debugged inconsistencies in game outcomes.

### How is it used in the project?

- Serves as the **main code pathway for the playable MVP**.
- Converts player choices and scoring rules into actual game states and outcomes.
- Connects evidence collection, diagnosis, treatment, consequences, and final results.

### What can this member personally explain, calculate, demonstrate, or reproduce?

- Explain the current game flow from **evidence collection → diagnosis → treatment → consequence → final result**.
- Explain how player choices and scoring rules are translated into game logic and why **decision quality is separated from company outcome**.
- Demonstrate the current playable prototype and reproduce the core game-engine logic.
