const form = document.getElementById("signupForm");
const message = document.getElementById("message");

function looksLikeEmail(email) {
    return email.includes("@") && email.includes(".");
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const year = document.getElementById("year").value.trim();

    if (name === "" || email === "" || year === "") {
        message.textContent = "Please complete all three fields.";
        message.className = "error";
        return;
    }

    if (!looksLikeEmail(email)) {
        message.textContent = "Please enter a valid email address.";
        message.className = "error";
        return;
    }

    const yearNumber = Number(year);

    if (yearNumber < 1 || yearNumber > 12) {
        message.textContent = "Please enter a school year from 1 to 12.";
        message.className = "error";
        return;
    }

    message.textContent = "Form submitted successfully.";
    message.className = "success";
});
