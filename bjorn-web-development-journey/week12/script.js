const nameInput = document.getElementById("name");
const favouriteInput = document.getElementById("favourite");
const message = document.getElementById("message");

document.getElementById("submitButton").addEventListener("click", function () {
    const name = nameInput.value.trim();
    const favourite = favouriteInput.value.trim();

    if (name === "" || favourite === "") {
        message.textContent = "Please fill in both fields.";
        return;
    }

    message.textContent =
        "Hi " + name + ". Your favourite subject is " + favourite + ".";
});

document.getElementById("clearButton").addEventListener("click", function () {
    nameInput.value = "";
    favouriteInput.value = "";
    message.textContent = "";
});
