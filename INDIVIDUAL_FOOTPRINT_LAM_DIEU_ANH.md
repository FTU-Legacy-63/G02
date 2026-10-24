# MEDIFIN – Financial Clinic

## Individual Footprint & Contribution Report

| Information | Details |
|---|---|
| Student | Lâm Diệu Anh |
| Student ID | 2413380007 |
| Group | Group 02 – MEDIFIN |
| Assigned role | Financial Content Lead |
| Project | MEDIFIN – Financial Clinic (Case #01 – Toy Kingdom Inc.) |
| Play the final game | https://kirisakitrangngocbk-a11y.github.io/Medifin-v4/final.html |
| Evidence files | [`evidence/`](evidence/) folder (see section 9) |

## 1. My role in the project

MEDIFIN is a decision game for finance students. The player acts as a junior financial counselor. They look at the files of a struggling company, Toy Kingdom Inc. (based on the real case of Toys "R" Us), decide what its main financial problem is, choose a treatment, watch what happens, and then get a report on their decisions.

As Financial Content Lead, I was responsible for the **financial content** of the game. This had four parts:

1. **The financial numbers of the case.** I chose the source, converted it into the game, checked it, and put the numbers into the files, reports and character answers.
2. **The diagnosis and treatment content.** This includes 6 diagnoses, 6 treatments, 4 timing options and 7 stakeholder groups, and the financial reasons behind each choice.
3. **The Decision Set.** This is the scoring model that decides how good each player decision is.
4. **The financial feedback.** These are the messages the player reads in the final report.

### Who did what

This was a team project. The table below shows my part and the parts of my teammates.

| Area | Main owner | How my work connects |
|---|---|---|
| Scenario, family storyline, dialogue and story layer of the User Flow | Nguyễn Phương Khuê | I gave her the structure, numbers and rules to build the story on. She rewrote the dialogue in the final User Flow. |
| Screen design, Canva/Figma, dialogue | Bùi Lê Trà Giang | My content (numbers, questions, answers) goes into her screens. |
| Game engine and logic code | Lê Bảo Ngọc | My Decision Set gives the values, thresholds and formulas the engine follows. |
| Frontend and integration | Trương Vĩnh Thịnh | He used my Decision Set and numbers to check that the playable game matches the content. |
| **Financial numbers, diagnosis and treatment content, Decision Set, financial feedback** | **Lâm Diệu Anh** | **My main responsibility** |

**The final User Flow was made by Khuê and me together.** I built the structure: 13 screens, the choices on each screen, the financial data, the rules and the content edits. Khuê rewrote the dialogue and the story. That is why the final file is called "USER_FLOW bản chỉnh sửa (story)".

## 2. How the game works: the player's journey

The User Flow has 13 screens (Screen 0 to 12). The table shows what the player does on each screen and what financial content I added.

| Screen | What the player does | My financial content |
|---|---|---|
| 0 – Client file | Reads the company summary | Revenue $11.54bn, Adjusted EBITDA $792m, Operating Earnings $460m, Net Loss −$36m |
| 1 – Clinic | Listens to the CEO | The CEO's story points towards "the market" so that players must check the files before believing it |
| 2 – Diagnosis files | Picks 3 of 7 files (HS-A to HS-G). The other 4 are closed for good. | The numbers in each file: sales, stores, liquidity, capital structure, products, management record, governance |
| 3 – Extra questions | Picks 2 of 7 questions | Short answers. Asking about a file you already opened gives almost no new information. |
| 4 – Financial statements | Reads the full income statement, ratios and balance sheet | 3-year income statement, operating ratios, balance sheet snapshot |
| 5 – Final question | Picks 1 of 7 questions | A question that shows which idea the player is leaning towards |
| 6 – Diagnosis | Picks 1 of 6 diagnoses (CD-A to CD-F) | Six diagnoses at different levels of the same problem, with no "right" or "wrong" label |
| 7 – Treatment | Picks 1 of 6 treatments (PD-A to PD-F) | Conditions, trade-offs and risks of each treatment |
| 8 – Timing | Picks 1 of 4 timing options | Each option has its own risk. None is neutral. |
| 9 – Preparation | Picks 3 of 7 groups to deal with first | What each group wants and what it costs to put them first |
| 10 – What happens next | Reads 7 news updates | The updates depend on treatment, timing and groups chosen |
| 11 – Re-examination | Keeps or changes diagnosis and treatment | Changing with new data costs nothing. Changing without new data costs 1 Credibility point. |
| 12 – Case closed | Gets the ending and the report | Scoring rules, 3×3 ending table, comparison with what really happened to Toys "R" Us |

The game follows **three scores** from start to finish: **Credibility** (Low, Medium, High), **Financial Resilience** (Stable, Fragile, Collapsed) and **Governance Stability** (United, Divided, Out of control).

### 2.1. Seven content edits in the final User Flow

The final User Flow keeps the same 13 screens, the same number of choices, the same codes and the same formulas. We only changed wording and added content to existing tables. These were the seven edits:

| # | Where | What changed | Why |
|---|---|---|---|
| 1 | Screen 3, CH1-G | The answer now only says there is a conditional deal that may affect ownership. The details are left to file HS-G. | An extra question should not give away what a full file contains. |
| 2 | Screen 8, title and TG-C | The title is now "Timing & Order of Action". TG-C is "Try refinancing before committing to the plan". | TG-C is an order of action, not a point in time like the other three options. |
| 3 | Screen 6, names of the 6 diagnoses | Renamed as 6 levels of one problem (for example "Competitive Pressure" and "Structural Driver"), plus an explanation paragraph. | To remove the hidden right-or-wrong idea. |
| 4 | Screen 10 | Added 4 events that directly challenge CD-A, CD-B, CD-C and CD-E. | A player who picked the wrong level needs enough new data to rethink at Screen 11. |
| 5 | Screen 10 | Added 3 visible results for Employees, Customers and Landlords. | These 3 groups had no visible effect before. |
| 6 | Screen 7, PD-A and PD-F | Added the system message shown when the plan is cut down to PD-B. | The game should not quietly run a different plan from the one the player chose. |
| 7 | Screen 12 | Threshold for "Stable" changed from 5 or more to 4 or more, with a note for the Game Logic team. | The highest possible score is +4, so 5 could never be reached. |

## 3. The financial numbers in the game

### 3.1. Source and conversion

The numbers come from the real case of Toys "R" Us (fiscal year 2016). I kept the financial values the same and moved the dates ten years forward so the game does not point to real events: FY2014–FY2016 became FY2024–FY2026, cash flow years 2002–2004 became 2012–2014, and the 2005 leveraged buyout became "the 2015 deal". The company name, the Anderson family (78%) and the investment fund (22%), and the family conflict were added by our team as fiction.

### 3.2. Income statement (USD million)

| Item | FY2024 | FY2025 | FY2026 |
|---|---:|---:|---:|
| Net Sales | 12,361 | 11,802 | 11,540 |
| Gross Margin | 4,430 | 4,226 | 4,108 |
| SG&A | (3,915) | (3,593) | (3,480) |
| Other Income, net | 53 | 88 | 149 |
| Operating Earnings | 191 | 378 | 460 |
| Interest Expense | (451) | (429) | (457) |
| Earnings before tax | (256) | (48) | 5 |
| Net Loss attributable | (292) | (130) | (36) |
| Adjusted EBITDA | 642 | 800 | 792 |
| Consolidated same-store sales | 0.0% | +0.9% | −1.4% |

Balance sheet, FY2026: Cash $566m. Receivables $255m. Inventory $2.476bn. Total current assets $3.389bn. Property & equipment $3.067bn. Total debt about $4.8bn, of which about $3.4bn is secured. Stockholders' deficit about $1.3bn.

### 3.3. Ratios I calculated and why they matter

First I checked that the numbers add up. Gross margin: 4,108 / 11,540 = 35.6%. SG&A to sales: 3,480 / 11,540 = 30.2%. Operating earnings: 4,108 − 3,480 − 317 + 149 = 460. Net loss: 5 − 34 − 7 = −36.

Then I built the ratios that the diagnosis depends on:

| Ratio | Calculation | Result | What it tells the player |
|---|---|---:|---|
| Interest cover | Operating Earnings / Interest = 460 / 457 | 1.01x | Almost all operating profit goes to interest |
| Interest to EBITDA | 457 / 792 | 57.7% | More than half of EBITDA pays for debt |
| Leverage | Debt 4,800 / EBITDA 792 | about 6.1x | Debt is very heavy for this level of earnings |
| Quality of earnings | (460 − 149) / 457 | 0.68x | Without the one-off Other Income of 149, core profit does not cover interest |
| Secured debt share | 3.4 / 4.8 | about 71% | Little room to borrow more |
| Inventory share of current assets | 2,476 / 3,389 | about 73% | Liquidity depends on the holiday season |
| Cash flow before the deal | Average operating cash flow 2012–2014 | about $707m | Before the big debt, the business made far more cash |

These numbers create a puzzle that the player must find alone: operating earnings rose from 191 to 460 and EBITDA rose 23% since FY2024, but the company still makes a net loss, because interest takes almost all of the profit. The screen does not say "this is a puzzle". The player has to connect the numbers.

### 3.4. How the numbers changed across versions

The first version I wrote was Case #01 "Leverage Kills a Healthy Patient" (Toys "R" Us). I then changed it step by step through the gameplay flow drafts and the User Flow until it became the final Toy Kingdom version. The table compares the main differences.

| Item | Early gameplay flow (FULLDATA) | Case #01 (Toys "R" Us) | User Flow, original and final (Toy Kingdom) |
|---|---|---|---|
| Name and years | Toys "R" Us, FY2013–FY2016 | Toys "R" Us, FY2014–FY2016 | Toy Kingdom, FY2024–FY2026 |
| Net loss in first year of the series | −76 (FY2014) | −292 (FY2014) | −292 (FY2024) |
| Gross margin | ~33–34% (estimate) | 35.6% | 35.6% |
| Interest expense, latest year | ~400–426 | 457 | 457 |
| Same-store sales, prior year | −0.9% (estimate) | +0.9% | +0.9% |
| Number of stores | ~1,600 | ~1,700 | ~1,700 |
| Owners | KKR, Bain, Vornado (2005 buyout) | Private company, $6.6bn buyout in 2005 | Anderson family 78%, fund 22%, deal in 2015 |
| Number of screens | 9 (Screen 0–8) | 12 (Screen 0–11) | 13 (Screen 0–12) |
| Files / tests | Pick 3 of 6 | Pick 3 of 6 | Pick 3 of 7, plus extra questions and a final question |
| Diagnoses / treatments | 3 / 4 | 6 / 6, plus timing and stakeholders | 6 / 6, plus timing, stakeholders and re-examination |
| Scoring | Hidden success probabilities in JSON | No score, only epilogues | 3 scores, a 3×3 ending table and scores out of 100 |

Two points stand out. The estimates in the early draft (gross margin, same-store sales, interest) and the first-year net loss were replaced by numbers that match the financial statements. The family and Houndstooth storyline is fiction we added in the User Flow. It is not part of the original numbers.

## 4. The Decision Set

### 4.1. What it is

The Decision Set is an Excel workbook. It holds the content sheets for each screen (S2 to S11), 9 decision matrices (M1 to M9), and the Config, Scorecard, Comparison, Endings and Feedback sheets. One extra sheet, DECISION_MATRIX, puts all matrices in one place. Blue cells are numbers that can be changed. Black cells are formulas. When I change a number, every score updates by itself, so the team can test the balance of the game quickly.

| Matrix | What it combines | What it does |
|---|---|---|
| M1 | Files × Extra questions | Asking about an opened file gives 1 point. Asking about an unopened area gives 2 to 6 points. |
| M2 | Files × Final question | Rewards a final question that adds real information (up to 10 for HS-G × CH2-G) |
| M3 | Diagnosis × Files | How much evidence a file gives for a diagnosis (25 when the file matches the diagnosis) |
| M4 | Diagnosis × Treatment | How well the treatment fits, 0 to 100 |
| M5 | Treatment × Timing | How well the plan is carried out, 0 to 100 |
| M6 | Treatment × Stakeholder groups | Value of putting each group first |
| M7 | Treatment × Timing | Base Financial Resilience score |
| M8, M9 | Treatment × Groups | Financial score when a group is, or is not, put first |

### 4.2. Design principles

**There is no right or wrong answer.** The 6 diagnoses are 6 levels of one problem. CD-A (Competition), CD-B (Operations), CD-C (Liquidity) and CD-E (Product Category) are symptoms or surface effects. CD-D (Structural Driver) is the deepest level. CD-F (Multi-Factor) is the widest, but it needs the most evidence. I used CD-D as the **reference point for scoring the treatment**. This does not mean the other five are "wrong". A higher score comes from reaching the deeper level, not from guessing an answer key.

**No treatment wins on every score.** For example, in M7, Deep Cost Cutting (PD-B) gives +3 when done at once, which is good for cash. Combined Restructuring (PD-F) gives +4 but needs High Credibility and has the highest risk of failing in execution. Bankruptcy Restructuring (PD-E) deals with debt most fully, but it gives only +1 if Suppliers are put first, and −2 if not.

**Missing evidence does not block the game.** The cost shows up in the Investigation score and in the events on Screen 10. The player learns from the result instead of being stopped.

### 4.3. Scoring rules

- **Financial score** = M7 (treatment × timing) + M8/M9 (groups). Stable at 4 or more. Fragile from 1 to 3. Collapsed at 0 or below.
- **Governance score** = +1 for opening HS-G, +2 for putting Governance & Family first (−1 if not), −1 each time Credibility is lost at Screen 11, −2 if the financial result collapses, −1 for choosing Asset Sale (PD-D) without opening HS-E. United at 3 or more. Divided from 0 to 2. Out of control below 0.
- **Credibility** starts at 2 (Medium). It goes up 1 for a diagnosis with evidence behind it and 1 for good investigation. It goes down 1 for choosing CD-F without enough evidence, 1 if the try-refinancing option fails, and 1 for each change made without new data. Credibility does not change the ending box. It changes how the player is described. It is also a condition for unlocking PD-A (Medium or higher) and PD-F (High).

### 4.4. Key design decisions

- **Changed the Stable threshold from 5 to 4.** When I checked the scoring table, I found that the highest possible score is +4 (PD-F with High Credibility). A threshold of 5 would mean the top row of the ending table could never happen. I set it to 4 and wrote the reason in the Config sheet and in the Screen 12 note for the Game Logic team, so that no scoring formula had to change.
- **Reorganised the 6 diagnoses** into 6 levels of one problem, to remove any hidden right-or-wrong idea.
- **Added 7 more events on Screen 10:** 4 events that challenge a wrong diagnosis (CD-A, B, C, E) and 3 results for Employees, Customers and Landlords. A player who chose a wrong level now sees enough new data to think again at Screen 11.
- **Marked every assumption** (starting Credibility, reward and penalty sizes, the groups GR-1 to GR-7) in the README and Config sheets, so the team can confirm them and nothing is hidden inside a formula.

### 4.5. Versions of the Decision Set

| Version | What it contains |
|---|---|
| MEDIFIN_Case01_Decision_Set (saved 28 Sep 2026) | First version, built for an earlier idea of the case about too much inventory and dividends (7 files, 8 diagnoses, 7 treatments, 5 timing options) |
| MEDIFIN_Decision_Set_02 (29 Sep 2026) | Moved to Toy Kingdom: 6 diagnoses, 6 treatments, 4 timing options, family and Houndstooth added. It showed that a threshold of 5 cannot be reached. |
| MEDIFIN_Decision_Set_03 (30 Sep 2026) | Third round of improvements to the matrices and questions |
| MEDIFIN_Decision_Set_final (4 Oct 2026) | Matches the final User Flow: 6 levels of diagnosis, 14 events on Screen 10, threshold of 4, full feedback |

## 5. What the player gets at the end

At the end of the case the player receives a **Counselor Case Report** with two separate results. The main idea is: *a good decision is not the same as a good company outcome.*

### 5.1. Counselor Performance (score out of 100)

| Skill | Weight | How it is calculated |
|---|---:|---|
| Investigation | 20% | Points from files, questions and combinations, divided by the maximum possible (61 points) |
| Diagnosis | 25% | Main diagnosis (up to 60) plus evidence behind it from M3 (up to 40) |
| Treatment | 20% | 60% fit with the root cause, 40% fit with the player's own diagnosis |
| Execution | 20% | 50% timing (M5) plus 50% groups chosen (M6) |
| Reassessment | 15% | 70% quality of the re-examination decision, 30% quality of the final judgement, minus 10 points for each change made without evidence |

### 5.2. Case Outcome (3×3 ending table)

The ending is where the Financial result and the Governance result meet, which gives 9 possible endings, for example "The Successor", "Conditional Truce", "Holding On Together", "The Fund's Pawn" and "Total Collapse". The last screen also shows a summary of everything the player chose and compares the result with what really happened: Toys "R" Us filed for Chapter 11 in 2017 and its US business was wound down in 2018.

### 5.3. Feedback

Each of the 5 skills has 3 levels (High 80 or more, Mid 50 or more, Low), and each message follows the same order: **Result, Reason, Meaning, Action, Limit.** That gives 15 messages. The last part, Limit, always tells the player what the model cannot judge (for example, "the 6 diagnoses are 6 levels, not right or wrong"). This keeps the feedback educational and not harsh.

### 5.4. Example

A player opens HS-D, HS-C and HS-G, chooses CD-D, picks PD-F with timing TG-B (after the holiday season), and puts Creditors, Governance & Family and Holiday Inventory first:

- Treatment fit: M4 (CD-D × PD-F) = 90.
- Timing: M5 (PD-F × TG-B) = 80. Base financial score from M7 = +4.
- Governance: +1 (opened HS-G) and +2 (put Governance & Family first) = +3, which is United as long as no Credibility is lost on Screen 11.
- PD-F needs High Credibility. If Credibility is too low, the plan is cut down to PD-B and the PD-B score is used.

The M8 and M9 points then adjust the final financial score.

## 6. How I worked, including my use of AI

I used ChatGPT as a helper for drafting tables, building the Excel workbook and trying out ideas. I made the financial decisions and checked the numbers myself. My steps were:

1. **Choose the source.** I used the real Toys "R" Us case (FY2016) as the base.
2. **Check the numbers.** I recalculated gross margin, SG&A to sales, operating earnings and net loss to make sure everything fits together before it went into the User Flow.
3. **Find and fix problems.** I replaced estimates in the early drafts with numbers that match the financial statements, and I found that a Stable threshold of 5 could not be reached.
4. **Enter the numbers in the User Flow and Decision Set.** Once a number was confirmed, I put it into the User Flow and then updated the matching sheets in the Decision Set.
5. **Check with the team.** I shared the Decision Set with Ngọc and Thịnh so the game matched the content, and updated it after their feedback. Khuê then rewrote the dialogue on top of the User Flow.

The Excel workbooks were exported with a Python library (openpyxl) from settings that I confirmed together with the AI tool.

## 7. Problems and how I solved them

| Problem | What I did |
|---|---|
| Real company data has no "answer key" for a game | I designed 6 diagnoses as levels of one problem and used CD-D only as the scoring reference point, not as a right-or-wrong label |
| The scoring threshold could not be reached | I checked the highest possible score, set the threshold to 4 and wrote the reason down |
| A player who picks a wrong diagnosis has no reason to change it | I added 4 events on Screen 10 that challenge each wrong level |
| The hidden governance secret had to be fair | I linked the HS-G content to the Governance score (+1 for opening it) and to the events on Screen 10 |
| Many versions of the data between teammates | I used the README as a map from sheets to screens and listed every assumption for the team to confirm |

## 8. What I learned

I learned that financial data only becomes a lesson when it is turned into choices with trade-offs. I learned to tell a symptom from a cause: operating earnings went up, but interest took almost all of it. I learned to test a scoring model, because a threshold of 5 looked fine until I checked the highest possible score. I also learned to write down every assumption so the whole team can check it. And I learned that my content has to be clear enough for Giang to put on screen, for Ngọc to put in the engine and for Thịnh to connect to the game.

## 9. Evidence

All files below are my working files for this project. They are in the [`evidence/`](evidence/) folder next to this report. Word and Excel files are included in their original format and as a PDF copy, so they can be read without Office. The Excel PDFs are long because every sheet is printed.

| # | File | What it shows |
|---|---|---|
| 1 | [Final game](https://kirisakitrangngocbk-a11y.github.io/Medifin-v4/final.html) | The playable game that uses the final content |
| 2 | [Case #01 draft v1 (Word)](evidence/02_CASE01_draft_v1.docx) · [PDF](evidence/02_CASE01_draft_v1.pdf) | First draft of Case #01 "Leverage Kills a Healthy Patient" (Toys "R" Us): 6 files (pick 3), 6 diagnoses, 6 treatments. Last saved 8 Sep 2026. Original name: CASE__01___ĐÒN_BẨY_GIẾT_NGƯỜI_KHỎE_MẠNH.docx |
| 3 | [Case #01 draft v2 (Word)](evidence/03_CASE01_draft_v2.docx) · [PDF](evidence/03_CASE01_draft_v2.pdf) | Second version of the case. Last saved 8 Sep 2026. Original name: CASE_01_v2_ĐÒN_BẨY_GIẾT_NGƯỜI_KHỎE_MẠNH.docx |
| 4 | [Case #01 draft v1 (Markdown)](evidence/04_CASE01_draft_v1.md) | Text copy of the first case draft. Original name: CASE__01___ĐÒN_BẨY_GIẾT_NGƯỜI_KHỎE_MẠNH.md |
| 5 | [Gameplay flow FULLDATA](evidence/05_GAMEPLAY_FLOW_FULLDATA.md) | Early gameplay flow with full real data, 4 treatments and hidden success probabilities. Original name: CASE01_TOYSRUS_GAMEPLAY_FLOW_FULLDATA.md |
| 6 | [Gameplay flow v2, no spoilers](evidence/06_GAMEPLAY_FLOW_v2_no_spoilers.md) | Second version of the gameplay flow, written without spoilers for the player. Original name: GAMEPLAY_FLOW_v2_no_spoilers.md |
| 7 | [User Flow, original (Word)](evidence/07_USER_FLOW_original.docx) · [PDF](evidence/07_USER_FLOW_original.pdf) | Original User Flow for Toy Kingdom: 13 screens, the family storyline, financial data and scoring rules. Original name: USER_FLOW_GỐC.docx |
| 8 | [User Flow, final with story (Word)](evidence/08_USER_FLOW_final_story.docx) · [PDF](evidence/08_USER_FLOW_final_story.pdf) | Final User Flow: the 7 content edits and the new dialogue by Khuê. Original name: USER_FLOW_ban_chinh_sua__story_.docx |
| 9 | [Decision Set v1 (Excel)](evidence/09_Decision_Set_v1.xlsx) · [PDF](evidence/09_Decision_Set_v1.pdf) | First Decision Set (28 Sep 2026). Original name: MEDIFIN_Case01_Decision_Set.xlsx |
| 10 | [Decision Set 02 (Excel)](evidence/10_Decision_Set_02.xlsx) · [PDF](evidence/10_Decision_Set_02.pdf) | Second Decision Set (29 Sep 2026), moved to Toy Kingdom. Original name: MEDIFIN_Decision_Set_02.xlsx |
| 11 | [Decision Set 03 (Excel)](evidence/11_Decision_Set_03.xlsx) · [PDF](evidence/11_Decision_Set_03.pdf) | Third Decision Set (30 Sep 2026). Original name: MEDIFIN_Decision_Set_03.xlsx |
| 12 | [Decision Set final (Excel)](evidence/12_Decision_Set_final.xlsx) · [PDF](evidence/12_Decision_Set_final.pdf) | Final Decision Set (4 Oct 2026), 25 sheets, matches the final User Flow. Original name: MEDIFIN_Decision_Set_final.xlsx |

The saved dates come from each file's own properties. In the Excel files and the first two Word files, the last person to save is listed as "Lam Dieu Anh". Files 2 and 3 and files 9 to 12 show how the case and the scoring model changed over time.

**Contribution statement.** This report describes my own contribution to the financial content of MEDIFIN. The scenario and dialogue, screen design, game engine and frontend belong to the teammates named in section 1.

Lâm Diệu Anh
Financial Content Lead
MEDIFIN – Financial Clinic | Group 02
