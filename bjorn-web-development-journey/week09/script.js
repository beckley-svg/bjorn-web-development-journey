let learnerName = "Bjorn";
let practiceNumber = 5;
let isLearning = true;

console.log(learnerName);
console.log(practiceNumber);
console.log(isLearning);

document.getElementById("nameButton").addEventListener("click", function () {
    document.getElementById("output").textContent =
        "My name is " + learnerName;
});

document.getElementById("numberButton").addEventListener("click", function () {
    practiceNumber = practiceNumber + 1;
    document.getElementById("output").textContent =
        "The number is now " + practiceNumber;
});
