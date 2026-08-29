const nameInput = document.getElementById("nameInput");
const welcome = document.getElementById("welcome");

function showSavedName() {
    const savedName = localStorage.getItem("savedName");

    if (savedName) {
        welcome.textContent = "Welcome back " + savedName + "!";
        nameInput.value = savedName;
    } else {
        welcome.textContent = "No name has been saved yet.";
    }
}

document.getElementById("saveButton").addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (name !== "") {
        localStorage.setItem("savedName", name);
        showSavedName();
    }
});

document.getElementById("clearButton").addEventListener("click", function () {
    localStorage.removeItem("savedName");
    nameInput.value = "";
    showSavedName();
});

showSavedName();
