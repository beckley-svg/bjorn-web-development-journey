function getName() {
    return document.getElementById("name").value;
}

function showGreeting() {
    const name = getName();

    if (name === "") {
        document.getElementById("message").textContent =
            "Please enter your name.";
    } else {
        document.getElementById("message").textContent =
            "Hello " + name + "!";
    }
}

function checkAge() {
    const age = Number(document.getElementById("age").value);

    if (age >= 18) {
        document.getElementById("message").textContent =
            "You are 18 or older.";
    } else {
        document.getElementById("message").textContent =
            "You are younger than 18.";
    }
}
