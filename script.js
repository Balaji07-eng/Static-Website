// Dark Mode
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

// Clock
function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// Weather API (Use OpenWeatherMap Free API)
const apiKey = "f6efecf9bf189bb98b17853bb416f3d7";
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("weather").innerText =
            `${data.main.temp}°C - ${data.weather[0].description}`;
    })
    .catch(() => {
        document.getElementById("weather").innerText = "Weather unavailable";
    });

// Load Quote Function
function loadQuote() {

    fetch("https://type.fit/api/quotes")
        .then(response => response.json())  // Convert to JSON
        .then(data => {

            // Pick random quote
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];

            // Display quote
            document.getElementById("quote").innerText =
                `"${randomQuote.text}" - ${randomQuote.author || "Unknown"}`;

        })
        .catch(error => {

            console.error("Error fetching quote:", error);

            document.getElementById("quote").innerText =
                "Quote unavailable. Check internet connection.";

        });
}

// Call function when page loads
loadQuote();

// To-Do with LocalStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${task} 
        <button onclick="deleteTask(${index})">❌</button>`;
        list.appendChild(li);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value.trim() === "") return;
    tasks.push(input.value);
    input.value = "";
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();
