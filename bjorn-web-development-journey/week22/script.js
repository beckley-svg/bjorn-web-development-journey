const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");
const helloButton = document.getElementById("helloButton");
const resetButton = document.getElementById("resetButton");

helloButton.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (name === "") {
        message.textContent = "Please type your name first.";
    } else {
        message.textContent = "Hello " + name + "!";
    }
});

resetButton.addEventListener("click", function () {
    nameInput.value = "";
    message.textContent = "Waiting for input...";
});
