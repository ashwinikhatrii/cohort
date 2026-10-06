const API_URL =
"https://script.google.com/macros/s/AKfycbzrEiXZi67J5ginxsV8FChK-1qaM5rpStDnWXF9e-FG6gyurN3gC0CnBw8SF2RAR1DS/exec";


/* ==========================================
   GLOBAL VARIABLES
========================================== */

let allRecords = [];

let allCycles = [];

let selectedPerson = "";

let selectedValue = null;


/* ==========================================
   GET HTML ELEMENTS
========================================== */

const connectionStatus =
document.getElementById("connectionStatus");

const recordSection =
document.getElementById("recordSection");

const historySection =
document.getElementById("historySection");

const selectedPersonText =
document.getElementById("selectedPerson");

const historyPersonText =
document.getElementById("historyPerson");

const recordDate =
document.getElementById("recordDate");

const saveBtn =
document.getElementById("saveBtn");

const saveMessage =
document.getElementById("saveMessage");

const historyContainer =
document.getElementById("historyContainer");

const totalDays =
document.getElementById("totalDays");

const cycleFilter =
document.getElementById("cycleFilter");

const cycleInfo =
document.getElementById("cycleInfo");

const downloadBtn =
document.getElementById("downloadBtn");

const cycleModal =
document.getElementById("cycleModal");

const downloadCycle =
document.getElementById("downloadCycle");

const confirmDownload =
document.getElementById("confirmDownload");

const closeModal =
document.getElementById("closeModal");

const changePersonBtn =
document.getElementById("changePersonBtn");


/* ==========================================
   PAGE LOAD
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        setupEvents();

        loadRecords();

    }
);


/* ==========================================
   EVENT LISTENERS
========================================== */

function setupEvents() {


    /* PERSON CARDS */

    document
    .querySelectorAll(".person-card")
    .forEach(function(card) {

        card.addEventListener(
            "click",
            function() {

                selectedPerson =
                    card.dataset.person;

                selectedPersonText.textContent =
                    selectedPerson;

                historyPersonText.textContent =
                    selectedPerson;

                recordSection
                    .classList
                    .remove("hidden");

                historySection
                    .classList
                    .remove("hidden");

                loadCycles();

                window.scrollTo({

                    top:
                        recordSection.offsetTop - 20,

                    behavior:
                        "smooth"

                });

            }
        );

    });


    /* CHANGE PERSON */

    changePersonBtn.addEventListener(
        "click",
        function() {

            selectedPerson = "";

            selectedValue = null;

            allCycles = [];


            recordSection
                .classList
                .add("hidden");

            historySection
                .classList
                .add("hidden");


            document
            .querySelectorAll(".status-btn")
            .forEach(function(btn) {

                btn.classList.remove(
                    "selected"
                );

            });


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    /* FOOD STATUS BUTTONS */

    document
    .querySelectorAll(".status-btn")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                selectedValue =
                    Number(
                        button.dataset.value
                    );


                document
                .querySelectorAll(
                    ".status-btn"
                )
                .forEach(function(btn) {

                    btn.classList.remove(
                        "selected"
                    );

                });


                button.classList.add(
                    "selected"
                );

            }
        );

    });


    /* SAVE */

    saveBtn.addEventListener(
        "click",
        saveRecord
    );


    /* CYCLE FILTER */

    cycleFilter.addEventListener(
        "change",
        renderHistory
    );


    /* DOWNLOAD */

    downloadBtn.addEventListener(
        "click",
        openDownloadModal
    );


    /* CLOSE MODAL */

    closeModal.addEventListener(
        "click",
        function() {

            cycleModal
                .classList
                .add("hidden");

        }
    );


    /* CONFIRM DOWNLOAD */

    confirmDownload.addEventListener(
        "click",
        downloadPDF
    );

}


/* ==========================================
   LOAD ALL RECORDS
========================================== */

