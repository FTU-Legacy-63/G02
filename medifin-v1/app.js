const introScreen = document.getElementById("introScreen");
const interviewScreen = document.getElementById("interviewScreen");

const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");

const clientResponse = document.getElementById("clientResponse");
const pointsDisplay = document.getElementById("points");

const questionButtons = document.querySelectorAll(".question-button");

let investigationPoints = 6;


// START GAME
startButton.addEventListener("click", function () {

    introScreen.classList.add("hidden");

    interviewScreen.classList.remove("hidden");

});


// ASK CLIENT QUESTIONS
questionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const cost = Number(button.dataset.cost);

        const answer = button.dataset.answer;


        if (investigationPoints >= cost) {

            investigationPoints -= cost;

            pointsDisplay.textContent = investigationPoints;

            clientResponse.textContent = answer;

            button.disabled = true;

        }

        else {

            clientResponse.textContent =
                "Bạn không còn đủ Investigation Points để hỏi thêm.";

        }

    });

});
// =============================
// SCREEN 3 - FINANCIAL INVESTIGATION
// =============================

const investigationScreen = document.getElementById("investigationScreen");

const documentButtons = document.querySelectorAll(".document-button");

const reportContent = document.getElementById("reportContent");

const evidenceList = document.getElementById("evidenceList");

const evidenceCount = document.getElementById("evidenceCount");

const diagnosisButton = document.getElementById("diagnosisButton");


let collectedEvidence = [];


// MOVE FROM INTERVIEW TO INVESTIGATION
continueButton.addEventListener("click", function () {

    interviewScreen.classList.add("hidden");

    investigationScreen.classList.remove("hidden");

});


