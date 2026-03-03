// Dark Mode with Persistence
function toggleMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
}

if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark-mode");
}

// Real-Time Clock
function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// Load Tasks from LocalStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("taskCount").innerText = tasks.length;
}

function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">❌</button>
        `;
        list.appendChild(li);
    });

    document.getElementById("taskCount").innerText = tasks.length;
}

function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value.trim() === "") return;

    tasks.push(input.value);
    input.value = "";
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Initial Load
renderTasks();
