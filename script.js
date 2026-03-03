// Dark Mode
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

// Digital Clock
function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerHTML = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// To-Do List
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value;

    if (taskValue === "") return;

    let li = document.createElement("li");
    li.textContent = taskValue;

    li.onclick = function() {
        this.style.textDecoration = "line-through";
    };

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
