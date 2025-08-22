var highPriorityTasks = [];
var lowPriorityTasks = [];
var deadlineCrossedTasks = [];
var today = new Date();

document.getElementById('addButton').addEventListener('click', function () {
    var taskInput = document.getElementById('taskInput');
    var deadlineInput = document.getElementById('deadlineInput');

    var newTask = {
        description: taskInput.value,
        deadline: deadlineInput.value,
        done: false,
    };

    var taskDeadline = new Date(deadlineInput.value);

    if (taskDeadline.getTime() < today.getTime()) {
        deadlineCrossedTasks.push(newTask);
    } else if (taskDeadline.getTime() <= today.getTime() + (3 * 24 * 60 * 60 * 1000)) {
        highPriorityTasks.push(newTask);
    } else {
        lowPriorityTasks.push(newTask);
    }

    displayTasks();

    taskInput.value = '';
    deadlineInput.value = '';
});

function createTaskElement(task, index, priorityClass) {
    var taskItem = document.createElement('div');
    taskItem.className = 'todo-item';
    taskItem.classList.add(priorityClass);

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;

    var label = document.createElement('label');
    label.textContent = task.description + ' (Deadline: ' + task.deadline + ')';

    if (task.done) {
        label.style.textDecoration = 'line-through';
    }

    checkbox.addEventListener('change', function () {
        task.done = this.checked;
        if (task.done) {
            label.style.textDecoration = 'line-through';
        } else {
            label.style.textDecoration = 'none';
        }
        displayTasks();
    });

    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('data-index', index);
    deleteButton.addEventListener('click', function () {
        if (priorityClass === 'high-priority') {
            highPriorityTasks.splice(index, 1);
        } else if (priorityClass === 'low-priority') {
            lowPriorityTasks.splice(index, 1);
        } else {
            deadlineCrossedTasks.splice(index, 1);
        }
        displayTasks();
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);
    taskItem.appendChild(deleteButton);

    return taskItem;
}

function displayTasks() {
    var highPriorityContainer = document.getElementById('highPriorityContainer');
    var lowPriorityContainer = document.getElementById('lowPriorityContainer');
    var deadlineCrossedContainer = document.getElementById('deadlineCrossedContainer');

    highPriorityContainer.innerHTML = '';
    lowPriorityContainer.innerHTML = '';
    deadlineCrossedContainer.innerHTML = '';

    highPriorityTasks.forEach(function (task, index) {
        var taskItem = createTaskElement(task, index, 'high-priority');
        highPriorityContainer.appendChild(taskItem);
    });

    lowPriorityTasks.forEach(function (task, index) {
        var taskItem = createTaskElement(task, index, 'low-priority');
        lowPriorityContainer.appendChild(taskItem);
    });

    deadlineCrossedTasks.forEach(function (task, index) {
        var taskItem = createTaskElement(task, index, 'deadline-crossed');
        deadlineCrossedContainer.appendChild(taskItem);
    });
}