// FINANCIAL DOCUMENT DATA
const financialDocuments = {

    income: {

        title: "Income Statement",

        content: `
            <div class="report-title">
                <h3>Income Statement</h3>
                <span class="report-tag">VND Billion</span>
            </div>

            <table class="financial-table">

                <tr>
                    <th>Item</th>
                    <th>2025</th>
                    <th>2026</th>
                </tr>

                <tr>
                    <td>Revenue</td>
                    <td>40.0</td>
                    <td>54.0</td>
                </tr>

                <tr>
                    <td>COGS</td>
                    <td>29.0</td>
                    <td>40.0</td>
                </tr>

                <tr>
                    <td>Gross Profit</td>
                    <td>11.0</td>
                    <td>14.0</td>
                </tr>

                <tr>
                    <td>EBIT</td>
                    <td>4.0</td>
                    <td>5.2</td>
                </tr>

                <tr>
                    <td>Net Profit</td>
                    <td>2.6</td>
                    <td>3.1</td>
                </tr>

            </table>

            <div class="financial-warning">
                Revenue and net profit both increased in 2026.
            </div>
        `,

        evidence:
            "Revenue and profit are growing — low profitability may not be the root problem."

    },


    balance: {

        title: "Balance Sheet",

        content: `
            <div class="report-title">
                <h3>Balance Sheet</h3>
                <span class="report-tag">VND Billion</span>
            </div>

            <table class="financial-table">

                <tr>
                    <th>Item</th>
                    <th>2025</th>
                    <th>2026</th>
                </tr>

                <tr>
                    <td>Cash</td>
                    <td>3.2</td>
                    <td>1.1</td>
                </tr>

                <tr>
                    <td>Accounts Receivable</td>
                    <td>11.0</td>
                    <td>24.0</td>
                </tr>

                <tr>
                    <td>Inventory</td>
                    <td>8.0</td>
                    <td>12.0</td>
                </tr>

                <tr>
                    <td>Short-term Debt</td>
                    <td>5.0</td>
                    <td>13.0</td>
                </tr>

            </table>

            <div class="financial-warning">
                Cash is falling while receivables, inventory and short-term debt are rising.
            </div>
        `,

        evidence:
            "Cash ↓ while AR ↑, Inventory ↑ and Short-term Debt ↑."

    },


    cashflow: {

        title: "Cash Flow Statement",

        content: `
            <div class="report-title">
                <h3>Cash Flow Statement</h3>
                <span class="report-tag">VND Billion</span>
            </div>

            <table class="financial-table">

                <tr>
                    <th>Item</th>
                    <th>2025</th>
                    <th>2026</th>
                </tr>

                <tr>
                    <td>Net Profit</td>
                    <td>2.6</td>
                    <td>3.1</td>
                </tr>

                <tr>
                    <td>Increase in AR</td>
                    <td>-3.0</td>
                    <td>-13.0</td>
                </tr>

                <tr>
                    <td>Increase in Inventory</td>
                    <td>-1.0</td>
                    <td>-4.0</td>
                </tr>

                <tr>
                    <td>Operating Cash Flow</td>
                    <td>0.6</td>
                    <td>-12.9</td>
                </tr>

            </table>

            <div class="financial-warning">
                The company is profitable but operating cash flow has become strongly negative.
            </div>
        `,

        evidence:
            "Operating Cash Flow is negative despite positive Net Profit."

    },


    ar: {

        title: "Accounts Receivable Aging",

        content: `
            <div class="report-title">
                <h3>Accounts Receivable Aging</h3>
                <span class="report-tag">2026</span>
            </div>

            <table class="financial-table">

                <tr>
                    <th>Aging</th>
                    <th>Amount</th>
                </tr>

                <tr>
                    <td>0–30 days</td>
                    <td>4.0</td>
                </tr>

                <tr>
                    <td>31–60 days</td>
                    <td>5.0</td>
                </tr>

                <tr>
                    <td>61–90 days</td>
                    <td>5.0</td>
                </tr>

                <tr>
                    <td>91–120 days</td>
                    <td>4.0</td>
                </tr>

                <tr>
                    <td>Over 120 days</td>
                    <td>6.0</td>
                </tr>

            </table>

            <div class="financial-warning">
                DSO has increased to approximately 162 days.
            </div>
        `,

        evidence:
            "DSO ≈ 162 days and a significant portion of receivables is overdue."

    },


    debt: {

        title: "Debt Information",

        content: `
            <div class="report-title">
                <h3>Debt Information</h3>
                <span class="report-tag">2026</span>
            </div>

            <table class="financial-table">

                <tr>
                    <th>Item</th>
                    <th>Amount</th>
                </tr>

                <tr>
                    <td>Short-term Debt</td>
                    <td>13.0 bn</td>
                </tr>

                <tr>
                    <td>Long-term Debt</td>
                    <td>7.0 bn</td>
                </tr>

                <tr>
                    <td>Interest Rate</td>
                    <td>9% / year</td>
                </tr>

                <tr>
                    <td>Requested Additional Loan</td>
                    <td>5.0 bn</td>
                </tr>

            </table>

            <div class="financial-warning">
                Short-term borrowing has increased rapidly to finance cash shortages.
            </div>
        `,

        evidence:
            "Short-term debt is increasing as the company repeatedly finances liquidity shortages."

    }

};


// OPEN FINANCIAL DOCUMENT
documentButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const documentName = button.dataset.document;

        const documentData = financialDocuments[documentName];


        reportContent.innerHTML = documentData.content;


        // VISUAL MARK AS VIEWED
        button.classList.add("viewed");


        // ADD EVIDENCE ONLY ONCE
        if (!collectedEvidence.includes(documentName)) {

            collectedEvidence.push(documentName);

            evidenceCount.textContent = collectedEvidence.length;


            // REMOVE EMPTY MESSAGE
            const emptyEvidence =
                evidenceList.querySelector(".empty-evidence");

            if (emptyEvidence) {
                emptyEvidence.remove();
            }


            // CREATE EVIDENCE TAG
            const evidenceItem = document.createElement("div");

            evidenceItem.classList.add("evidence-item");

            evidenceItem.textContent = documentData.evidence;

            evidenceList.appendChild(evidenceItem);

        }

    });

});


// =============================
// SCREEN 4 - DIAGNOSIS
// =============================

const diagnosisScreen =
    document.getElementById("diagnosisScreen");

const diagnosisEvidenceList =
    document.getElementById("diagnosisEvidenceList");

const diagnosisOptions =
    document.querySelectorAll(".diagnosis-option");

const diagnosisFeedback =
    document.getElementById("diagnosisFeedback");

const diagnosisScoreDisplay =
    document.getElementById("diagnosisScore");

const treatmentButton =
    document.getElementById("treatmentButton");


let diagnosisScore = 0;
let selectedDiagnosis = null;


