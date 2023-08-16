// define UI variables
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearbtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')


// Load all event listeners (2)
loadEventListeners()

 
function loadEventListeners() {
    // add task event
    form.addEventListener('submit', addTask)
    taskList.addEventListener('click', removeTask)
    clearbtn.addEventListener('click', clearTasks)
}

 

function addTask(e) {
    if(taskInput.value === '') {alert('Add a task')
    }
    // create li
    const li = document.createElement('li')
    // add class
    li.className = 'collection-item'
    // // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value))
    const link = document.createElement('a')
    // // Add class
    link.className = 'delete-item secondary-content'
    // // Add HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to li
    li.appendChild(link);
    taskList.appendChild(li)

    // Clear Tasks
    taskInput.value = '';
    e.preventDefault()
}

 

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log(e.target)
        if(confirm('Are you sure lol?')){
            e.target.parentElement.parentElement.remove()
        }
    }
}

 
function clearTasks() {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
}