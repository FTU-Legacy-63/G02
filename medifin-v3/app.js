// ======================================================
// MEDIFIN — DRAFT 3
// ======================================================


// ======================================================
// 1. ASSETS
// ======================================================

const ASSET = {

    // ROUND 1
    counselorDesk: "./asset/images/round1/counselor-desk.png",
    counselorOffice: "./asset/images/round1/counselor-office.png",
    counselorPhone: "./asset/images/round1/counselor-phone.png",
    messageBackground: "./asset/images/round1/message-bg.png",
    messagePhone: "./asset/images/round1/message-phone.png",
    clientIntake: "./asset/images/round1/client-intake.png",
    boardroom: "./asset/images/round1/boardroom.png",
    david: "./asset/images/round1/david.png",

    // ROUND 2
    davidRound2: "./asset/images/round1/david.png",
    davidFull: "./asset/images/round2/david-full.png",

    analystFemale: "./asset/images/round2/analyst-female.png",
    analystMale: "./asset/images/round2/analyst-male.png",

    documentA: "./asset/images/round2/document-a.png",
    documentB: "./asset/images/round2/document-b.png",
    documentC: "./asset/images/round2/document-c.png",
    documentD: "./asset/images/round2/document-d.png",
    documentE: "./asset/images/round2/document-e.png",
    documentF: "./asset/images/round2/document-f.png",
    documentG: "./asset/images/round2/document-g.png",

    // ROUND 3
    questionAdvisor: "./asset/images/round3/question-advisor.png",

    // ROUND 5
questionAdvisorBack: "./asset/images/round5/question-advisor-back.png",

// ROUND 6
diagnosisDoctor: "./asset/images/round6/diagnosis-doctor.png",
diagnosisCompetitive: "./asset/images/round6/diagnosis-competitive.png",
diagnosisOperating: "./asset/images/round6/diagnosis-operating.png",
diagnosisLiquidity: "./asset/images/round6/diagnosis-liquidity.png",
diagnosisStructural: "./asset/images/round6/diagnosis-structural.png",
diagnosisCategory: "./asset/images/round6/diagnosis-category.png",
diagnosisMultifactor: "./asset/images/round6/diagnosis-multifactor.png",

// ROUND 11
round11Doctor: "./asset/images/round6/diagnosis-doctor.png"
};

// ======================================================
// 2. APP STATE
// ======================================================

const screenContent = document.getElementById("screenContent");

let currentScreen = 0;

let playerName = "";

let selectedFiles = [];

let currentDocument = null;
let selectedQuestions = [];

let currentQuestion = null;
// ROUND 5
let selectedFinalQuestion = null;
let currentFinalQuestion = null;
// ROUND 6
let selectedDiagnosis = null;
// ROUND 7
let selectedTreatment = null;
// ROUND 8
let selectedTiming = null;
// ROUND 9
let selectedStakeholders = [];
// ROUND 10
let currentProgressUpdate = 0;
let highestProgressUpdate = 0;

// ROUND 11
let round11Action = null;
let round11NewDiagnosis = null;
let round11NewTreatment = null;
// true = đang mở lại tài liệu từ Round 3
// false = đang xem tài liệu bình thường ở Round 2
let reviewingDocumentFromRound3 = false;
// true = đang review evidence từ Round 4 Financial Statements
let reviewingEvidenceFromRound4 = false;

// ======================================================
// 3. ROUND 2 DATA
// ======================================================

const CASE_FILES = {

    A: {
        shortTitle: "Sales & Customer",
        image: ASSET.documentA,
        analyst: ASSET.analystFemale,
        quote:
            "<strong>Market Analyst:</strong> Store traffic is weakening, but not all channels are declining. E-commerce continues to grow at a double-digit rate."
    },

    B: {
        shortTitle: "Stores & Investment",
        image: ASSET.documentB,
        analyst: ASSET.analystMale,
        quote:
            "<strong>Retail Operations:</strong> Store renovation, mobile & web, omnichannel fulfillment, supply chain, customer experience, and holiday inventory are all competing for limited capital."
    },

    C: {
        shortTitle: "Liquidity",
        image: ASSET.documentC,
        analyst: ASSET.analystFemale,
        quote:
            "<strong>Treasurer:</strong> Ending cash balance doesn't reflect a retailer's full liquidity. Holiday inventory, vendor terms, and debt maturities all play a role."
    },

    D: {
        shortTitle: "Capital Structure & Leverage History",
        image: ASSET.documentD,
        analyst: ASSET.analystMale,
        quote:
            "<strong>CFO:</strong> Leverage is high, but it has been this way for years. The question is whether the company still has enough financial flexibility to respond."
    },

    E: {
        shortTitle: "Product & Category Trends",
        image: ASSET.documentE,
        analyst: ASSET.analystFemale,
        quote:
            "<strong>Merchandising Director:</strong> Traditional toy categories remain comparatively resilient. Entertainment and licensing-related categories depend heavily on external release cycles."
    },

    F: {
        shortTitle: "Management Track Record",
        image: ASSET.documentF,
        analyst: ASSET.analystMale,
        quote:
            "<strong>Board Member:</strong> We have tried many things. The problem is that no initiative has been large enough or rapid enough to change the overall situation."
    },

    G: {
        shortTitle: "Governance & Family",
        image: ASSET.documentG,
        analyst: null,
        quote:
            "So you've opened that letter... Michael has been in league with Houndstooth all along! If EBITDA drops another 5%, he's ready to hand the corporation over to the fund just to seize control."
    }

};
// ======================================================
// 3B. ROUND 3 — QUESTION DATA
// ======================================================

const ROUND3_QUESTIONS = {

    A: {
        title: "Q1-A",
        question:
            "Traffic is down, e-commerce is up — what are customers doing?",

        answer:
            "A significant channel shift is taking place. Online sales continue to grow, but online margins are materially lower than in-store margins. Rumors about restructuring and possible store closures are also creating uncertainty among some customers."
    },

    B: {
        title: "Q1-B",
        question:
            "Which capital program has been delayed the longest?",

        answer:
            "Store renovation has been delayed for three consecutive years while omnichannel investment was prioritized. Richard also opposed certain investments while exploring possible asset sales."
    },

    C: {
        title: "Q1-C",
        question:
            "How is liquidity affected if holiday sales drop by 10%?",

        answer:
            "The company can still operate, but its liquidity buffer and covenant headroom would narrow materially. A weak holiday season would leave much less room to absorb additional financial pressure."
    },

    D: {
        title: "Q1-D",
        question:
            "Which debt obligation matures the soonest?",

        answer:
            "A portion of the secured notes matures within 18 months. However, the nearest maturity is not necessarily the earliest source of pressure: the Houndstooth EBITDA trigger could become relevant sooner if operating performance deteriorates."
    },

    E: {
        title: "Q1-E",
        question:
            "Which product categories are performing better?",

        answer:
            "Traditional toy categories remain comparatively resilient, while entertainment and licensing-related categories are weaker and depend more heavily on external release cycles."
    },

    F: {
        title: "Q1-F",
        question:
            "Is the management board in consensus?",

        answer:
            "No. Management and family shareholders are not fully aligned. Michael has privately retained a lawyer specializing in corporate control and ownership disputes."
    },

    G: {
        title: "Q1-G",
        question:
            "Is there a special clause or agreement between Michael and outside investors?",

        answer:
            "There is a conditional agreement that could affect family ownership. The full governance file contains the specific trigger conditions and counterparties."
    }

};

// ======================================================
// 3C. ROUND 5 — FINAL QUESTION DATA
// ======================================================

const ROUND5_QUESTIONS = {

    A: {
        title: "Q2-A",
        question:
            "Which cost item is the hardest to cut?",

        answer:
            "Some financial obligations can be refinanced, but they do not disappear. Michael is pushing for deeper marketing cuts than the CFO recommends."
    },

    B: {
        title: "Q2-B",
        question:
            "How should additional capital be deployed?",

        answer:
            "Digital, fulfillment, and renovation are the main investment priorities. If Houndstooth wins control, the majority of this investment could be halted immediately."
    },

    C: {
        title: "Q2-C",
        question:
            "Why not aggressively close stores?",

        answer:
            "Some stores should be closed, but cutting too deeply would shrink the sales base and weaken the store network. Excessive closures could therefore create additional operating pressure."
    },

    D: {
        title: "Q2-D",
        question:
            "Would the company be in great shape if Amazon disappeared?",

        answer:
            "No. Even without Amazon, the company would still face high debt, liquidity pressure, reinvestment needs, and unresolved governance problems."
    },

    E: {
        title: "Q2-E",
        question:
            "Would the company be financially healthy if all debt were wiped out?",

        answer:
            "Not completely. Removing most of the debt burden would materially improve financial flexibility, but store productivity, competitive pressure, and governance issues would remain."
    },

    F: {
        title: "Q2-F",
        question:
            "What is the primary concern for the next 12 months?",

        answer:
            "Liquidity and refinancing capacity are the most immediate financial concerns. David also fears that weaker performance could be used to challenge his leadership."
    },

    G: {
        title: "Q2-G",
        question:
            "What happens if EBITDA falls another 5%?",

        answer:
            "If the governance evidence is confirmed, another 5% decline in EBITDA would make Houndstooth's conditional preferential purchase right exercisable."
    }

};

// ======================================================
// 3D. ROUND 6 — DIAGNOSIS DATA
// ======================================================

const ROUND6_DIAGNOSES = {

    A: {
        code: "CD-A",
        title: "Competitive Pressure",
        image: ASSET.diagnosisCompetitive,
        description:
            "Competitive pressure and channel shifting are the core root causes."
    },

    B: {
        code: "CD-B",
        title: "Operating Bottleneck",
        image: ASSET.diagnosisOperating,
        description:
            "The store network and operating capital expenditure are the primary bottlenecks."
    },

    C: {
        code: "CD-C",
        title: "Liquidity Manifestation",
        image: ASSET.diagnosisLiquidity,
        description:
            "Liquidity, seasonal inventory, and covenant margins are the main bottlenecks."
    },

    D: {
        code: "CD-D",
        title: "Structural Driver",
        image: ASSET.diagnosisStructural,
        description:
            "Capital structure and refinancing capabilities are the core root causes."
    },

    E: {
        code: "CD-E",
        title: "Category Pressure",
        image: ASSET.diagnosisCategory,
        description:
            "Product mix and entertainment/licensing cycles are the main bottlenecks."
    },

    F: {
        code: "CD-F",
        title: "Multi-Factor Diagnosis",
        image: ASSET.diagnosisMultifactor,
        description:
            "Multiple financial and operational factors combine to form a systemic risk."
    }

};

// ======================================================
// 3E. ROUND 7 — TREATMENT DATA
// ======================================================

const ROUND7_TREATMENTS = {

    A: {
        code: "PD-A",
        title: "Invest to Compete",
        description:
            "Focus capital on digital transformation, fulfillment, renovation, and store experience."
    },

    B: {
        code: "PD-B",
        title: "Deep Cost Cutting",
        description:
            "Reduce SG&A, downsize the store network, and preserve cash in the short term."
    },

    C: {
        code: "PD-C",
        title: "Debt Restructuring",
        description:
            "Renegotiate maturities, interest rates, and payment terms with creditors."
    },

    D: {
        code: "PD-D",
        title: "Asset Sale",
        description:
            "Divest a portion of international assets and reallocate the proceeds."
    },

    E: {
        code: "PD-E",
        title: "Chapter 11",
        description:
            "Enter a formal court-supervised restructuring process to address unsustainable debt."
    },

    F: {
        code: "PD-F",
        title: "Combined Restructuring",
        description:
            "Execute operational, capital, and governance programs simultaneously."
    }

};

// ======================================================
// 3F. ROUND 8 — TIMING DATA
// ======================================================

const ROUND8_TIMINGS = {

    A: {
        code: "TG-A",
        title: "Implement Immediately",
        description:
            "Start the plan with existing holiday data."
    },

    B: {
        code: "TG-B",
        title: "After the Holiday Season",
        description:
            "Wait for peak-season results before launching the plan."
    },

    C: {
        code: "TG-C",
        title: "Test Refinancing First",
        description:
            "Check refinancing capability before changing the core strategy."
    },

    D: {
        code: "TG-D",
        title: "Wait Six Months",
        description:
            "Allow more time to observe operational initiatives."
    }

};

// ======================================================
// 3G. ROUND 9 — STAKEHOLDER PREPARATION DATA
// ======================================================

