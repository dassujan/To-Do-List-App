// Check if there are todos stored in local storage
var todos = JSON.parse(localStorage.getItem('todos')) || [];

// Function to save todos to local storage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to add a new todo
function newElement() {
    var inputValue = document.getElementById('myinput').value;

    if (inputValue === '') {
        alert('Please write something about your task here...');
    } else {
        var todo = {
            text: inputValue,
            completed: false,
        };

        todos.push(todo);
        saveTodos();

        var li = document.createElement('li');
        var t = document.createTextNode(inputValue);

        li.appendChild(t);

        document.getElementById('muUL').appendChild(li);
        document.getElementById('myinput').value = '';

        var span = document.createElement('SPAN');
        var txt = document.createTextNode('\u00D7');

        span.className = 'close';
        span.appendChild(txt);

        li.appendChild(span);

        span.onclick = function () {
            var div = this.parentElement;
            var todoText = div.textContent.trim();
            div.style.display = 'none';

            // Remove the todo from the todos array
            todos = todos.filter(function (todo) {
                return todo.text !== todoText;
            });

            saveTodos(); // Update local storage
        };
    }
}

// Function to load todos from local storage and display them
function loadTodos() {
    var ul = document.getElementById('muUL');

    todos.forEach(function (todo) {
        var li = document.createElement('li');
        var t = document.createTextNode(todo.text);

        li.appendChild(t);

        ul.appendChild(li);

        if (todo.completed) {
            li.classList.add('checked');
        }

        var span = document.createElement('SPAN');
        var txt = document.createTextNode('\u00D7');

        span.className = 'close';
        span.appendChild(txt);

        li.appendChild(span);

        span.onclick = function () {
            var div = this.parentElement;
            var todoText = div.textContent.trim();
            div.style.display = 'none';

            // Remove the todo from the todos array
            todos = todos.filter(function (todo) {
                return todo.text !== todoText;
            });

            saveTodos(); // Update local storage
        };
    });
}

// Load and display todos on page load
loadTodos();

// Event listener to mark a todo as completed
var list = document.querySelector('ul');
list.addEventListener(
    'click',
    function (e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');

            // Update the completed status in the todos array and local storage
            var todoText = e.target.textContent.trim();
            todos.forEach(function (todo) {
                if (todo.text === todoText) {
                    todo.completed = !todo.completed;
                }
            });

            saveTodos();
        }
    },
    false
);
