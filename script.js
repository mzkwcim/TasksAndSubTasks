document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== '') {
        addTask(taskInput);
        document.getElementById('taskInput').value = ''; 
    }
});

function addTask(taskContent) {
    var taskList = document.getElementById('taskList');

    var li = document.createElement('li');
    
    var taskText = document.createElement('input');
    taskText.setAttribute('type', 'text');
    taskText.setAttribute('value', taskContent);
    taskText.setAttribute('readonly', 'true');
    taskText.style.width = 'calc(70% - 170px)';

    var buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'inline-block';
    
    var addButton = document.createElement('button');
    addButton.textContent = 'Dodaj';
    addButton.addEventListener('click', function() {
        addSubTask(li, '');
    });

    var editButton = document.createElement('button');
    editButton.textContent = 'Edytuj';
    editButton.addEventListener('click', function() {
        toggleEditMode(taskText, editButton);
    });

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Usuń';
    removeButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    buttonsContainer.appendChild(addButton);
    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(removeButton);

    li.appendChild(taskText);
    li.appendChild(buttonsContainer);

    taskList.appendChild(li);

    taskText.addEventListener('focus', function() {
        editButton.textContent = 'Zapisz';
        taskText.removeAttribute('readonly');
    });

    taskText.addEventListener('blur', function() {
        editButton.textContent = 'Edytuj';
        taskText.setAttribute('readonly', 'true');
    });
}

function addSubTask(parentLi, subTaskContent) {
    var subList = document.createElement('ul');
    var subLi = document.createElement('li');

    var subTaskText = document.createElement('input');
    subTaskText.setAttribute('type', 'text');
    subTaskText.setAttribute('value', subTaskContent);
    subTaskText.setAttribute('readonly', 'true');
    subTaskText.style.width = 'calc(70% - 170px)';

    var subButtonsContainer = document.createElement('div');
    subButtonsContainer.style.display = 'inline-block';

    var editButton = document.createElement('button');
    editButton.textContent = 'Edytuj';
    editButton.addEventListener('click', function() {
        toggleEditMode(subTaskText, editButton);
    });

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Usuń';
    removeButton.addEventListener('click', function() {
        subList.removeChild(subLi);
    });

    subButtonsContainer.appendChild(editButton);
    subButtonsContainer.appendChild(removeButton);

    subLi.appendChild(subTaskText);
    subLi.appendChild(subButtonsContainer);
    subList.appendChild(subLi);
    parentLi.appendChild(subList);

    subTaskText.addEventListener('focus', function() {
        editButton.textContent = 'Zapisz';
        subTaskText.removeAttribute('readonly');
    });

    subTaskText.addEventListener('blur', function() {
        editButton.textContent = 'Edytuj';
        subTaskText.setAttribute('readonly', 'true');
    });
}

function toggleEditMode(inputElement, editButton) {
    if (inputElement.readOnly) {
        inputElement.readOnly = false;
        editButton.textContent = 'Zapisz';
    } else {
        inputElement.readOnly = true;
        editButton.textContent = 'Edytuj';
    }
}

document.addEventListener('click', function(event) {
    var activeElement = document.activeElement;
    if (activeElement.tagName === 'INPUT') {
        return; 
    }

    var inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.blur(); 
    });
});