const ROUND9_STAKEHOLDERS = {

    A: {
        code: "ST-A",
        title: "Suppliers",
        description:
            "Negotiate terms before announcement."
    },

    B: {
        code: "ST-B",
        title: "Employees",
        description:
            "Reassure internal staff and retain key personnel."
    },

    C: {
        code: "ST-C",
        title: "Customers",
        description:
            "Maintain shopping trust during the transition."
    },

    D: {
        code: "ST-D",
        title: "Creditors",
        description:
            "Begin early negotiation of debt terms."
    },

    E: {
        code: "ST-E",
        title: "Landlords",
        description:
            "Maintain lease relationships and operating flexibility."
    },

    F: {
        code: "ST-F",
        title: "Holiday Inventory",
        description:
            "Secure peak-season merchandise and inventory availability."
    },

    G: {
        code: "ST-G",
        title: "Governance & Family",
        description:
            "Keep the management team stable and give advance notice to minority family shareholders."
    }

};

// ======================================================
// 3H. ROUND 10 — PROGRESS DATA
// ======================================================

const ROUND10_UPDATES = [

    {
        id: "sales",
        tab: "1. Sales update",
        title: "SALES UPDATE",
        text:
            "Despite initial volatility in store traffic and inventory levels, active customer confidence initiatives successfully stabilized sales momentum during the restructuring transition period."
    },

    {
        id: "vendor",
        tab: "2. Vendor update",
        title: "VENDOR UPDATE",
        text:
            "Suppliers maintained baseline trade terms, though selective cash-in-advance demands emerged from hesitant vendors due to delayed priority negotiations."
    },

    {
        id: "liquidity",
        tab: "3. Liquidity update",
        title: "LIQUIDITY UPDATE",
        text:
            "Cash reserves and borrowing capacity adjusted dynamically based on the executed restructuring plan, preserving a thin margin of safety above covenant thresholds."
    },

    {
        id: "store",
        tab: "4. Store update",
        title: "STORE UPDATE",
        text:
            "Store-level renovation schedules experienced selective delays as capital was reallocated, while localized management adjustments mitigated unauthorized branch closures."
    },

    {
        id: "digital",
        tab: "5. Digital update",
        title: "DIGITAL UPDATE",
        text:
            "E-commerce channels sustained double-digit growth momentum, partially offsetting physical traffic declines without fully neutralizing lower online profit margins."
    },

    {
        id: "debt",
        tab: "6. Debt update",
        title: "DEBT UPDATE",
        text:
            "Bond prices and refinancing discussions reacted directly to leverage management decisions, as upcoming debt maturities maintained heightened pressure on financial stability."
    },

    {
        id: "governance",
        tab: "7. Family/ Board update",
        title: "FAMILY/ BOARD UPDATE",
        text:
            "Board alignment remained fragile; factional maneuvers by minority shareholders amplified internal friction, threatening consensus ahead of subsequent governance reviews."
    }

];

// ======================================================
// 4. NAVIGATION
// ======================================================

function goToScreen(screenNumber) {

    currentScreen = screenNumber;

    window.scrollTo(0, 0);

    renderScreen();
}
// ======================================================
// 5. SCREEN ROUTER
// ======================================================

function renderScreen() {

    switch (currentScreen) {

        case 0:
            renderLanding();
            break;

        case 1:
            renderLogin();
            break;

        case 2:
            renderMessage();
            break;

        case 3:
            renderClientIntake();
            break;

        case 4:
            renderClientMeeting();
            break;

        case 5:
            renderCaseFiles();
            break;

        case 6:
            renderCaseFileViewer();
            break;

        case 7:
            renderRound3Questions();
            break;

        case 8:
            renderQuestionViewer();
            break;

        case 9:
            renderFinancialStatements();
            break;

        case 10:
            renderRound5Questions();
            break;

        case 11:
    renderFinalQuestionViewer();
    break;

case 12:
    renderRound6Diagnosis();
    break;

case 13:
    renderRound7Treatment();
    break;

    case 14:
    renderRound8Timing();
    break;

case 15:

    renderRound9Preparation();

    break;

case 16:

    renderRound10Progress();

    break;



case 17:

    renderRound11FollowUp();

    break;

default:
    renderLanding();
    }
}


// ======================================================
// SCREEN 0 — LANDING
// ======================================================

function renderLanding() {

    screenContent.innerHTML = `
        <section class="screen landing-screen">

            <header class="landing-header">

                <div></div>

                <button
                    class="primary-button"
                    onclick="goToScreen(1)"
                >
                    Get started
                </button>

            </header>


            <div class="landing-content">

                <div class="landing-illustration">

                    <img
                        src="${ASSET.counselorDesk}"
                        alt="MEDIFIN Financial Counselor"
                    >

                </div>


                <div class="landing-copy">

                    <h1>MEDIFIN</h1>

                    <p>
                        A financial counseling game where players learn
                        through hands-on experience in investigating
                        financial issues, diagnosing problems, making
                        decisions, and reassessing their outcomes.
                    </p>

                </div>

            </div>

        </section>
    `;
}


// ======================================================
// SCREEN 1 — LOGIN
// ======================================================

function renderLogin() {

    screenContent.innerHTML = `
        <section class="screen login-screen">

            <div class="login-card">

                <div class="login-form">

                    <div class="login-avatar">
                        👤
                    </div>

                    <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        autocomplete="off"
                    >

                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                    >

                    <button
                        class="primary-button login-button"
                        onclick="handleLogin()"
                    >
                        Log in
                    </button>

                    <p
                        id="loginError"
                        class="error-message"
                    ></p>

                </div>


                <div class="login-brand">

                    <h1>MEDIFIN</h1>

                    <p>
                        Investigate.
                        Diagnose.
                        Decide.
                        Reassess.
                    </p>

                </div>

            </div>

        </section>
    `;
}


function handleLogin() {

    const input =
        document.getElementById("username");

    const error =
        document.getElementById("loginError");

    const name =
        input.value.trim();

    if (!name) {

        error.textContent =
            "Please enter your name to continue.";

        return;
    }

    playerName = name;

    goToScreen(2);
}


// ======================================================
// SCREEN 2 — MESSAGE
// ======================================================

function renderMessage() {

    screenContent.innerHTML = `
        <section class="screen message-screen">

            <div class="message-character">

                <img
                    src="${ASSET.counselorPhone}"
                    alt="Financial Counselor"
                >

            </div>


            <div
                class="message-panel"
                style="
                    background-image:
                    url('${ASSET.messageBackground}');
                "
            >

                <img
                    class="message-phone"
                    src="${ASSET.messagePhone}"
                    alt="New message"
                >

                <button
                    class="primary-button"
                    onclick="goToScreen(3)"
                >
                    Check it out
                </button>

            </div>

        </section>
    `;
}


// ======================================================
// SCREEN 3 — CLIENT INTAKE
// ======================================================

function renderClientIntake() {

    screenContent.innerHTML = `
        <section class="screen intake-screen">

            <img
                class="full-background"
                src="${ASSET.clientIntake}"
                alt="Client Intake"
            >


            <div class="intake-data">

                <div class="intake-item">
                    <b>Industry</b>
                    <span>Specialty retail · Toys</span>
                </div>

                <div class="intake-item">
                    <b>FY2026 Revenue</b>
                    <span>$11.540bn</span>
                </div>

                <div class="intake-item">
                    <b>Scale</b>
                    <span>~1,700 stores</span>
                </div>

                <div class="intake-item">
                    <b>Ownership</b>
                    <span>Anderson 78% · Fund 22%</span>
                </div>

                <div class="intake-item">
                    <b>Adjusted EBITDA</b>
                    <span>$792m</span>
                </div>

                <div class="intake-item">
                    <b>Operating Earnings</b>
                    <span>$460m</span>
                </div>

                <div class="intake-item">
                    <b>Net Loss Attributable</b>
                    <span>−$36m</span>
                </div>

                <div class="intake-item">
                    <b>Major Transaction</b>
                    <span>$6.6bn LBO · 2005</span>
                </div>

            </div>


            <div class="client-name">

                <strong>David Anderson</strong>

                <span>
                    CEO · Toy Kingdom Inc.
                </span>

            </div>


            <button
                class="overlay-button intake-next"
                onclick="goToScreen(4)"
            >
                Start diagnosis ›
            </button>

        </section>
    `;
}


// ======================================================
// SCREEN 4 — CLIENT MEETING
// ======================================================

function renderClientMeeting() {

    screenContent.innerHTML = `
        <section class="screen meeting-screen">

            <img
                class="full-background"
                src="${ASSET.boardroom}"
                alt="Boardroom"
            >


            <div class="meeting-dialogue">

                <div class="meeting-text">

                    <p>
                        “Sales continue to decline. Amazon, Walmart,
                        and online retail are reshaping the entire
                        industry. Some metrics have improved, but the
                        company is becoming increasingly difficult
                        to manage.”
                    </p>

                    <p>
                        “I discovered that Michael is hiring his own
                        lawyer, while Richard has been quietly offering
                        our international assets for sale without going
                        through the board. I don't know whether this is
                        a disease of the market, or a disease within my
                        own family.”
                    </p>

                </div>

            </div>


            <button
                class="overlay-button meeting-next"
                onclick="goToScreen(5)"
            >
                Next
            </button>

        </section>
    `;
}


// ======================================================
// SCREEN 5 — ROUND 2 CASE FILE SELECTION
// ======================================================

function renderCaseFiles() {

    screenContent.innerHTML = `
        <section class="round2-selection">

            <div class="round2-shell">

                <header class="round2-heading">

                    <h1>
                        ROUND 2 - CASE FILES
                    </h1>

                    <p>
    Choose exactly 3 out of 7 files. The 4 unselected files will be
    permanently locked — they cannot be reopened in Rounds 3, 4, 5,
    or during the Round 11 Re-examination, even if you change your
    diagnosis later.
</p>

                </header>


                <div class="round2-layout">

                    <aside class="round2-client">

                        <div class="round2-client-card">

                            <div class="client-pill">
                                Client: David · CEO
                            </div>

                            <img
                                src="${ASSET.davidRound2}"
                                alt="David Anderson"
                            >

                        </div>


                        <div class="known-figures">

                            <h3>KNOWN FIGURES</h3>

                            <div>
                                <span>Cash FY2026</span>
                                <strong>$566m</strong>
                            </div>

                            <div>
                                <span>Debt snapshot</span>
                                <strong>$4,800m</strong>
                            </div>

                            <div>
                                <span>Measured EBITDA</span>
                                <strong>$792m</strong>
                            </div>

                        </div>

                    </aside>


                    <main class="round2-main">

                        ${renderProgress(2)}


                        <div class="file-panel">

                            <div class="file-panel-heading">

                                <span>
                                    DIAGNOSTIC DOCUMENTS
                                </span>

                                <h2>
                                    Select investigative files
                                </h2>

                            </div>


                            <div class="file-grid">

                                ${Object.entries(CASE_FILES)
                                    .map(([id, file]) =>
                                        renderFileCard(id, file)
                                    )
                                    .join("")}

                            </div>


                            <div class="selection-actions">

                                <span id="selectionStatus">
                                    ${selectedFiles.length} / 3 selected
                                </span>

                                <button
                                    id="confirmFilesButton"
                                    class="small-next-button"
                                    onclick="confirmCaseFiles()"
                                    ${selectedFiles.length === 3 ? "" : "disabled"}
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </section>
    `;

    updateCaseFileUI();
}


function renderProgress(active) {

    const steps = [
        "Intake",
        "Clinic",
        "Case files",
        "Questions",
        "Financials",
        "Final Question"
    ];

    return `
        <div class="case-progress-scroll">
            <div class="case-progress">

                ${steps.map((step, index) => `

                    <div
                        class="
                            progress-step
                            ${index < active ? "done" : ""}
                            ${index === active ? "active" : ""}
                        "
                    >

                        <span>
                            ${index}
                        </span>

                        <b>
                            ${step}
                        </b>

                    </div>

                    ${
                        index < steps.length - 1
                            ? `<i></i>`
                            : ""
                    }

                `).join("")}

            </div>
        </div>
    `;
}


function renderFileCard(id, file) {

    const selected =
        selectedFiles.includes(id);

    return `
        <button
            class="
                diagnostic-card
                ${selected ? "selected" : ""}
            "
            data-file="${id}"
            onclick="toggleCaseFile('${id}')"
        >

            <span class="file-radio"></span>

            <small>
                Doc-${id}
            </small>

            <h3>
                ${file.shortTitle}
            </h3>

            <p>
                ${getFileDescription(id)}
            </p>

        </button>
    `;
}


