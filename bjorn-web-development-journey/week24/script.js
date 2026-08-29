const tips = [
    "Break a big task into one small first step.",
    "Put your phone away for one focused session.",
    "Test yourself instead of only rereading notes.",
    "Take a short break after a focused block of work."
];

const tipButton = document.getElementById("tipButton");

if (tipButton) {
    tipButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * tips.length);
        document.getElementById("tipText").textContent = tips[randomIndex];
    });
}
