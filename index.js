let tasks = [];
let deletedTasks = [];


function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const task = {
      id: Date.now(),
      text: taskText,
      done: false,
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = "";
  }
}

function toggleTaskDone(taskId) {
  const task = tasks.find(t => t.id === taskId);
  task.done = !task.done;
  renderTasks();
}

function deleteTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  tasks = tasks.filter(t => t.id !== taskId);
  deletedTasks.push(task);
  renderTasks();
  renderDeletedTasks();
}

function restoreTask(taskId) {
  const task = deletedTasks.find(t => t.id === taskId);
  deletedTasks = deletedTasks.filter(t => t.id !== taskId);
  tasks.push(task);
  renderDeletedTasks();
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const taskElement = document.createElement("div");
    taskElement.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => toggleTaskDone(task.id));
    taskElement.appendChild(checkbox);

    const taskText = document.createElement("span");
    if (task.done) {
      taskText.className = "deleted";
    }
    taskText.innerText = task.text;
    taskElement.appendChild(taskText);

    const deleteIcon = document.createElement("span");
    deleteIcon.className = "bin";
    deleteIcon.innerHTML = "&#128465;";
    deleteIcon.addEventListener("click", () => deleteTask(task.id));
    taskElement.appendChild(deleteIcon);

    taskList.appendChild(taskElement);
  });
}
const registerButton = document.getElementById('register-button');
const registerModal = document.getElementById('register-modal');
const closeButton = document.getElementsByClassName('close')[0];

registerButton.addEventListener('click', function() {
  registerModal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  registerModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == registerModal) {
    registerModal.style.display = 'none';
  }
});


const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const items = document.querySelectorAll('.item');

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