function getFileDescription(id) {

    const descriptions = {

        A:
            "Revenue, traffic, and sales channels. Same-store sales, regional revenue, and e-commerce performance.",

        B:
            "Store network and capital-intensive initiatives. Renovation, digital integration, fulfillment, supply chain, customer experience, and seasonal inventory.",

        C:
            "Cash management, seasonal inventory, supplier credit terms, and debt maturity profiles. FY2026 liquidity snapshot and seasonal working-capital requirements.",

        D:
            "Debt composition, interest expenses, and capital transaction history. Current leverage ratios and past financing arrangements.",

        E:
            "Product mix and licensing cycles. Traditional toy lines, entertainment segments, and external release-cycle factors.",

        F:
            "Strategic initiatives over the past three years and actual execution results. Store renovations, SG&A cost-cutting, digital transformation, and international debt restructuring.",

        G:
            "Ownership structure, family shareholder agreements, and legal documentation. Governance profiles for key stakeholders: Anderson, Michael, Richard, and Houndstooth."
    };

    return descriptions[id];
}


function toggleCaseFile(id) {

    const index =
        selectedFiles.indexOf(id);

    if (index >= 0) {

        selectedFiles.splice(index, 1);

    } else {

        if (selectedFiles.length >= 3) {
            return;
        }

        selectedFiles.push(id);
    }

    renderCaseFiles();
}


function updateCaseFileUI() {

    const status =
        document.getElementById("selectionStatus");

    const button =
        document.getElementById("confirmFilesButton");

    if (status) {

        status.textContent =
            `${selectedFiles.length} / 3 selected`;
    }

    if (button) {

        button.disabled =
            selectedFiles.length !== 3;
    }
}


function confirmCaseFiles() {

    if (selectedFiles.length !== 3) {
        return;
    }

    currentDocument = null;
    reviewingDocumentFromRound3 = false;

    goToScreen(6);
}


// ======================================================
// SCREEN 6 — SELECTED DOCUMENT VIEWER
// ======================================================

function renderCaseFileViewer() {

    if (currentDocument === null) {

        renderDocumentLibrary();

        return;
    }

    renderOpenedDocument(currentDocument);
}


// ======================================================
// DOCUMENT LIBRARY
// ======================================================

function renderDocumentLibrary() {

    screenContent.innerHTML = `
        <section class="document-screen">

            ${renderDocumentSidebar()}


            <main class="document-workspace empty-workspace">

                <p>
                    Tap to view your chosen files
                </p>

            </main>

        </section>
    `;
}


// ======================================================
// DOCUMENT SIDEBAR
// ======================================================

function renderDocumentSidebar() {

    return `
        <aside class="document-sidebar">

            ${Object.keys(CASE_FILES)
                .map(id => {

                    const selected =
                        selectedFiles.includes(id);

                    const active =
                        currentDocument === id;

                    return `
                        <button
                            class="
                                folder-button
                                ${active ? "active" : ""}
                                ${!selected ? "locked" : ""}
                            "
                            ${
                                selected
                                    ? `onclick="openDocument('${id}')"`
                                    : "disabled"
                            }
                        >

                            <span>
                                ▱
                            </span>

                            Document ${id}

                            ${
                                !selected
                                    ? `<small>LOCKED</small>`
                                    : ""
                            }

                        </button>
                    `;

                }).join("")}

        </aside>
    `;
}


function openDocument(id) {

    if (!selectedFiles.includes(id)) {
        return;
    }

    currentDocument = id;

    renderCaseFileViewer();
}


// ======================================================
// OPENED DOCUMENT
// ======================================================

function renderOpenedDocument(id) {

    const file = CASE_FILES[id];

    // DOCUMENT G HAS A SPECIAL LAYOUT
    if (id === "G") {

        screenContent.innerHTML = `
            <section class="document-screen">

                ${renderDocumentSidebar()}

                <main class="document-workspace document-g-workspace">

                    <div class="david-reaction">

                        <div class="david-profile">

                            <img
                                src="${ASSET.david}"
                                alt="David Anderson"
                            >

                            <strong>
                                DAVID ANDERSON
                            </strong>

                        </div>

                        <div class="david-speech">
                            “${file.quote}”
                            <span>— David</span>
                        </div>

                    </div>


                    <div class="document-g-image-area">

                       <div class="document-g-paper">
    <img
        class="document-g-image"
        src="${file.image}"
        alt="Document G"
    >

 
</div>
                    </div>

${
    reviewingEvidenceFromRound4
        ? `
            <button
                class="small-next-button document-next"
                onclick="backToRound4Financials()"
            >
                Back to Financials
            </button>
        `
        : reviewingDocumentFromRound3
            ? `
                <button
                    class="small-next-button document-next"
                    onclick="backToRound3Questions()"
                >
                    Back to Questions
                </button>
            `
            : `
                <button
                    class="small-next-button document-next"
                    onclick="nextDocument()"
                >
                    Next round
                </button>
            `
}

                </main>

            </section>
        `;

        return;
    }


  // DOCUMENTS A–F  
    screenContent.innerHTML = `
        <section class="document-screen">

            ${renderDocumentSidebar()}

            <main class="document-workspace">

                <div class="document-image-area">

                    <img
                        class="document-image"
                        src="${file.image}"
                        alt="Document ${id}"
                    >

                </div>


                <div class="document-dialogue-row">

                    <img
                        class="analyst-image"
                        src="${file.analyst}"
                        alt="Financial analyst"
                    >


                    <div class="doc-dialogue">

    ${file.quote}

</div>

                   ${
    reviewingEvidenceFromRound4
        ? `
            <button
                class="small-next-button document-next"
                onclick="backToRound4Financials()"
            >
                Back to Financials
            </button>
        `
        : reviewingDocumentFromRound3
            ? `
                <button
                    class="small-next-button document-next"
                    onclick="backToRound3Questions()"
                >
                    Back to Questions
                </button>
            `
            : `
                <button
                    class="small-next-button document-next"
                    onclick="nextDocument()"
                >
                    Next round
                </button>
            `
}

                </div>

            </main>

        </section>
    `;
}


function nextDocument() {

    // Kết thúc Round 2
    currentDocument = null;
    reviewingDocumentFromRound3 = false;

    goToScreen(7);
}


// ======================================================
// SCREEN 7 — ROUND 3 QUESTIONS
// ======================================================

function renderRound3Questions() {

    screenContent.innerHTML = `
        <section class="round3-selection">

            <div class="round3-shell">

                <header class="round3-heading">

                    <h1>
                        ROUND 3 - QUESTIONS
                    </h1>

                    <p>
                        Choose exactly 2 out of 7 questions. Each question
                        reveals another narrow angle of its corresponding
                        section — even locked areas in Act 2 — though always
                        at a surface level, not replacing the full file.
                    </p>

                </header>


                <div class="round3-layout">

                    <!-- LEFT SIDE -->
                    <aside class="round3-client">

                        <div class="round3-client-card">

                            <div class="client-pill">
                                Client: David · CEO
                            </div>

                            <img
                                src="${ASSET.davidRound2}"
                                alt="David Anderson"
                            >

                        </div>


                        <div class="round3-known-figures">

                            <h3>KNOWN FIGURES</h3>

                            <div>
                                <span>Cash FY2026</span>
                                <strong>$566m</strong>
                            </div>

                            <div>
                                <span>Debt snapshot</span>
                                <strong>$4,800m</strong>
                            </div>

                            <div>
                                <span>Measured EBITDA</span>
                                <strong>$792.0m</strong>
                            </div>

                        </div>


                        <div class="chosen-evidence">

                            <div class="chosen-evidence-heading">

                                <h3>
                                    3 CHOSEN EVIDENCE
                                </h3>

                                <span>
                                    tap to review
                                </span>

                            </div>


                            <div class="chosen-evidence-list">

                                ${selectedFiles.map(id => `
                                    <button
                                        class="evidence-chip"
                                        onclick="reviewSelectedDocument('${id}')"
                                    >
                                        <small>DOC</small>

                                        <span>
                                            Doc-${id}
                                        </span>
                                    </button>
                                `).join("")}

                            </div>

                        </div>

                    </aside>


                    <!-- RIGHT SIDE -->
                    <main class="round3-main">

                        ${renderProgress(3)}


                        <div class="question-panel">

                            <div class="question-panel-heading">

                                <span>
                                    SUPPLEMENTARY INQUIRY
                                </span>

                                <h2>
                                    Uncover targeted details
                                </h2>

                            </div>


                            <div class="question-grid">

                                ${Object.entries(ROUND3_QUESTIONS)
                                    .map(([id, item]) =>
                                        renderQuestionCard(id, item)
                                    )
                                    .join("")}

                            </div>


                            <div class="question-actions">

                                <span id="questionSelectionStatus">
                                    ${selectedQuestions.length} / 2 selected
                                </span>


                                <button
                                    id="confirmQuestionsButton"
                                    class="small-next-button"
                                    onclick="confirmQuestions()"
                                    ${selectedQuestions.length === 2 ? "" : "disabled"}
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </section>
    `;
}


// ======================================================
// ROUND 3 — QUESTION CARD
// ======================================================

function renderQuestionCard(id, item) {

    const selected =
        selectedQuestions.includes(id);

    return `
        <button
            class="
                question-card
                ${selected ? "selected" : ""}
            "
            onclick="toggleQuestion('${id}')"
        >

            <span class="question-radio"></span>

            <h3>
                ${item.title}
            </h3>

            <p>
                ${item.question}
            </p>

        </button>
    `;
}


// ======================================================
// ROUND 3 — SELECT QUESTION
// ======================================================

function toggleQuestion(id) {

    const index =
        selectedQuestions.indexOf(id);

    if (index >= 0) {

        selectedQuestions.splice(index, 1);

    } else {

        if (selectedQuestions.length >= 2) {
            return;
        }

        selectedQuestions.push(id);
    }

    renderRound3Questions();
}


// ======================================================
// ROUND 3 — CONFIRM QUESTIONS
// ======================================================
function confirmQuestions() {

    if (selectedQuestions.length !== 2) {
        return;
    }

    currentQuestion = null;

    goToScreen(8);
}
// ======================================================

// SCREEN 8 — ROUND 3 QUESTION VIEWER

// Screen 7.1 / 7.2 in Figma

// ======================================================

function renderQuestionViewer() {

    if (currentQuestion === null) {

        renderQuestionLibrary();

        return;

    }

    renderQuestionAnswer(currentQuestion);

}

// ======================================================

// SCREEN 7.1 — QUESTION LIBRARY

// ======================================================

function renderQuestionLibrary() {

    screenContent.innerHTML = `

        <section class="question-viewer-screen">

            ${renderQuestionSidebar()}

            <main class="question-viewer-workspace question-empty-workspace">

                <p>

                    Tap to view your chosen evidence

                </p>

            </main>

        </section>

    `;

}

// ======================================================

// QUESTION SIDEBAR

// ======================================================

function renderQuestionSidebar() {

    return `

        <aside class="question-sidebar">

            ${Object.keys(ROUND3_QUESTIONS)

                .map(id => {

                    const selected =

                        selectedQuestions.includes(id);

                    const active =

                        currentQuestion === id;

                    return `

                        <button

                            class="

                                question-folder-button

                                ${active ? "active" : ""}

                                ${!selected ? "locked" : ""}

                            "

                            ${

                                selected

                                    ? `onclick="openQuestion('${id}')"`

                                    : "disabled"

                            }

                        >

                            <span class="question-folder-icon">

                                ▱

                            </span>

                            Q1-${id}

                            ${

                                !selected

                                    ? `<small>LOCKED</small>`

                                    : ""

                            }

                        </button>

                    `;

                }).join("")}

        </aside>

    `;

}

// ======================================================

// OPEN QUESTION

// ======================================================

function openQuestion(id) {

    if (!selectedQuestions.includes(id)) {

        return;

    }

    currentQuestion = id;

    renderQuestionViewer();

}

// ======================================================

// SCREEN 7.2 — QUESTION ANSWER

// ======================================================

function renderQuestionAnswer(id) {

    const item =

        ROUND3_QUESTIONS[id];

    screenContent.innerHTML = `

        <section class="question-viewer-screen">

            ${renderQuestionSidebar()}

            <main class="question-answer-workspace">

                <div class="answer-content">

                    <p class="answer-label">

                        Answer to Q1-${id}:

                    </p>

                    <div class="answer-box">

                        <p>

                            ${item.answer}

                        </p>

                    </div>

                </div>

                <img

                    class="question-advisor"

                    src="${ASSET.questionAdvisor}"

                    alt="Financial advisor"

                >

               ${
    reviewingEvidenceFromRound4
        ? `
            <button
                class="question-next-button"
                onclick="backToRound4Financials()"
            >
                Back to Financials
            </button>
        `
        : `
            <button
                class="question-next-button"
                onclick="nextQuestion()"
            >
                Next round
            </button>
        `
}
            </main>

        </section>

    `;

}

