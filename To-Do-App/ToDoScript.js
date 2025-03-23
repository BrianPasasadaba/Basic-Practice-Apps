document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTask');
    const input = document.getElementById('taskInput');
    const list = document.getElementById('taskList');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    addButton.addEventListener('click', function() {
        const task = input.value;
        if (task) {
            const li = document.createElement('li');
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.textContent = task;
            list.appendChild(li);

            tasks.push(task);
            saveTasks();
            input.value = '';

            const deleteButton = document.createElement('button');
            deleteButton.className = "btn btn-danger";
            deleteButton.textContent = "Delete";
            li.appendChild(deleteButton);

            deleteButton.addEventListener('click', function() {
                const index = tasks.indexOf(task);
                tasks.splice(index, 1);
                saveTasks();
                li.remove();
            })

        }
    })

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.textContent = task;
            list.appendChild(li);

            const deleteButton = document.createElement('button');
            deleteButton.className = "btn btn-danger";
            deleteButton.textContent = "Delete";
            li.appendChild(deleteButton);

            deleteButton.addEventListener('click', function() {
                const index = tasks.indexOf(task);
                tasks.splice(index, 1);
                saveTasks();
                li.remove();
            })
        })
    }

    

    loadTasks();
})