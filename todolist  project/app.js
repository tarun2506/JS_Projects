// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');



// Event Listeners
document.addEventListener('DOMContentLoaded', getTodo);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo(event){
  // Prevent form from submitting 
  event.preventDefault();
  // Todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // Create Li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // Add Todo to localStorage:
  saveLocalTodo(todoInput.value);
  // CheckMark button 
  const checkMarkButton = document.createElement('button');
  checkMarkButton.innerHTML = `<i class="fas fa-check"></i>`;
  checkMarkButton.classList.add('check-btn');
  todoDiv.appendChild(checkMarkButton);
  // Trash button 
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);  
  // Append to ul
  todoList.appendChild(todoDiv);
  // Clear the input field
  todoInput.value='';
}


function deleteCheck(e){
  const item = e.target;
  // Delete todo
  if(item.classList[0] === 'trash-btn'){
    const todo = item.parentNode;
    // Animation
    todo.classList.add('fall');
    deleteLocalTodo(todo);
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });  
  }
  // Check mark
  if(item.classList[0]==='check-btn'){
    const todo = item.parentNode;
    todo.classList.toggle('completed');
  }
};

 
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains('completed')){
          todo.style.display ="flex";
        }else{
          todo.style.display ='none';
        }
        break;
        case "uncompleted":
          if(!todo.classList.contains('completed')){
            todo.style.display = "flex";
          }else{
            todo.style.display = "none";
          }
          break;
    }
  })

};

function saveLocalTodo(todo){
  // Check DO I alr have things in there
  if(localStorage.getItem("todos") === null){
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};


function getTodo(){
  // Check DO I alr have things in there
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo){
  // Todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // Create Li
  const newTodo = document.createElement('li');
  newTodo.innerText = todo;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // CheckMark button 
  const checkMarkButton = document.createElement('button');
  checkMarkButton.innerHTML = `<i class="fas fa-check"></i>`;
  checkMarkButton.classList.add('check-btn');
  todoDiv.appendChild(checkMarkButton);
  // Trash button 
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);  
  // Append to ul
  todoList.appendChild(todoDiv);
  });
};


function deleteLocalTodo(todo){
  // Check DO I alr have things in there
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}