// ======================================================

// NEXT SELECTED QUESTION

// ======================================================

function nextQuestion() {

    currentQuestion = null;

    goToScreen(9);
}


// ======================================================
// ROUND 3 — REVIEW PREVIOUS EVIDENCE
// ======================================================

function reviewSelectedDocument(id) {

    if (!selectedFiles.includes(id)) {
        return;
    }

    // Đánh dấu rằng tài liệu này được mở để review từ Round 3
    reviewingDocumentFromRound3 = true;

    currentDocument = id;

    goToScreen(6);
}
function backToRound3Questions() {

    reviewingDocumentFromRound3 = false;

    currentDocument = null;

    goToScreen(7);
}

// ======================================================
// SCREEN 9 — ROUND 4 FINANCIAL STATEMENTS
// ======================================================

function renderFinancialStatements() {

    screenContent.innerHTML = `
        <section class="round4-screen">

            <div class="round4-shell">

                <header class="round4-heading">
                    <h1>ROUND 4 - FINANCIAL STATEMENTS</h1>

                    <p>
                        "The CFO provides a comprehensive report. The public figures presented here
                        serve as an independent source."
                    </p>
                </header>


                <div class="round4-layout">

                    <!-- LEFT SIDEBAR -->
                    <aside class="round4-sidebar">

                        <div class="round4-client-card">

                            <div class="client-pill">
                                Client: David · CEO
                            </div>

                            <img
                                src="${ASSET.davidRound2}"
                                alt="David Anderson"
                            >

                        </div>


                        <div class="round4-known-figures">

                            <h3>KNOWN FIGURES</h3>

                            <div>
                                <span>Cash FY2026</span>
                                <strong>$566m</strong>
                            </div>

                            <div>
                                <span>Debt snapshot</span>
                                <strong>$4,800m</strong>
                            </div>

                            <div>
                                <span>Measured EBITDA</span>
                                <strong>$792.0m</strong>
                            </div>

                        </div>


                        <div class="round4-evidence">

                            <div class="round4-evidence-heading">
                                <h3>5 CHOSEN EVIDENCE</h3>
                                <span>tap to review</span>
                            </div>


                            <div class="round4-evidence-list">

                                ${selectedFiles.map(id => `
                                    <button
                                        class="round4-evidence-chip"
                                        onclick="reviewDocumentFromRound4('${id}')"
                                    >
                                        <small>DOC</small>
                                        <span>Doc-${id}</span>
                                    </button>
                                `).join("")}


                                ${selectedQuestions.map(id => `
                                    <button
                                        class="round4-evidence-chip"
                                        onclick="reviewQuestionFromRound4('${id}')"
                                    >
                                        <small>Q1</small>
                                        <span>Q1-${id}</span>
                                    </button>
                                `).join("")}

                            </div>

                        </div>

                    </aside>


                    <!-- RIGHT CONTENT -->
                    <main class="round4-main">

                        ${renderProgress(4)}


                        <div class="financial-statement-panel">

                            <!-- INCOME STATEMENT -->

                            <div class="financial-title-row">
                                <h2>CONSOLIDATED INCOME STATEMENT</h2>
                                <span>· million USD</span>
                            </div>


                            <table class="financial-table">

                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>FY2024</th>
                                        <th>FY2025</th>
                                        <th>FY2026</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr>
                                        <td>Net Sales</td>
                                        <td>12,361</td>
                                        <td>11,802</td>
                                        <td>11,540</td>
                                    </tr>

                                    <tr>
                                        <td>Cost of Sales</td>
                                        <td>(7,931)</td>
                                        <td>(7,576)</td>
                                        <td>(7,432)</td>
                                    </tr>

                                    <tr>
                                        <td>Gross Profit</td>
                                        <td>4,430</td>
                                        <td>4,226</td>
                                        <td>4,108</td>
                                    </tr>

                                    <tr>
                                        <td>SG&amp;A</td>
                                        <td>(3,915)</td>
                                        <td>(3,593)</td>
                                        <td>(3,480)</td>
                                    </tr>

                                    <tr>
                                        <td>Depreciation &amp; Amortization</td>
                                        <td>(377)</td>
                                        <td>(343)</td>
                                        <td>(317)</td>
                                    </tr>

                                    <tr>
                                        <td>Other Income, net</td>
                                        <td>53</td>
                                        <td>88</td>
                                        <td>149</td>
                                    </tr>

                                    <tr>
                                        <td>Operating Earnings</td>
                                        <td>191</td>
                                        <td>378</td>
                                        <td>460</td>
                                    </tr>

                                    <tr>
                                        <td>Interest Expense</td>
                                        <td>(451)</td>
                                        <td>(429)</td>
                                        <td>(457)</td>
                                    </tr>

                                    <tr>
                                        <td>Interest Income</td>
                                        <td>4</td>
                                        <td>3</td>
                                        <td>2</td>
                                    </tr>

                                    <tr>
                                        <td>Earnings / (Loss) Before Tax</td>
                                        <td>(256)</td>
                                        <td>(48)</td>
                                        <td>5</td>
                                    </tr>

                                    <tr>
                                        <td>Income Tax Expense</td>
                                        <td>(32)</td>
                                        <td>(76)</td>
                                        <td>(34)</td>
                                    </tr>

                                    <tr>
                                        <td>Net Loss</td>
                                        <td>(288)</td>
                                        <td>(124)</td>
                                        <td>(29)</td>
                                    </tr>

                                    <tr>
                                        <td>Noncontrolling Interest</td>
                                        <td>(4)</td>
                                        <td>(6)</td>
                                        <td>(7)</td>
                                    </tr>

                                    <tr>
                                        <td>Net Loss attributable</td>
                                        <td>(292)</td>
                                        <td>(130)</td>
                                        <td>(36)</td>
                                    </tr>

                                </tbody>

                            </table>


                            <!-- OPERATING METRICS -->

                            <div class="financial-section-title">
                                OPERATING METRICS
                            </div>


                            <table class="metrics-table">

                                <tbody>

                                    <tr>
                                        <td>Gross Margin %</td>
                                        <td>35.8%</td>
                                        <td>35.8%</td>
                                        <td>35.6%</td>
                                    </tr>

                                    <tr>
                                        <td>SG&amp;A / Sales</td>
                                        <td>31.7%</td>
                                        <td>30.4%</td>
                                        <td>30.2%</td>
                                    </tr>

                                    <tr>
                                        <td>Adjusted EBITDA $</td>
                                        <td>$642m</td>
                                        <td>$800m</td>
                                        <td>$792m</td>
                                    </tr>

                                    <tr>
                                        <td>Consolidated SSS</td>
                                        <td>0.0%</td>
                                        <td>+0.9%</td>
                                        <td>−1.4%</td>
                                    </tr>

                                </tbody>

                            </table>


                            <!-- BALANCE SHEET -->

                            <div class="balance-sheet-section">

                                <div class="financial-section-title balance-title">
                                    BALANCE SHEET FY2026
                                </div>


                                <h4>ASSETS</h4>

                                <div class="balance-row">
                                    <span>Cash &amp; Cash Equivalents</span>
                                    <strong>$566m</strong>
                                </div>

                                <div class="balance-row">
                                    <span>Receivables</span>
                                    <strong>$255m</strong>
                                </div>

                                <div class="balance-row">
                                    <span>Inventory</span>
                                    <strong>$2,476m</strong>
                                </div>

                                <div class="balance-row">
                                    <span>Total Current Assets</span>
                                    <strong>$3,389m</strong>
                                </div>

                                <div class="balance-row">
                                    <span>Property &amp; Equipment</span>
                                    <strong>$3,067m</strong>
                                </div>


                                <h4>CAPITAL &amp; FUNDING</h4>

                                <div class="balance-row">
                                    <span>Total Indebtedness</span>
                                    <strong>~$4.8bn</strong>
                                </div>

                                <div class="balance-row">
                                    <span>Secured Indebtedness</span>
                                    <strong>~$3.4bn</strong>
                                </div>

                                <div class="balance-row">
                                    <span>Stockholders' Deficit</span>
                                    <strong>~$1.3bn deficit</strong>
                                </div>

                            </div>


                            <div class="round4-next-row">

                                <button
                                    class="round4-next-button"
                                    onclick="finishRound4()"
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </section>
    `;
}


// ======================================================
// ROUND 4 — REVIEW DOCUMENT
// ======================================================

function reviewDocumentFromRound4(id) {

    if (!selectedFiles.includes(id)) {
        return;
    }

    reviewingEvidenceFromRound4 = true;
    reviewingDocumentFromRound3 = false;

    currentDocument = id;

    goToScreen(6);
}


// ======================================================
// ROUND 4 — REVIEW QUESTION
// ======================================================

function reviewQuestionFromRound4(id) {

    if (!selectedQuestions.includes(id)) {
        return;
    }

    reviewingEvidenceFromRound4 = true;

    currentQuestion = id;

    goToScreen(8);
}


// ======================================================
// ROUND 4 — RETURN FROM REVIEW
// ======================================================

function backToRound4Financials() {

    reviewingEvidenceFromRound4 = false;
    reviewingDocumentFromRound3 = false;

    currentDocument = null;
    currentQuestion = null;

    goToScreen(9);
}


// ======================================================
// ROUND 4 — TEMPORARY NEXT
// ======================================================

function finishRound4() {

    reviewingEvidenceFromRound4 = false;

    goToScreen(10);
}

// ======================================================
// SCREEN 9 — ROUND 5 FINAL QUESTION
// ======================================================

function renderRound5Questions() {

    screenContent.innerHTML = `
        <section class="round5-selection">

            <div class="round5-shell">

                <header class="round5-heading">

                    <h1>
                        ROUND 5 - QUESTIONS
                    </h1>

                    <p>
                        Choose exactly 1 out of 7 questions. This question is more reflective
                        than exploratory of new data — it reveals which hypothesis the player
                        is leaning toward.
                    </p>

                </header>


                <div class="round5-layout">

                    <!-- LEFT SIDE -->
                    <aside class="round5-client">

                        <div class="round5-client-card">

                            <div class="client-pill">
                                Client: David · CEO
                            </div>

                            <img
                                src="${ASSET.davidRound2}"
                                alt="David Anderson"
                            >

                        </div>


                        <div class="round5-known-figures">

                            <h3>
                                KNOWN FIGURES
                            </h3>

                            <div>
                                <span>Cash FY2026</span>
                                <strong>$566m</strong>
                            </div>

                            <div>
                                <span>Debt snapshot</span>
                                <strong>$4,800m</strong>
                            </div>

                            <div>
                                <span>Measured EBITDA</span>
                                <strong>$792.0m</strong>
                            </div>

                        </div>


                        ${renderRound5Evidence()}

                    </aside>


                    <!-- RIGHT SIDE -->
                    <main class="round5-main">

                        ${renderProgress(5)}


                        <div class="round5-question-panel">

                            <div class="round5-question-heading">

                                <span>
                                    FINAL ASSESSMENT
                                </span>

                                <h2>
                                    Test underlying assumptions
                                </h2>

                            </div>


                            <div class="round5-question-grid">

                                ${Object.entries(ROUND5_QUESTIONS)
                                    .map(([id, item]) =>
                                        renderFinalQuestionCard(id, item)
                                    )
                                    .join("")}

                            </div>


                            <div class="round5-actions">

                                <span>
                                    ${
                                        selectedFinalQuestion
                                            ? "1 / 1 selected"
                                            : "0 / 1 selected"
                                    }
                                </span>


                                <button
                                    class="round5-next-button"
                                    onclick="confirmFinalQuestion()"
                                    ${selectedFinalQuestion ? "" : "disabled"}
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </section>
    `;
}

