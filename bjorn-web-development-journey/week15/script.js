function getNumbers() {
    const firstValue = document.getElementById("number1").value;
    const secondValue = document.getElementById("number2").value;

    if (firstValue === "" || secondValue === "") {
        return null;
    }

    return {
        first: Number(firstValue),
        second: Number(secondValue)
    };
}

function calculate(operation) {
    const numbers = getNumbers();
    const result = document.getElementById("result");

    if (numbers === null) {
        result.textContent = "Result: Please enter both numbers.";
        return;
    }

    let answer;

    if (operation === "add") {
        answer = numbers.first + numbers.second;
    } else if (operation === "subtract") {
        answer = numbers.first - numbers.second;
    } else if (operation === "multiply") {
        answer = numbers.first * numbers.second;
    } else if (operation === "divide") {
        if (numbers.second === 0) {
            result.textContent = "Result: Cannot divide by zero.";
            return;
        }
        answer = numbers.first / numbers.second;
    }

    result.textContent = "Result: " + answer;
}

function clearCalculator() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("result").textContent = "Result:";
}