async function loadRecords() {

    try {

        connectionStatus.textContent =
            "Connecting to Google Sheets...";


        const response =
            await fetch(API_URL);


        if (!response.ok) {

            throw new Error(
                "Server error: " +
                response.status
            );

        }


        const data =
            await response.json();


        if (!data.success) {

            throw new Error(
                data.error ||
                "Unable to load records."
            );

        }


        allRecords =
            data.records || [];


        connectionStatus.textContent =
            "✓ Connected to Google Sheets";


        connectionStatus.style.color =
            "#4ade80";


        if (selectedPerson) {

            loadCycles();

        }


    }
    catch(error) {

        console.error(error);


        connectionStatus.textContent =
            "⚠ Google Sheets connection failed";


        connectionStatus.style.color =
            "#f87171";

    }

}


/* ==========================================
   SAVE RECORD
========================================== */

async function saveRecord() {


    if (!selectedPerson) {

        showMessage(
            "Please select a person.",
            "error"
        );

        return;

    }


    if (!recordDate.value) {

        showMessage(
            "Please select a date.",
            "error"
        );

        return;

    }


    if (selectedValue === null) {

        showMessage(
            "Please select food status.",
            "error"
        );

        return;

    }


    saveBtn.disabled = true;

    saveBtn.textContent =
        "Saving...";


    try {

        const response =
            await fetch(

                API_URL,

                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "text/plain;charset=utf-8"

                    },

                    body:

                        JSON.stringify({

                            action:
                                "saveOne",

                            date:
                                recordDate.value,

                            person:
                                selectedPerson,

                            value:
                                selectedValue

                        })

                }

            );


        const data =
            await response.json();


        if (!data.success) {

            throw new Error(

                data.error ||
                "Unable to save."

            );

        }


        showMessage(

            "✓ Record saved successfully!",

            "success"

        );


        selectedValue = null;


        document
        .querySelectorAll(
            ".status-btn"
        )
        .forEach(function(btn) {

            btn.classList.remove(
                "selected"
            );

        });


        await loadRecords();

        await loadCycles();


    }
    catch(error) {

        console.error(error);


        showMessage(

            "Error: " +
            error.message,

            "error"

        );

    }


    saveBtn.disabled = false;

    saveBtn.textContent =
        "Save Record";

}


/* ==========================================
   LOAD PAYMENT CYCLES
========================================== */

async function loadCycles() {


    if (!selectedPerson) {

        return;

    }


    try {

        const response =
            await fetch(

                API_URL,

                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "text/plain;charset=utf-8"

                    },

                    body:

                        JSON.stringify({

                            action:
                                "getCycles",

                            person:
                                selectedPerson

                        })

                }

            );


        const data =
            await response.json();


        if (!data.success) {

            throw new Error(

                data.error ||
                "Unable to load cycles."

            );

        }


        allCycles =
            data.cycles || [];


        updateCycleSelector();

        renderHistory();


    }
    catch(error) {

        console.error(error);


        historyContainer.innerHTML = `

            <div class="loading">

                Unable to load payment cycles.

            </div>

        `;

    }

}


/* ==========================================
   UPDATE CYCLE SELECTOR
========================================== */

function updateCycleSelector() {


    cycleFilter.innerHTML = `

        <option value="all">

            All Records

        </option>

    `;


    allCycles.forEach(
        function(cycle) {


            const option =
                document.createElement(
                    "option"
                );


            option.value =
                cycle.cycle;


            const status =
                cycle.completed
                    ? "Completed"
                    : "Current";


            option.textContent =

                "Cycle " +
                cycle.cycle +
                " — " +
                formatNumber(
                    cycle.totalDays
                ) +
                " Days (" +
                status +
                ")";


            cycleFilter.appendChild(
                option
            );

        }
    );

}


/* ==========================================
   RENDER HISTORY
========================================== */