function renderRound5Evidence() {

    const fileEvidence = selectedFiles.map(id => `
        <button
            class="round5-evidence-chip"
            onclick="reviewDocumentFromRound4('${id}')"
        >
            <small>DOC</small>
            <span>Doc-${id}</span>
        </button>
    `).join("");


    const questionEvidence = selectedQuestions.map(id => `
        <button
            class="round5-evidence-chip"
            onclick="reviewQuestionFromRound4('${id}')"
        >
            <small>Q1</small>
            <span>Q1-${id}</span>
        </button>
    `).join("");


    const financialEvidence = `
        <button
            class="round5-evidence-chip"
            onclick="goToScreen(9)"
        >
            <small>FIN</small>
            <span>Income Statement</span>
        </button>

        <button
            class="round5-evidence-chip"
            onclick="goToScreen(9)"
        >
            <small>FIN</small>
            <span>Balance Sheet FY2026</span>
        </button>

        <button
            class="round5-evidence-chip"
            onclick="goToScreen(9)"
        >
            <small>FIN</small>
            <span>Operating Metrics</span>
        </button>
    `;


    return `
        <div class="round5-evidence">

            <div class="round5-evidence-heading">

                <h3>
                    8 CHOSEN EVIDENCE
                </h3>

                <span>
                    tap to review
                </span>

            </div>


            <div class="round5-evidence-list">

                ${fileEvidence}
                ${questionEvidence}
                ${financialEvidence}

            </div>

        </div>
    `;
}

function renderFinalQuestionCard(id, item) {

    const selected =
        selectedFinalQuestion === id;

    return `
        <button
            class="
                final-question-card
                ${selected ? "selected" : ""}
            "
            onclick="selectFinalQuestion('${id}')"
        >

            <div class="final-question-card-top">

                <h3>
                    ${item.title}
                </h3>

                <span class="final-question-radio"></span>

            </div>

            <p>
                ${item.question}
            </p>

        </button>
    `;
}


function selectFinalQuestion(id) {

    if (selectedFinalQuestion === id) {

        selectedFinalQuestion = null;

    } else {

        selectedFinalQuestion = id;
    }

    renderRound5Questions();
}


function confirmFinalQuestion() {

    if (!selectedFinalQuestion) {
        return;
    }

    currentFinalQuestion = null;

    goToScreen(11);
}

// ======================================================
// ROUND 5 — FINAL QUESTION VIEWER
// ======================================================

function renderFinalQuestionViewer() {

    if (currentFinalQuestion === null) {

        renderFinalQuestionLibrary();
        return;
    }

    renderFinalQuestionAnswer(currentFinalQuestion);
}


function renderFinalQuestionLibrary() {

    screenContent.innerHTML = `
        <section class="final-question-viewer-screen">

            ${renderFinalQuestionSidebar()}

            <main class="final-question-empty">

                <p>
                    Tap to view your chosen evidence
                </p>

            </main>

        </section>
    `;
}

function renderFinalQuestionSidebar() {

    return `
        <aside class="final-question-sidebar">

            ${Object.keys(ROUND5_QUESTIONS)
                .map(id => {

                    const selected =
                        selectedFinalQuestion === id;

                    const active =
                        currentFinalQuestion === id;

                    return `
                        <button
                            class="
                                final-question-folder
                                ${active ? "active" : ""}
                                ${!selected ? "locked" : ""}
                            "
                            ${
                                selected
                                    ? `onclick="openFinalQuestion('${id}')"`
                                    : "disabled"
                            }
                        >

                            <span>▱</span>

                            Q2-${id}

                            ${
                                !selected
                                    ? `<small>LOCKED</small>`
                                    : ""
                            }

                        </button>
                    `;

                }).join("")}

        </aside>
    `;
}


function openFinalQuestion(id) {

    if (selectedFinalQuestion !== id) {
        return;
    }

    currentFinalQuestion = id;

    renderFinalQuestionViewer();
}

function renderFinalQuestionAnswer(id) {

    const item =
        ROUND5_QUESTIONS[id];

    screenContent.innerHTML = `
        <section class="final-question-viewer-screen">

            ${renderFinalQuestionSidebar()}


            <main class="final-question-answer">

                <div class="final-answer-content">

                    <p class="final-answer-label">
                        Answer to Q2-${id}:
                    </p>


                    <div class="final-answer-box">

                        <p>
                            ${item.answer}
                        </p>

                    </div>

                </div>


                <img
                    class="final-question-advisor"
                    src="${ASSET.questionAdvisorBack}"
                    alt="Financial counselor"
                >


                <button
                    class="final-question-next"
                    onclick="finishRound5()"
                >
                    Next round
                </button>

            </main>

        </section>
    `;
}


function finishRound5() {

    currentFinalQuestion = null;

    goToScreen(12);
}
// ======================================================
// SCREEN 12 — ROUND 6 DIAGNOSIS
// ======================================================

function renderRound6Diagnosis() {

    screenContent.innerHTML = `
        <section class="round6-screen">

            <div class="round6-shell">

                <header class="round6-heading">

                    <h1>
                        ROUND 6 - DIAGNOSIS
                    </h1>

                    <p>
                        Review the evidence you have gathered and identify
                        the primary financial problem facing Toy Kingdom.
                        Choose exactly 1 diagnosis.
                    </p>

                </header>


                <div class="round6-layout">

                    <!-- LEFT -->
                    <aside class="round6-sidebar">

                       <div class="round6-doctor-card">

    <div class="round6-doctor-label">
        Client: David · CEO
    </div>

    <img
        src="${ASSET.davidRound2}"
        alt="David Anderson"
    >

</div>


                        <div class="round6-known-figures">

                            <h3>KNOWN FIGURES</h3>

                            <div>
                                <span>Cash FY2026</span>
                                <strong>$566m</strong>
                            </div>

                            <div>
                                <span>Debt snapshot</span>
                                <strong>$4,800m</strong>
                            </div>

                            <div>
                                <span>Adjusted EBITDA</span>
                                <strong>$792m</strong>
                            </div>

                            <div>
                                <span>Operating Earnings</span>
                                <strong>$460m</strong>
                            </div>

                            <div>
                                <span>Interest Expense</span>
                                <strong>$457m</strong>
                            </div>

                        </div>


                        <div class="round6-evidence-summary">

                            <div class="round6-evidence-heading">

                                <h3>
                                    EVIDENCE COLLECTED
                                </h3>

                                <span>
                                   ${selectedFiles.length + selectedQuestions.length + (selectedFinalQuestion ? 1 : 0) + 3} items
                                </span>

                            </div>


                            <div class="round6-evidence-list">

                                ${selectedFiles.map(id => `
                                    <span class="round6-evidence-chip">
                                        DOC-${id}
                                    </span>
                                `).join("")}


                                ${selectedQuestions.map(id => `
                                    <span class="round6-evidence-chip">
                                        Q1-${id}
                                    </span>
                                `).join("")}
                                ${selectedFinalQuestion ? `
    <span class="round6-evidence-chip">
        Q2-${selectedFinalQuestion}
    </span>
` : ""}


                                <span class="round6-evidence-chip">
                                    Income Statement
                                </span>

                                <span class="round6-evidence-chip">
                                    Balance Sheet
                                </span>

                                <span class="round6-evidence-chip">
                                    Operating Metrics
                                </span>

                            </div>

                        </div>

                    </aside>


                    <!-- RIGHT -->
                    <main class="round6-main">

                        <div class="round6-progress">

                            <span class="completed">
                                ✓ Investigation
                            </span>

                            <i></i>

                            <span class="active">
                                6 Diagnosis
                            </span>

                            <i></i>

                            <span>
                                Treatment
                            </span>

                            <i></i>

                            <span>
                                Execution
                            </span>

                            <i></i>

                            <span>
                                Outcome
                            </span>

                        </div>


                        <div class="round6-panel">

                            <div class="round6-panel-heading">

                                <span>
                                    PRIMARY DIAGNOSIS
                                </span>

                                <h2>
                                    What is actually wrong with Toy Kingdom?
                                </h2>

                                <p>
                                    Select the diagnosis that best explains
                                    the company's financial condition based
                                    on the evidence available to you.
                                </p>

                            </div>


                            <div class="diagnosis-grid">

                                ${Object.entries(ROUND6_DIAGNOSES)
                                    .map(([id, diagnosis]) =>
                                        renderDiagnosisCard(id, diagnosis)
                                    )
                                    .join("")}

                            </div>


                            <div class="round6-actions">

                                <span>
                                    ${
                                        selectedDiagnosis
                                            ? "1 / 1 selected"
                                            : "0 / 1 selected"
                                    }
                                </span>


                                <button
                                    class="round6-confirm-button"
                                    onclick="confirmDiagnosis()"
                                    ${selectedDiagnosis ? "" : "disabled"}
                                >
                                    Confirm diagnosis
                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </section>
    `;
}


// ======================================================
// ROUND 6 — DIAGNOSIS CARD
// ======================================================

function renderDiagnosisCard(id, diagnosis) {

    const selected =
        selectedDiagnosis === id;

    return `
        <button
            class="
                diagnosis-card
                ${selected ? "selected" : ""}
            "
            onclick="selectDiagnosis('${id}')"
        >

            <div class="diagnosis-image-wrap">

                <img
                    src="${diagnosis.image}"
                    alt="${diagnosis.title}"
                >

            </div>


            <div class="diagnosis-card-content">

                <div class="diagnosis-card-top">

                    <span class="diagnosis-code">
                        ${diagnosis.code}
                    </span>

                    <span class="diagnosis-radio"></span>

                </div>


                <h3>
                    ${diagnosis.title}
                </h3>


                <p>
                    ${diagnosis.description}
                </p>

            </div>

        </button>
    `;
}


// ======================================================
// ROUND 6 — SELECT DIAGNOSIS
// ======================================================

function selectDiagnosis(id) {

    if (selectedDiagnosis === id) {

        selectedDiagnosis = null;

    } else {

        selectedDiagnosis = id;
    }

    renderRound6Diagnosis();
}


// ======================================================
// ROUND 6 — CONFIRM
// ======================================================

function confirmDiagnosis() {

    if (!selectedDiagnosis) {
        return;
    }

    goToScreen(13);
}
// ======================================================
// SCREEN 13 — ROUND 7 TREATMENT
// ======================================================

function renderRound7Treatment() {

    screenContent.innerHTML = `
        <section class="round7-screen">

            <div class="round7-shell">

                <header class="round7-heading">

                    <h1>
                        ROUND 7 - TREATMENT
                    </h1>

                    <p>
                        Choose exactly 1 out of 6 treatment plans.
                        No treatment plan wins on all criteria — each plan
                        bets on different financial and strategic trade-offs.
                    </p>

                </header>


                <div class="round7-layout">

                    <!-- LEFT SIDEBAR -->
                    <aside class="round7-sidebar">

                        <div class="round7-client-card">

                            <div class="client-pill">
                                Client: David · CEO
                            </div>

                            <img
                                src="${ASSET.davidRound2}"
                                alt="David Anderson"
                            >

                        </div>


                        <div class="round7-known-figures">

                            <h3>KNOWN FIGURES</h3>

                            <div>
                                <span>Cash FY2026</span>
                                <strong>$566m</strong>
                            </div>

                            <div>
                                <span>Debt snapshot</span>
                                <strong>$4,800m</strong>
                            </div>

                            <div>
                                <span>Measured EBITDA</span>
                                <strong>$792.0m</strong>
                            </div>

                        </div>


                        ${renderRound7Evidence()}

                    </aside>


                    <!-- RIGHT CONTENT -->
                    <main class="round7-main">

                        ${renderRound7Progress()}


                        <div class="round7-panel">

                            <div class="round7-panel-heading">

                                <span>
                                    TREATMENT PROTOCOL
                                </span>

                                <h2>
                                    Select a restructuring plan
                                </h2>

                            </div>


                            <div class="treatment-grid">

                                ${Object.entries(ROUND7_TREATMENTS)
                                    .map(([id, treatment]) =>
                                        renderTreatmentCard(id, treatment)
                                    )
                                    .join("")}

                            </div>


                            <div class="round7-actions">

                                <span>
                                    ${
                                        selectedTreatment
                                            ? "1 / 1 selected"
                                            : "0 / 1 selected"
                                    }
                                </span>


                                <button
                                    class="round7-next-button"
                                    onclick="confirmTreatment()"
                                    ${selectedTreatment ? "" : "disabled"}
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </section>
    `;
}


// ======================================================
// ROUND 7 — PROGRESS
// ======================================================

function renderRound7Progress() {

    const steps = [
        "Intake",
        "Clinic",
        "Case files",
        "Questions",
        "Financials",
        "Diagnosis",
        "Treatment"
    ];

    return `
        <div class="round7-progress-scroll">

            <div class="round7-progress">

                ${steps.map((step, index) => `

                    <div
                        class="
                            round7-progress-step
                            ${index < 6 ? "done" : ""}
                            ${index === 6 ? "active" : ""}
                        "
                    >

                        <span>
                            ${index}
                        </span>

                        <b>
                            ${step}
                        </b>

                    </div>

                    ${
                        index < steps.length - 1
                            ? `<i></i>`
                            : ""
                    }

                `).join("")}

            </div>

        </div>
    `;
}


