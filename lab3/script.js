let tasks = [];

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const data = localStorage.getItem("tasks");
  if (data) {
    tasks = JSON.parse(data);
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.isDone ? "completed" : "";
    li.innerHTML = `
      <span>${task.name}</span>
      <div>
        <button class="complete" onclick="toggleTask(${index})">✓</button>
        <button onclick="deleteTask(${index})">X</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskName = input.value.trim();

  if (!taskName) return;

  tasks.push({ name: taskName, isDone: false });
  input.value = "";
  saveTasksToLocalStorage();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].isDone = !tasks[index].isDone;
  saveTasksToLocalStorage();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasksToLocalStorage();
  renderTasks();
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);

window.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);
