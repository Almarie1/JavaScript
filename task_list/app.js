//define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all eventy listeners
loadEventListeners();

function loadEventListeners() {
    //add task event
    form.addEventListener('submit', addTask);
}

function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }
    //create li element
    const li = document.createElement('li');
    //add class - add meterialize class
    li.className = 'collection-item';
    //create a text note and append to li
    li.appendChild(document.createTextNode(taskInput.value));\
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item-secondary-content';
    //add icon html
    link.innerHTML = '<i class ="fa fa-remove"></i>'; //create an x mark icon
    //append the link to li
    li.appendChild(link);
    taskList.appendChild(li);

    //clear input
    taskInput.value = '';
    e.preventDefault();

}