function renderHistory() {


    if (!selectedPerson) {

        return;

    }


    let records = [];


    const selectedCycle =
        cycleFilter.value;


    /* ALL RECORDS */

    if (
        selectedCycle === "all"
    ) {


        allCycles.forEach(
            function(cycle) {


                records =
                    records.concat(

                        cycle.records.map(

                            function(record) {

                                return {

                                    date:
                                        record.date,

                                    value:
                                        record.value,

                                    cycle:
                                        cycle.cycle

                                };

                            }

                        )

                    );

            }
        );

    }


    /* SPECIFIC CYCLE */

    else {


        const cycle =
            allCycles.find(

                function(item) {

                    return (

                        String(
                            item.cycle
                        ) ===

                        String(
                            selectedCycle
                        )

                    );

                }

            );


        if (cycle) {


            records =
                cycle.records.map(

                    function(record) {

                        return {

                            date:
                                record.date,

                            value:
                                record.value,

                            cycle:
                                cycle.cycle

                        };

                    }

                );

        }

    }


    /* SORT DATE ASCENDING */

    records.sort(

        function(a, b) {

            return a.date.localeCompare(
                b.date
            );

        }

    );


    /* NO RECORDS */

    if (
        records.length === 0
    ) {


        historyContainer.innerHTML = `

            <div class="loading">

                No records found.

            </div>

        `;


        totalDays.textContent =
            "0";


        cycleInfo.innerHTML =
            "";


        return;

    }


    let total = 0;


    let html = `

        <div class="history-table-wrapper">

            <table class="history-table">

                <thead>

                    <tr>

                        <th>Date</th>

                        <th>Cycle</th>

                        <th>Status</th>

                        <th>Food Days</th>

                    </tr>

                </thead>

                <tbody>

    `;


    records.forEach(

        function(record) {


            total +=
                Number(
                    record.value
                );


            html += `

                <tr>

                    <td>

                        ${formatDate(
                            record.date
                        )}

                    </td>


                    <td>

                        Cycle ${record.cycle}

                    </td>


                    <td>

                        ${getStatusText(

                            Number(
                                record.value
                            )

                        )}

                    </td>


                    <td>

                        ${record.value}

                    </td>

                </tr>

            `;

        }

    );


    html += `

                </tbody>

            </table>

        </div>

    `;


    historyContainer.innerHTML =
        html;


    totalDays.textContent =
        formatNumber(total);


    updateCycleInfo(
        selectedCycle
    );

}


/* ==========================================
   CYCLE INFORMATION
========================================== */

function updateCycleInfo(
    selectedCycle
) {


    if (
        selectedCycle === "all"
    ) {

        cycleInfo.innerHTML =
            "";

        return;

    }


    const cycle =
        allCycles.find(

            function(item) {

                return (

                    String(
                        item.cycle
                    ) ===

                    String(
                        selectedCycle
                    )

                );

            }

        );


    if (!cycle) {

        cycleInfo.innerHTML =
            "";

        return;

    }


    const status =
        cycle.completed

            ? "✓ Payment Cycle Complete"

            : "Current Payment Cycle";


    cycleInfo.innerHTML = `

        <div style="

            padding:15px;

            border-radius:12px;

            background:#101722;

            border:1px solid #263143;

            color:#d1d5db;

        ">

            <strong>

                Cycle ${cycle.cycle}

            </strong>

            <br>


            ${formatDate(
                cycle.startDate
            )}

            →

            ${formatDate(
                cycle.endDate
            )}

            <br>


            Total:

            <strong>

                ${formatNumber(
                    cycle.totalDays
                )}

                Food Days

            </strong>

            <br>


            <span style="color:#4ade80">

                ${status}

            </span>

        </div>

    `;

}


/* ==========================================
   OPEN DOWNLOAD MODAL
========================================== */

function openDownloadModal() {


    if (!selectedPerson) {

        return;

    }


    if (
        allCycles.length === 0
    ) {

        alert(
            "No records available."
        );

        return;

    }


    downloadCycle.innerHTML = `

        <option value="">

            Select Payment Cycle

        </option>

    `;


    allCycles.forEach(

        function(cycle) {


            const option =
                document.createElement(
                    "option"
                );


            option.value =
                cycle.cycle;


            option.textContent =

                "Cycle " +
                cycle.cycle +
                " — " +
                formatNumber(
                    cycle.totalDays
                ) +
                " Days" +

                (

                    cycle.completed

                        ? " ✓"

                        : " — Current"

                );


            downloadCycle.appendChild(
                option
            );

        }

    );


    document.getElementById(
        "downloadPersonText"
    ).textContent =

        "Download " +
        selectedPerson +
        "'s payment cycle record.";


    cycleModal
        .classList
        .remove("hidden");

}


