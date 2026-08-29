const tips = [
    "Break a big task into one small first step.",
    "Put your phone away for one focused session.",
    "Test yourself instead of only rereading notes.",
    "Take a short break after a focused block of work.",
    "Explain the topic out loud to check what you know."
];

const tipButton = document.getElementById("tipButton");

if (tipButton) {
    tipButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * tips.length);
        document.getElementById("tipText").textContent = tips[randomIndex];
    });
}

const sessionCount = document.getElementById("sessionCount");
const addSession = document.getElementById("addSession");
const resetSessions = document.getElementById("resetSessions");

if (sessionCount && addSession && resetSessions) {
    let count = Number(localStorage.getItem("studySessions")) || 0;

    function showCount() {
        sessionCount.textContent = count;
    }

    addSession.addEventListener("click", function () {
        count++;
        localStorage.setItem("studySessions", count);
        showCount();
    });

    resetSessions.addEventListener("click", function () {
        count = 0;
        localStorage.removeItem("studySessions");
        showCount();
    });

    showCount();
}