// ======================================================
// ROUND 7 — EVIDENCE SIDEBAR
// ======================================================

function renderRound7Evidence() {

    const fileEvidence = selectedFiles.map(id => `
        <span class="round7-evidence-chip">
            <small>DOC</small>
            <span>Doc-${id}</span>
        </span>
    `).join("");


    const questionEvidence = selectedQuestions.map(id => `
        <span class="round7-evidence-chip">
            <small>Q1</small>
            <span>Q1-${id}</span>
        </span>
    `).join("");


    const finalQuestionEvidence = selectedFinalQuestion
        ? `
            <span class="round7-evidence-chip">
                <small>Q2</small>
                <span>Q2-${selectedFinalQuestion}</span>
            </span>
        `
        : "";


    const financialEvidence = `
        <span class="round7-evidence-chip">
            <small>FIN</small>
            <span>Income Statement</span>
        </span>

        <span class="round7-evidence-chip">
            <small>FIN</small>
            <span>Balance Sheet</span>
        </span>

        <span class="round7-evidence-chip">
            <small>FIN</small>
            <span>Operating Metrics</span>
        </span>
    `;


    return `
        <div class="round7-evidence">

            <div class="round7-evidence-heading">

                <h3>
                    ${
                        selectedFiles.length +
                        selectedQuestions.length +
                        (selectedFinalQuestion ? 1 : 0) +
                        3
                    } CHOSEN EVIDENCE
                </h3>

                <span>
                    reviewed evidence
                </span>

            </div>


            <div class="round7-evidence-list">

                ${fileEvidence}
                ${questionEvidence}
                ${finalQuestionEvidence}
                ${financialEvidence}

            </div>

        </div>
    `;
}


// ======================================================
// ROUND 7 — TREATMENT CARD
// ======================================================

function renderTreatmentCard(id, treatment) {

    const selected =
        selectedTreatment === id;

    return `
        <button
            class="
                treatment-card
                ${selected ? "selected" : ""}
            "
            onclick="selectTreatment('${id}')"
        >

            <div class="treatment-card-top">

                <span class="treatment-code">
                    ${id}
                </span>

                <h3>
                    ${treatment.title}
                </h3>

                <span class="treatment-radio"></span>

            </div>


            <p>
                ${treatment.description}
            </p>

        </button>
    `;
}


// ======================================================
// ROUND 7 — SELECT TREATMENT
// ======================================================

function selectTreatment(id) {

    if (selectedTreatment === id) {

        selectedTreatment = null;

    } else {

        selectedTreatment = id;
    }

    renderRound7Treatment();
}


// ======================================================
// ROUND 7 — CONFIRM
// ======================================================

function confirmTreatment() {

    if (!selectedTreatment) {
        return;
    }

    goToScreen(14);
}

// ======================================================
// SCREEN 14 — ROUND 8 TIMING
// ======================================================

function renderRound8Timing() {

    screenContent.innerHTML = `
        <section class="round8-screen">

            <div class="round8-shell">

                <header class="round8-heading">

                    <h1>
                        ROUND 8 - TIMING
                    </h1>

                    <p>
                        Select exactly 1 of the 4 timings.
                        There is no neutral option — each timing
                        trades off a different type of risk.
                    </p>

                </header>


                <div class="round8-layout">

                    <!-- LEFT SIDEBAR -->
                    <aside class="round8-sidebar">

                        <div class="round8-client-card">

                            <div class="client-pill">
                                Client: David · CEO
                            </div>

                            <img
                                src="${ASSET.davidRound2}"
                                alt="David Anderson"
                            >

                        </div>


                        <div class="round8-known-figures">

                            <h3>KNOWN FIGURES</h3>

                            <div>
                                <span>Cash FY2026</span>
                                <strong>$566m</strong>
                            </div>

                            <div>
                                <span>Debt snapshot</span>
                                <strong>$4,800m</strong>
                            </div>

                            <div>
                                <span>Measured EBITDA</span>
                                <strong>$792.0m</strong>
                            </div>

                        </div>


                        ${renderRound8Evidence()}

                    </aside>


                    <!-- RIGHT CONTENT -->
                    <main class="round8-main">

                        ${renderRound8Progress()}


                        <div class="round8-panel">

                            <div class="round8-panel-heading">

                                <span>
                                    STRATEGIC TIMING
                                </span>

                                <h2>
                                    Choose implementation timing
                                </h2>

                            </div>


                            <div class="timing-grid">

                                ${Object.entries(ROUND8_TIMINGS)
                                    .map(([id, timing]) =>
                                        renderTimingCard(id, timing)
                                    )
                                    .join("")}

                            </div>


                            <div class="round8-actions">

                                <span>
                                    ${
                                        selectedTiming
                                            ? "1 / 1 selected"
                                            : "0 / 1 selected"
                                    }
                                </span>


                                <button
                                    class="round8-next-button"
                                    onclick="confirmTiming()"
                                    ${selectedTiming ? "" : "disabled"}
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </section>
    `;
}


// ======================================================
// ROUND 8 — PROGRESS
// ======================================================

function renderRound8Progress() {

    const steps = [
        "Intake",
        "Clinic",
        "Case files",
        "Questions",
        "Financials",
        "Diagnosis",
        "Treatment",
        "Timing"
    ];

    return `
        <div class="round8-progress-scroll">

            <div class="round8-progress">

                ${steps.map((step, index) => `

                    <div
                        class="
                            round8-progress-step
                            ${index < 7 ? "done" : ""}
                            ${index === 7 ? "active" : ""}
                        "
                    >

                        <span>
                            ${index}
                        </span>

                        <b>
                            ${step}
                        </b>

                    </div>

                    ${
                        index < steps.length - 1
                            ? `<i></i>`
                            : ""
                    }

                `).join("")}

            </div>

        </div>
    `;
}


// ======================================================
// ROUND 8 — EVIDENCE SIDEBAR
// ======================================================

function renderRound8Evidence() {

    const fileEvidence = selectedFiles.map(id => `
        <span class="round8-evidence-chip">
            <small>DOC</small>
            <span>Doc-${id}</span>
        </span>
    `).join("");


    const questionEvidence = selectedQuestions.map(id => `
        <span class="round8-evidence-chip">
            <small>Q1</small>
            <span>Q1-${id}</span>
        </span>
    `).join("");


    const finalQuestionEvidence = selectedFinalQuestion
        ? `
            <span class="round8-evidence-chip">
                <small>Q2</small>
                <span>Q2-${selectedFinalQuestion}</span>
            </span>
        `
        : "";


    const financialEvidence = `
        <span class="round8-evidence-chip">
            <small>FIN</small>
            <span>Income Statement</span>
        </span>

        <span class="round8-evidence-chip">
            <small>FIN</small>
            <span>Balance Sheet FY2026</span>
        </span>

        <span class="round8-evidence-chip">
            <small>FIN</small>
            <span>Operating Metrics</span>
        </span>
    `;


    return `
        <div class="round8-evidence">

            <div class="round8-evidence-heading">

                <h3>
                    ${
                        selectedFiles.length +
                        selectedQuestions.length +
                        (selectedFinalQuestion ? 1 : 0) +
                        3
                    } CHOSEN EVIDENCE
                </h3>

                <span>
                    tap to review
                </span>

            </div>


            <div class="round8-evidence-list">

                ${fileEvidence}
                ${questionEvidence}
                ${finalQuestionEvidence}
                ${financialEvidence}

            </div>

        </div>
    `;
}


// ======================================================
// ROUND 8 — TIMING CARD
// ======================================================

function renderTimingCard(id, timing) {

    const selected =
        selectedTiming === id;

    return `
        <button
            class="
                timing-card
                ${selected ? "selected" : ""}
            "
            onclick="selectTiming('${id}')"
        >

            <div class="timing-card-top">

                <span class="timing-code">
                    ${id}
                </span>

                <h3>
                    ${timing.title}
                </h3>

                <span class="timing-radio"></span>

            </div>


            <p>
                ${timing.description}
            </p>

        </button>
    `;
}


// ======================================================
// ROUND 8 — SELECT TIMING
// ======================================================

function selectTiming(id) {

    if (selectedTiming === id) {

        selectedTiming = null;

    } else {

        selectedTiming = id;
    }

    renderRound8Timing();
}


// ======================================================
// ROUND 8 — CONFIRM
// ======================================================

function confirmTiming() {

    if (!selectedTiming) {
        return;
    }

    goToScreen(15);
}

// ======================================================
// SCREEN 15 — ROUND 9 PREPARATION
// ======================================================

function renderRound9Preparation() {

    screenContent.innerHTML = `
        <section class="round9-screen">

            <div class="round9-shell">

                <header class="round9-heading">

                    <h1>
                        ROUND 9 - PREPARATION
                    </h1>

                    <p>
                        Select exactly 3 out of 7 priority groups
                        before announcing the plan.
                    </p>

                </header>


                <div class="round9-layout">

                    <!-- LEFT SIDEBAR -->
                    <aside class="round9-sidebar">

                        <div class="round9-client-card">

                            <div class="client-pill">
                                Client: David · CEO
                            </div>

                            <img
                                src="${ASSET.davidRound2}"
                                alt="David Anderson"
                            >

                        </div>


                        <div class="round9-known-figures">

                            <h3>KNOWN FIGURES</h3>

                            <div>
                                <span>Cash FY2026</span>
                                <strong>$566m</strong>
                            </div>

                            <div>
                                <span>Debt snapshot</span>
                                <strong>$4,800m</strong>
                            </div>

                            <div>
                                <span>Measured EBITDA</span>
                                <strong>$792.0m</strong>
                            </div>

                        </div>


                        ${renderRound9Evidence()}

                    </aside>


                    <!-- RIGHT CONTENT -->
                    <main class="round9-main">

                        ${renderRound9Progress()}


                        <div class="round9-panel">

                            <div class="round9-panel-heading">

                                <span>
                                    STAKEHOLDER PREPARATION
                                </span>

                                <h2>
                                    Prioritize key stakeholder groups
                                </h2>

                            </div>


                            <div class="stakeholder-grid">

                                ${Object.entries(ROUND9_STAKEHOLDERS)
                                    .map(([id, stakeholder]) =>
                                        renderStakeholderCard(id, stakeholder)
                                    )
                                    .join("")}

                            </div>


                            <div class="round9-actions">

                                <span>
                                    ${selectedStakeholders.length} / 3 selected
                                </span>


                                <button
                                    class="round9-next-button"
                                    onclick="confirmStakeholders()"
                                    ${
                                        selectedStakeholders.length === 3
                                            ? ""
                                            : "disabled"
                                    }
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </section>
    `;
}


// ======================================================
// ROUND 9 — PROGRESS
// ======================================================

function renderRound9Progress() {

    const steps = [
        "Intake",
        "Clinic",
        "Case files",
        "Questions",
        "Financials",
        "Diagnosis",
        "Treatment",
        "Timing",
        "Preparation"
    ];

    return `
        <div class="round9-progress-scroll">

            <div class="round9-progress">

                ${steps.map((step, index) => `

                    <div
                        class="
                            round9-progress-step
                            ${index < 8 ? "done" : ""}
                            ${index === 8 ? "active" : ""}
                        "
                    >

                        <span>
                            ${index}
                        </span>

                        <b>
                            ${step}
                        </b>

                    </div>

                    ${
                        index < steps.length - 1
                            ? `<i></i>`
                            : ""
                    }

                `).join("")}

            </div>

        </div>
    `;
}


// ======================================================
// ROUND 9 — EVIDENCE SIDEBAR
// ======================================================