/* ==========================================
   DOWNLOAD PDF
========================================== */

function downloadPDF() {


    const cycleNumber =
        downloadCycle.value;


    if (!cycleNumber) {

        alert(
            "Please select a payment cycle."
        );

        return;

    }


    const cycle =
        allCycles.find(

            function(item) {

                return (

                    String(
                        item.cycle
                    ) ===

                    String(
                        cycleNumber
                    )

                );

            }

        );


    if (!cycle) {

        alert(
            "Cycle not found."
        );

        return;

    }


    const {
        jsPDF
    } = window.jspdf;


    const doc =
        new jsPDF();


    /* PDF TITLE */

    doc.setFontSize(20);

    doc.text(

        "MESS FOOD RECORD",

        105,

        20,

        {

            align: "center"

        }

    );


    /* PERSON */

    doc.setFontSize(12);

    doc.text(

        "Name: " +
        selectedPerson,

        15,

        35

    );


    /* CYCLE */

    doc.text(

        "Payment Cycle: " +
        cycle.cycle,

        15,

        43

    );


    /* DATE RANGE */

    doc.text(

        "Period: " +

        formatDate(
            cycle.startDate
        ) +

        " to " +

        formatDate(
            cycle.endDate
        ),

        15,

        51

    );


    /* TABLE DATA */

    const tableData = [];


    cycle.records.forEach(

        function(record) {


            tableData.push([

                formatDate(
                    record.date
                ),

                getStatusText(
                    Number(
                        record.value
                    )
                ),

                String(
                    record.value
                )

            ]);

        }

    );


    /* TABLE */

    doc.autoTable({

        startY: 60,

        head: [[

            "Date",

            "Food Status",

            "Food Days"

        ]],

        body:
            tableData,

        theme:
            "grid",

        styles: {

            fontSize: 10,

            cellPadding: 5

        }

    });


    /* TOTAL */

    const finalY =
        doc.lastAutoTable.finalY +
        15;


    doc.setFontSize(14);


    doc.text(

        "Total Food Days: " +

        formatNumber(
            cycle.totalDays
        ),

        15,

        finalY

    );


    /* STATUS */

    doc.setFontSize(10);


    doc.text(

        cycle.completed

            ? "Payment Cycle Completed"

            : "Current / Incomplete Payment Cycle",

        15,

        finalY + 9

    );


    /* FOOTER */

    doc.setFontSize(9);


    doc.text(

        "Generated by Mess Food Tracker",

        105,

        285,

        {

            align: "center"

        }

    );


    /* FILE NAME */

    const filename =

        selectedPerson +

        "_Cycle_" +

        cycle.cycle +

        "_Food_Record.pdf";


    doc.save(
        filename
    );


    cycleModal
        .classList
        .add("hidden");

}


/* ==========================================
   FOOD STATUS TEXT
========================================== */

function getStatusText(
    value
) {


    if (
        value === 1
    ) {

        return "✓✓ — 1 Day";

    }


    if (
        value === 0.5
    ) {

        return "✓X — 0.5 Day";

    }


    return "XX — 0 Day";

}


/* ==========================================
   FORMAT DATE
   YYYY-MM-DD → DD/MM/YYYY
========================================== */

function formatDate(
    dateString
) {


    const parts =
        String(
            dateString
        ).split("-");


    if (
        parts.length !== 3
    ) {

        return dateString;

    }


    return (

        parts[2] +

        "/" +

        parts[1] +

        "/" +

        parts[0]

    );

}


/* ==========================================
   FORMAT NUMBER
========================================== */

function formatNumber(
    number
) {


    number =
        Number(number);


    if (
        Number.isInteger(number)
    ) {

        return String(
            number
        );

    }


    return number.toFixed(1);

}


/* ==========================================
   SHOW MESSAGE
========================================== */

function showMessage(
    message,
    type
) {


    saveMessage.textContent =
        message;


    saveMessage.className =
        "message " + type;


    setTimeout(

        function() {

            saveMessage.textContent =
                "";

            saveMessage.className =
                "message";

        },

        4000

    );

}