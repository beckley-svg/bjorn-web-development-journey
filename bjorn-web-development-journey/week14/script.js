const topics = [
    "HTML structure",
    "CSS layouts",
    "JavaScript functions",
    "Arrays",
    "Loops"
];

console.log("First topic:", topics[0]);

for (let i = 0; i < topics.length; i++) {
    console.log(topics[i]);
}

document.getElementById("showButton").addEventListener("click", function () {
    const list = document.getElementById("practiceList");
    list.innerHTML = "";

    topics.forEach(function (topic) {
        const item = document.createElement("li");
        item.textContent = topic;
        list.appendChild(item);
    });
});
