const CASE_01 = {

    id: "case-01",

    caseNumber: "01",

    company: "Toy Kingdom Inc.",

    caseType: "Corporate Financial Distress",

    playerRole: "Junior Financial Counselor",


    // =========================
    // CASE INTRODUCTION
    // =========================

    introduction: {

        eyebrow: "CASE #01 · CORPORATE FINANCE",

        title: "Toy Kingdom Inc.",

        subtitle:
            "A profitable retail business is running out of financial room.",

        description:
            "Toy Kingdom is one of the world's largest specialty toy retailers. Despite strong sales and positive operating earnings, the company is facing increasing pressure from debt, interest obligations, liquidity needs, and changing market conditions.",

        mission:
            "Your task is not simply to find a bad number. You must determine which financial problem matters most, identify the evidence supporting your diagnosis, and recommend a defensible course of action."

    },


    // =========================
    // PLAYER ROLE
    // =========================

    role: {

        title: "Your Role",

        name: "Junior Financial Counselor",

        description:
            "You have been assigned to review Toy Kingdom's financial condition and prepare an initial recommendation for the senior advisory team."

    },


    // =========================
    // CASE SNAPSHOT
    // =========================

    snapshot: [

        {
            label: "Net Sales",
            value: "$11.54B"
        },

        {
            label: "Adjusted EBITDA",
            value: "$792M"
        },

        {
            label: "Total Debt",
            value: "$4.80B"
        },

        {
            label: "Interest Expense",
            value: "$457M"
        }

    ],


    // =========================
    // SIX PHASES
    // =========================

    phases: [

        {
            id: 1,
            title: "Client Intake & Investigation",
            shortTitle: "Investigation"
        },

        {
            id: 2,
            title: "Diagnosis",
            shortTitle: "Diagnosis"
        },

        {
            id: 3,
            title: "Treatment & Execution",
            shortTitle: "Treatment"
        },

        {
            id: 4,
            title: "Consequence",
            shortTitle: "Consequence"
        },

        {
            id: 5,
            title: "Reassessment",
            shortTitle: "Reassessment"
        },

        {
            id: 6,
            title: "Final Assessment",
            shortTitle: "Final Report"
        }

    ]

};