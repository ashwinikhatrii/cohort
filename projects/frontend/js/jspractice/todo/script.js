const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function updateCount() {
  taskCount.textContent = `Tasks: ${taskList.children.length}`;
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  checkbox.type = "checkbox";
  span.textContent = taskText;
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed", checkbox.checked);
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateCount();
  });

  li.append(checkbox, span, deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
  updateCount();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});