function renderRound9Evidence() {

    const fileEvidence = selectedFiles.map(id => `
        <span class="round9-evidence-chip">
            <small>DOC</small>
            <span>Doc-${id}</span>
        </span>
    `).join("");


    const questionEvidence = selectedQuestions.map(id => `
        <span class="round9-evidence-chip">
            <small>Q1</small>
            <span>Q1-${id}</span>
        </span>
    `).join("");


    const finalQuestionEvidence = selectedFinalQuestion
        ? `
            <span class="round9-evidence-chip">
                <small>Q2</small>
                <span>Q2-${selectedFinalQuestion}</span>
            </span>
        `
        : "";


    const financialEvidence = `
        <span class="round9-evidence-chip">
            <small>FIN</small>
            <span>Income Statement</span>
        </span>

        <span class="round9-evidence-chip">
            <small>FIN</small>
            <span>Balance Sheet FY2026</span>
        </span>

        <span class="round9-evidence-chip">
            <small>FIN</small>
            <span>Operating Metrics</span>
        </span>
    `;


    return `
        <div class="round9-evidence">

            <div class="round9-evidence-heading">

                <h3>
                    ${
                        selectedFiles.length +
                        selectedQuestions.length +
                        (selectedFinalQuestion ? 1 : 0) +
                        3
                    } CHOSEN EVIDENCE
                </h3>

                <span>
                    tap to review
                </span>

            </div>


            <div class="round9-evidence-list">

                ${fileEvidence}
                ${questionEvidence}
                ${finalQuestionEvidence}
                ${financialEvidence}

            </div>

        </div>
    `;
}


// ======================================================
// ROUND 9 — STAKEHOLDER CARD
// ======================================================

function renderStakeholderCard(id, stakeholder) {

    const selected =
        selectedStakeholders.includes(id);

    return `
        <button
            class="
                stakeholder-card
                ${selected ? "selected" : ""}
            "
            onclick="toggleStakeholder('${id}')"
        >

            <div class="stakeholder-card-top">

                <span class="stakeholder-code">
                    ${id}
                </span>

                <h3>
                    ${stakeholder.title}
                </h3>

                <span class="stakeholder-radio"></span>

            </div>


            <p>
                ${stakeholder.description}
            </p>

        </button>
    `;
}


// ======================================================
// ROUND 9 — SELECT STAKEHOLDER
// ======================================================

function toggleStakeholder(id) {

    const index =
        selectedStakeholders.indexOf(id);


    // Nếu đã chọn → cho phép bỏ chọn
    if (index >= 0) {

        selectedStakeholders.splice(index, 1);

    } else {

        // Đủ 3 rồi thì không cho chọn thêm
        if (selectedStakeholders.length >= 3) {
            return;
        }

        selectedStakeholders.push(id);
    }


    renderRound9Preparation();
}


// ======================================================
// ROUND 9 — CONFIRM
// ======================================================

function confirmStakeholders() {

    if (selectedStakeholders.length !== 3) {
        return;
    }

    currentProgressUpdate = 0;

    goToScreen(16);
}
// ======================================================
// SCREEN 16 — ROUND 10 PROGRESS
// ======================================================

function renderRound10Progress() {

    const update =
        ROUND10_UPDATES[currentProgressUpdate];

    const isLastUpdate =
        currentProgressUpdate === ROUND10_UPDATES.length - 1;

    screenContent.innerHTML = `
        <section class="round10-screen">

            <div class="round10-shell">

                <header class="round10-heading">

                    <h1>
                        ROUND 10 - PROGRESS
                    </h1>

                    <p>
                        Updates appear sequentially along the timeline;
                        they serve as data points for re-examination.
                    </p>

                </header>


                <div class="round10-layout">

                    <!-- LEFT SIDEBAR -->
                    <aside class="round10-sidebar">

                        <div class="round10-client-card">

                            <div class="client-pill">
                                Client: David · CEO
                            </div>

                            <img
                                src="${ASSET.davidRound2}"
                                alt="David Anderson"
                            >

                        </div>


                        <div class="round10-known-figures">

                            <h3>
                                KNOWN FIGURES
                            </h3>

                            <div>
                                <span>Cash FY2026</span>
                                <strong>$566m</strong>
                            </div>

                            <div>
                                <span>Debt snapshot</span>
                                <strong>$4,800m</strong>
                            </div>

                            <div>
                                <span>Measured EBITDA</span>
                                <strong>$792.0m</strong>
                            </div>

                        </div>


                        ${renderRound10Evidence()}

                    </aside>


                    <!-- RIGHT CONTENT -->
                    <main class="round10-main">

                        ${renderRound10TopProgress()}


                        <div class="round10-panel">

                            ${renderRound10UpdateTabs()}


                            <div class="round10-divider"></div>


                            <div class="round10-update-box">

                                <span class="round10-period">
                                    PROGRESS · PERIOD 1
                                </span>

                                <h2>
                                    ${update.title}
                                </h2>

                                <p>
                                    ${update.text}
                                </p>

                            </div>


                            <div class="round10-actions">

                                <button
                                    class="round10-next-button"
                                    onclick="${
                                        isLastUpdate
                                            ? "finishRound10()"
                                            : "nextProgressUpdate()"
                                    }"
                                >
                                    ${
                                        isLastUpdate
                                            ? "Next"
                                            : "Next update"
                                    }
                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </section>
    `;
}


// ======================================================
// ROUND 10 — TOP PROGRESS
// ======================================================

function renderRound10TopProgress() {

    const steps = [
        "Intake",
        "Clinic",
        "Case files",
        "Questions",
        "Financials",
        "Diagnosis",
        "Treatment",
        "Timing",
        "Preparation",
        "Progress"
    ];

    return `
        <div class="round10-progress-scroll">

            <div class="round10-progress">

                ${steps.map((step, index) => `

                    <div
                        class="
                            round10-progress-step
                            ${index < 9 ? "done" : ""}
                            ${index === 9 ? "active" : ""}
                        "
                    >

                        <span>
                            ${index}
                        </span>

                        <b>
                            ${step}
                        </b>

                    </div>

                    ${
                        index < steps.length - 1
                            ? `<i></i>`
                            : ""
                    }

                `).join("")}

            </div>

        </div>
    `;
}


// ======================================================
// ROUND 10 — UPDATE TABS
// ======================================================

function renderRound10UpdateTabs() {

    return `
        <div class="round10-tabs-scroll">

            <div class="round10-tabs">

                ${ROUND10_UPDATES.map((update, index) => {

                    const active =
                        index === currentProgressUpdate;

                    const revealed =
    index <= highestProgressUpdate;

                    return `
                        <button
                            class="
                                round10-tab
                                ${active ? "active" : ""}
                                ${revealed ? "revealed" : "locked"}
                            "
                            ${
                                revealed
                                    ? `onclick="openProgressUpdate(${index})"`
                                    : "disabled"
                            }
                        >
                            ${update.tab}
                        </button>
                    `;

                }).join("")}

            </div>

        </div>
    `;
}


// ======================================================
// ROUND 10 — EVIDENCE
// ======================================================

function renderRound10Evidence() {

    const fileEvidence =
        selectedFiles.map(id => `
            <span class="round10-evidence-chip">
                <small>DOC</small>
                <span>Doc-${id}</span>
            </span>
        `).join("");


    const questionEvidence =
        selectedQuestions.map(id => `
            <span class="round10-evidence-chip">
                <small>Q1</small>
                <span>Q1-${id}</span>
            </span>
        `).join("");


    const finalQuestionEvidence =
        selectedFinalQuestion
            ? `
                <span class="round10-evidence-chip">
                    <small>Q2</small>
                    <span>Q2-${selectedFinalQuestion}</span>
                </span>
            `
            : "";


    const financialEvidence = `
        <span class="round10-evidence-chip">
            <small>FIN</small>
            <span>Income Statement</span>
        </span>

        <span class="round10-evidence-chip">
            <small>FIN</small>
            <span>Balance Sheet FY2026</span>
        </span>

        <span class="round10-evidence-chip">
            <small>FIN</small>
            <span>Operating Metrics</span>
        </span>
    `;


    const evidenceCount =
        selectedFiles.length +
        selectedQuestions.length +
        (selectedFinalQuestion ? 1 : 0) +
        3;


    return `
        <div class="round10-evidence">

            <div class="round10-evidence-heading">

                <h3>
                    ${evidenceCount} CHOSEN EVIDENCE
                </h3>

                <span>
                    tap to review
                </span>

            </div>


            <div class="round10-evidence-list">

                ${fileEvidence}
                ${questionEvidence}
                ${finalQuestionEvidence}
                ${financialEvidence}

            </div>

        </div>
    `;
}


// ======================================================
// ROUND 10 — OPEN REVEALED UPDATE
// ======================================================

function openProgressUpdate(index) {

    if (index > highestProgressUpdate) {
        return;
    }

    currentProgressUpdate = index;

    renderRound10Progress();
}


// ======================================================
// ROUND 10 — NEXT UPDATE
// ======================================================

function nextProgressUpdate() {

    if (
        highestProgressUpdate <
        ROUND10_UPDATES.length - 1
    ) {

        highestProgressUpdate++;

        currentProgressUpdate =
            highestProgressUpdate;

        renderRound10Progress();
    }
}


// ======================================================
// ROUND 10 — FINISH
// ======================================================

function finishRound10() {

    round11Action = null;
    round11NewDiagnosis = null;
    round11NewTreatment = null;

    goToScreen(17);
}

// ======================================================
// SCREEN 17 — ROUND 11 FOLLOW-UP
// ======================================================

function renderRound11FollowUp() {

    if (round11Action === null) {
        renderRound11Main();
        return;
    }

    if (round11Action === "B") {
        renderRound11DiagnosisChange();
        return;
    }

    if (round11Action === "C") {
        renderRound11TreatmentChange();
        return;
    }

    if (round11Action === "D") {
        renderRound11BothChange();
        return;
    }
}


// ======================================================
// ROUND 11 — MAIN SCREEN
// ======================================================

function renderRound11Main() {

    screenContent.innerHTML = `
        <section class="round11-screen">

            <div class="round11-shell">

                ${renderRound11Header()}

                <div class="round11-layout">

                    <aside class="round11-sidebar">
                        ${renderRound11Sidebar()}
                    </aside>


                    <main class="round11-main">

                        ${renderRound11Progress()}

                        <div class="round11-panel round11-main-panel">

                            <div class="round11-panel-heading">

                                <span>
                                    RE-EVALUATION
                                </span>

                                <h2>
                                    Adjust diagnosis and treatment
                                </h2>

                            </div>


                            <div class="round11-main-content">

                                <img
                                    class="round11-doctor"
                                    src="${ASSET.round11Doctor}"
                                    alt="Financial counselor"
                                >


                                <div class="round11-action-list">

                                    ${renderRound11ActionCard(
                                        "A",
                                        "Keep the diagnosis",
                                        "Retain the diagnosis and treatment currently in effect."
                                    )}

                                    ${renderRound11ActionCard(
                                        "B",
                                        "Change the diagnosis",
                                        "Update the problem interpretation based on new data."
                                    )}

                                    ${renderRound11ActionCard(
                                        "C",
                                        "Change the treatment",
                                        "Switch to a new treatment plan for the next period."
                                    )}

                                    ${renderRound11ActionCard(
                                        "D",
                                        "Change both",
                                        "Update both the diagnosis and treatment for the next period."
                                    )}

                                </div>

                            </div>


                            <div class="round11-main-footer">

                                <p>
                                    Once confirmed, this selection will be
                                    locked in the record.
                                </p>

                                <button
                                    class="round11-next-button"
                                    onclick="confirmRound11Action()"
                                    disabled
                                    id="round11MainNext"
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </section>
    `;
}


// ======================================================
// ROUND 11 — COMMON HEADER
// ======================================================

function renderRound11Header() {

    return `
        <header class="round11-heading">

            <h1>
                ROUND 11 - FOLLOW-UP
            </h1>

            <p>
                Period 1 data has been saved.
                New decisions apply to the next period only.
            </p>

        </header>
    `;
}


// ======================================================
// ROUND 11 — SIDEBAR
// ======================================================

function renderRound11Sidebar() {

    return `
        <div class="round11-client-card">

            <div class="client-pill">
                Client: David · CEO
            </div>

            <img
                src="${ASSET.davidRound2}"
                alt="David Anderson"
            >

        </div>


        <div class="round11-known-figures">

            <h3>
                KNOWN FIGURES
            </h3>

            <div>
                <span>Cash FY2026</span>
                <strong>$566m</strong>
            </div>

            <div>
                <span>Debt snapshot</span>
                <strong>$4,800m</strong>
            </div>

            <div>
                <span>Measured EBITDA</span>
                <strong>$792.0m</strong>
            </div>

        </div>


        ${renderRound11Evidence()}
    `;
}


// ======================================================
// ROUND 11 — EVIDENCE
// ======================================================