// MOVE TO DIAGNOSIS SCREEN
diagnosisButton.addEventListener("click", function () {

    investigationScreen.classList.add("hidden");

    diagnosisScreen.classList.remove("hidden");


    // SHOW ONLY EVIDENCE PLAYER ACTUALLY COLLECTED
    diagnosisEvidenceList.innerHTML = "";


    collectedEvidence.forEach(function (documentName) {

        const evidence =
            financialDocuments[documentName].evidence;


        const item = document.createElement("div");

        item.classList.add("diagnosis-evidence-item");

        item.textContent = evidence;


        diagnosisEvidenceList.appendChild(item);

    });


    // IF PLAYER COLLECTED NOTHING
    if (collectedEvidence.length === 0) {

        diagnosisEvidenceList.innerHTML =
            "<p>Bạn chưa thu thập bằng chứng tài chính nào.</p>";

    }

});


// SELECT DIAGNOSIS
diagnosisOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        // PREVENT CHANGING AFTER FINAL CHOICE
        if (selectedDiagnosis !== null) {
            return;
        }


        selectedDiagnosis =
            option.dataset.diagnosis;


        diagnosisScore =
            Number(option.dataset.score);



        // HIGHLIGHT SELECTED OPTION
        option.classList.add("selected");


        // DISABLE ALL OPTIONS
        diagnosisOptions.forEach(function (button) {
            button.disabled = true;
        });


        // SHOW FEEDBACK
        diagnosisFeedback.textContent =
            option.dataset.feedback;


        diagnosisFeedback.classList.remove("hidden");


        // SHOW NEXT BUTTON
        treatmentButton.classList.remove("hidden");

    });

});


// =============================
// SCREEN 5 - TREATMENT
// =============================

const treatmentScreen =
    document.getElementById("treatmentScreen");

const selectedDiagnosisSummary =
    document.getElementById("selectedDiagnosisSummary");

const treatmentOptions =
    document.querySelectorAll(".treatment-option");

const communicationButton =
    document.getElementById("communicationButton");


let selectedTreatment = null;
let treatmentScore = 0;


// TREATMENT SCORE DATA
const treatmentScores = {

    borrow_more: 10,

    stop_credit: 12,

    improve_ar: 22,

    inventory_control: 18,

    balanced_plan: 35

};


// FRIENDLY LABELS
const diagnosisLabels = {

    low_profitability:
        "Low Profitability",

    insufficient_sales:
        "Insufficient Sales",

    excessive_debt:
        "Excessive Short-Term Debt",

    working_capital:
        "Working-Capital Mismanagement",

    insufficient_financing:
        "Insufficient Financing"

};


// MOVE TO TREATMENT SCREEN
treatmentButton.addEventListener("click", function () {

    diagnosisScreen.classList.add("hidden");

    treatmentScreen.classList.remove("hidden");


    selectedDiagnosisSummary.textContent =
        diagnosisLabels[selectedDiagnosis];

});


// SELECT TREATMENT
treatmentOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        if (selectedTreatment !== null) {
            return;
        }


        selectedTreatment =
            option.dataset.treatment;


        treatmentScore =
            treatmentScores[selectedTreatment];


        option.classList.add("selected");


        treatmentOptions.forEach(function (button) {
            button.disabled = true;
        });


        communicationButton.classList.remove("hidden");

    });

});

// =============================
// SCREEN 6 - COMMUNICATION
// =============================

const communicationScreen =
    document.getElementById("communicationScreen");

const communicationOptions =
    document.querySelectorAll(".communication-option");

const outcomeButton =
    document.getElementById("outcomeButton");


let communicationScore = 0;
let selectedCommunication = null;


// MOVE TO COMMUNICATION SCREEN
communicationButton.addEventListener("click", function () {

    treatmentScreen.classList.add("hidden");

    communicationScreen.classList.remove("hidden");

});


// SELECT COMMUNICATION RESPONSE
communicationOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        if (selectedCommunication !== null) {
            return;
        }

        selectedCommunication =
            option.dataset.communication;

        communicationScore =
            Number(option.dataset.score);

        option.classList.add("selected");

        communicationOptions.forEach(function (button) {
            button.disabled = true;
        });

        outcomeButton.classList.remove("hidden");

    });

});


// NEXT: CONSEQUENCE
outcomeButton.addEventListener("click", function () {

    alert("Next Step: Six Months Later");

});