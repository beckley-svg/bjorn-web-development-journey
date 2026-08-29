const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const item = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        const text = document.createElement("span");
        text.textContent = " " + task.text;

        if (task.completed) {
            text.classList.add("completed");
        }

        checkbox.addEventListener("change", function () {
            tasks[index].completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function () {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(document.createTextNode(" "));
        item.appendChild(removeButton);
        taskList.appendChild(item);
    });
}

document.getElementById("addButton").addEventListener("click", function () {
    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    taskInput.value = "";
    saveTasks();
    renderTasks();
});

renderTasks();
