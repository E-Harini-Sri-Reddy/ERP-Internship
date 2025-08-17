const button = document.getElementById('add-btn');
const input = document.getElementById('task');
const dateInput = document.getElementById('due-date');
const ul = document.getElementById('to-do');

button.addEventListener('click', addItemToList);
function addItemToList() {
    const taskText = input.value.trim();
    const dueDate = dateInput.value;

    if (taskText === '' || dueDate === '') return;

    const newTask = document.createElement('li');

    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const textNode = document.createTextNode(taskText + ' ');

    const dateSpan = document.createElement('span');
    dateSpan.textContent = `(Due: ${dueDate})`;
    dateSpan.style.fontSize = '0.9em';
    dateSpan.style.color = '#555';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    checkbox.addEventListener('change', () => {
        newTask.classList.toggle('completed', checkbox.checked);
    });

    deleteBtn.addEventListener('click', () => {
        ul.removeChild(newTask);
    });

    const priorityClass = getPriorityClass(dueDate);
    if (priorityClass) {
        newTask.classList.add(priorityClass);
    }

    taskContent.appendChild(checkbox);
    taskContent.appendChild(textNode);
    taskContent.appendChild(dateSpan);

    newTask.appendChild(taskContent);
    newTask.appendChild(deleteBtn);

    ul.appendChild(newTask);

    input.value = '';
    dateInput.value = '';
}

function getPriorityClass(dueDateStr) {
    const dueDate = new Date(dueDateStr);
    const today = new Date();

    dueDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const timeDiff = dueDate - today;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff === 0 || daysDiff === 1) {
        return 'priority-high';
    } else if (daysDiff === 2) {
        return 'priority-medium';
    } else if (daysDiff === 3) {
        return 'priority-low';
    } else {
        return '';
    }
}