function renderRound11Evidence() {

    const evidence = [];


    selectedFiles.forEach(id => {

        evidence.push(`
            <span class="round11-evidence-chip">
                <small>DOC</small>
                <span>Doc-${id}</span>
            </span>
        `);

    });


    selectedQuestions.forEach(id => {

        evidence.push(`
            <span class="round11-evidence-chip">
                <small>Q1</small>
                <span>Q1-${id}</span>
            </span>
        `);

    });


    if (selectedFinalQuestion) {

        evidence.push(`
            <span class="round11-evidence-chip">
                <small>Q2</small>
                <span>Q2-${selectedFinalQuestion}</span>
            </span>
        `);

    }


    evidence.push(`
        <span class="round11-evidence-chip">
            <small>FIN</small>
            <span>Income Statement</span>
        </span>
    `);

    evidence.push(`
        <span class="round11-evidence-chip">
            <small>FIN</small>
            <span>Balance Sheet FY2026</span>
        </span>
    `);

    evidence.push(`
        <span class="round11-evidence-chip">
            <small>FIN</small>
            <span>Operating Metrics</span>
        </span>
    `);


    ROUND10_UPDATES.forEach(update => {

        evidence.push(`
            <span class="round11-evidence-chip">
                <small>UPD</small>
                <span>${update.title.replace(" UPDATE", " update")}</span>
            </span>
        `);

    });


    return `
        <div class="round11-evidence">

            <div class="round11-evidence-heading">

                <h3>
                    ${evidence.length} CHOSEN EVIDENCE
                </h3>

                <span>
                    tap to review
                </span>

            </div>


            <div class="round11-evidence-list">
                ${evidence.join("")}
            </div>

        </div>
    `;
}


// ======================================================
// ROUND 11 — TOP PROGRESS
// ======================================================

function renderRound11Progress() {

    const steps = [
        "Intake",
        "Clinic",
        "Case files",
        "Questions",
        "Financials",
        "Diagnosis",
        "Treatment",
        "Timing",
        "Preparation",
        "Progress",
        "Follow-up"
    ];

    return `
        <div class="round11-progress-scroll">

            <div class="round11-progress">

                ${steps.map((step, index) => `

                    <div
                        class="
                            round11-progress-step
                            ${index < 10 ? "done" : ""}
                            ${index === 10 ? "active" : ""}
                        "
                    >

                        <span>
                            ${index}
                        </span>

                        <b>
                            ${step}
                        </b>

                    </div>

                    ${
                        index < steps.length - 1
                            ? `<i></i>`
                            : ""
                    }

                `).join("")}

            </div>

        </div>
    `;
}


// ======================================================
// ROUND 11 — MAIN ACTION CARD
// ======================================================

function renderRound11ActionCard(id, title, description) {

    return `
        <button
            class="
                round11-action-card
                ${round11Action === id ? "selected" : ""}
            "
            onclick="selectRound11Action('${id}')"
        >

            <span class="round11-action-code">
                ${id}
            </span>


            <div>

                <h3>
                    ${title}
                </h3>

                <p>
                    ${description}
                </p>

            </div>

        </button>
    `;
}


function selectRound11Action(id) {

    round11Action = id;

    // Không render ngay để tránh nhảy thẳng sang sub-screen.
    // Chỉ cập nhật trạng thái card trên màn hiện tại.

    document
        .querySelectorAll(".round11-action-card")
        .forEach(card => card.classList.remove("selected"));

    const cards =
        document.querySelectorAll(".round11-action-card");

    const ids = ["A", "B", "C", "D"];

    const index =
        ids.indexOf(id);

    if (cards[index]) {
        cards[index].classList.add("selected");
    }


    const nextButton =
        document.getElementById("round11MainNext");

    if (nextButton) {
        nextButton.disabled = false;
    }
}


function confirmRound11Action() {

    if (!round11Action) {
        return;
    }


    // A = giữ nguyên cả diagnosis và treatment
    if (round11Action === "A") {

        round11NewDiagnosis =
            selectedDiagnosis;

        round11NewTreatment =
            selectedTreatment;

        finishRound11();

        return;
    }


    // B / C / D sẽ render màn phụ tương ứng
    renderRound11FollowUp();
}


// ======================================================
// ROUND 11.1 — CHANGE DIAGNOSIS
// ======================================================

function renderRound11DiagnosisChange() {

    screenContent.innerHTML = `
        <section class="round11-screen">

            <div class="round11-shell">

                ${renderRound11Header()}


                <div class="round11-layout">

                    <aside class="round11-sidebar">
                        ${renderRound11Sidebar()}
                    </aside>


                    <main class="round11-main">

                        ${renderRound11Progress()}


                        <div class="round11-panel">

                            ${renderRound11DecisionHeader("B")}


                            <div class="round11-section-divider"></div>


                            <div class="round11-choice-heading">

                                <span>
                                    DIAGNOSIS FOR THE NEXT PERIOD
                                </span>

                                <h2>
                                    Choose a new diagnosis
                                </h2>

                            </div>


                            ${renderRound11DiagnosisGrid()}


                            <div class="round11-footer">

                                <button
                                    class="round11-next-button"
                                    onclick="confirmRound11Diagnosis()"
                                    ${round11NewDiagnosis ? "" : "disabled"}
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </section>
    `;
}


// ======================================================
// ROUND 11.2 — CHANGE TREATMENT
// ======================================================

function renderRound11TreatmentChange() {

    screenContent.innerHTML = `
        <section class="round11-screen">

            <div class="round11-shell">

                ${renderRound11Header()}


                <div class="round11-layout">

                    <aside class="round11-sidebar">
                        ${renderRound11Sidebar()}
                    </aside>


                    <main class="round11-main">

                        ${renderRound11Progress()}


                        <div class="round11-panel">

                            ${renderRound11DecisionHeader("C")}


                            <div class="round11-section-divider"></div>


                            <div class="round11-choice-heading">

                                <span>
                                    TREATMENT FOR THE NEXT PERIOD
                                </span>

                                <h2>
                                    Choose a new treatment
                                </h2>

                            </div>


                            ${renderRound11TreatmentGrid()}


                            <div class="round11-footer">

                                <button
                                    class="round11-next-button"
                                    onclick="confirmRound11Treatment()"
                                    ${round11NewTreatment ? "" : "disabled"}
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </section>
    `;
}


// ======================================================
// ROUND 11.3 — CHANGE BOTH
// ======================================================

function renderRound11BothChange() {

    screenContent.innerHTML = `
        <section class="round11-screen">

            <div class="round11-shell">

                ${renderRound11Header()}


                <div class="round11-layout">

                    <aside class="round11-sidebar">
                        ${renderRound11Sidebar()}
                    </aside>


                    <main class="round11-main">

                        ${renderRound11Progress()}


                        <div class="round11-panel round11-both-panel">

                            ${renderRound11DecisionHeader("D")}


                            <div class="round11-section-divider"></div>


                            <div class="round11-choice-heading">

                                <span>
                                    DIAGNOSIS FOR THE NEXT PERIOD
                                </span>

                                <h2>
                                    Choose a new diagnosis
                                </h2>

                            </div>


                            ${renderRound11DiagnosisGrid()}


                            <div class="round11-section-divider"></div>


                            <div class="round11-choice-heading">

                                <span>
                                    TREATMENT FOR THE NEXT PERIOD
                                </span>

                                <h2>
                                    Choose a new treatment
                                </h2>

                            </div>


                            ${renderRound11TreatmentGrid()}


                            <div class="round11-footer">

                                <button
                                    class="round11-next-button"
                                    onclick="confirmRound11Both()"
                                    ${
                                        round11NewDiagnosis &&
                                        round11NewTreatment
                                            ? ""
                                            : "disabled"
                                    }
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </section>
    `;
}


// ======================================================
// ROUND 11 — SELECTED ACTION HEADER
// ======================================================

function renderRound11DecisionHeader(selectedAction) {

    const actions = [
        {
            id: "A",
            title: "Keep the diagnosis",
            description:
                "Retain the diagnosis and treatment currently in effect."
        },
        {
            id: "B",
            title: "Change the diagnosis",
            description:
                "Update the problem interpretation based on new data."
        },
        {
            id: "C",
            title: "Change the treatment",
            description:
                "Switch to a new treatment plan for the next period."
        },
        {
            id: "D",
            title: "Change both",
            description:
                "Update both the diagnosis and treatment for the next period."
        }
    ];


    return `
        <div class="round11-panel-heading">

            <span>
                RE-EVALUATION
            </span>

            <h2>
                Adjust diagnosis and treatment
            </h2>

        </div>


        <div class="round11-subheader">

            <img
                class="round11-subheader-doctor"
                src="${ASSET.round11Doctor}"
                alt="Financial counselor"
            >


            <div class="round11-action-list">

                ${actions.map(action => `

                    <div
                        class="
                            round11-action-card
                            ${action.id === selectedAction ? "selected" : ""}
                        "
                    >

                        <span class="round11-action-code">
                            ${action.id}
                        </span>


                        <div>

                            <h3>
                                ${action.title}
                            </h3>

                            <p>
                                ${action.description}
                            </p>

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>
    `;
}


// ======================================================
// ROUND 11 — DIAGNOSIS GRID
// ======================================================

function renderRound11DiagnosisGrid() {

    return `
        <div class="round11-option-grid">

            ${Object.entries(ROUND6_DIAGNOSES)
                .map(([id, diagnosis]) => {

                    const selected =
                        round11NewDiagnosis === id;

                    return `
                        <button
                            class="
                                round11-option-card
                                ${selected ? "selected" : ""}
                            "
                            onclick="selectRound11Diagnosis('${id}')"
                        >

                            <span class="round11-option-code">
                                ${id}
                            </span>


                            <div>

                                <h3>
                                    ${getRound11DiagnosisTitle(id)}
                                </h3>

                                <p>
                                    ${diagnosis.description}
                                </p>

                            </div>


                            <span class="round11-radio"></span>

                        </button>
                    `;

                }).join("")}

        </div>
    `;
}


function getRound11DiagnosisTitle(id) {

    const titles = {

        A: "Competitive / E-commerce Disease",

        B: "Operating / Store Network Disease",

        C: "Liquidity Disease",

        D: "Capital Structure / Financing Disease",

        E: "Product & Category Disease",

        F: "Mixed Disease"

    };

    return titles[id];
}


function selectRound11Diagnosis(id) {

    round11NewDiagnosis = id;

    renderRound11FollowUp();
}


// ======================================================
// ROUND 11 — TREATMENT GRID
// ======================================================

function renderRound11TreatmentGrid() {

    return `
        <div class="round11-option-grid">

            ${Object.entries(ROUND7_TREATMENTS)
                .map(([id, treatment]) => {

                    const selected =
                        round11NewTreatment === id;

                    return `
                        <button
                            class="
                                round11-option-card
                                ${selected ? "selected" : ""}
                            "
                            onclick="selectRound11Treatment('${id}')"
                        >

                            <span class="round11-option-code">
                                ${id}
                            </span>


                            <div>

                                <h3>
                                    ${treatment.title}
                                </h3>

                                <p>
                                    ${treatment.description}
                                </p>

                            </div>


                            <span class="round11-radio"></span>

                        </button>
                    `;

                }).join("")}

        </div>
    `;
}


function selectRound11Treatment(id) {

    round11NewTreatment = id;

    renderRound11FollowUp();
}


// ======================================================
// ROUND 11 — CONFIRM SUB-SCREENS
// ======================================================

function confirmRound11Diagnosis() {

    if (!round11NewDiagnosis) {
        return;
    }

    // Diagnosis thay đổi
    selectedDiagnosis =
        round11NewDiagnosis;

    // Treatment giữ nguyên
    round11NewTreatment =
        selectedTreatment;

    finishRound11();
}


function confirmRound11Treatment() {

    if (!round11NewTreatment) {
        return;
    }

    // Diagnosis giữ nguyên
    round11NewDiagnosis =
        selectedDiagnosis;

    // Treatment thay đổi
    selectedTreatment =
        round11NewTreatment;

    finishRound11();
}


function confirmRound11Both() {

    if (
        !round11NewDiagnosis ||
        !round11NewTreatment
    ) {
        return;
    }

    selectedDiagnosis =
        round11NewDiagnosis;

    selectedTreatment =
        round11NewTreatment;

    finishRound11();
}


// ======================================================
// ROUND 11 — FINISH
// ======================================================

function finishRound11() {

    console.log(
        "ROUND 11 RESULT",
        {
            action: round11Action,
            diagnosis: selectedDiagnosis,
            treatment: selectedTreatment
        }
    );

    // Round 12 sẽ nối vào đây.
    alert(
        "Round 11 completed. Ready for Case Closure."
    );
}
// ======================================================
// START APP
// ======================================================

renderScreen();