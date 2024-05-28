// Initializes all of the necessary HTML elements
const formContainer = document.getElementById('form-container');
const listContainer = document.getElementById('list-container');

const newTaskButton = document.getElementById('new-task-button');
const formTaskButton = document.getElementById('alter-tasks-button');
const formCancelButton = document.getElementById('form-cancel-button');

const formTitleInput = document.getElementById('form-title');
const formDateInput = document.getElementById('form-date');
const formDescriptionInput = document.getElementById('form-description');

const taskData = JSON.parse(localStorage.getItem('tasks')) || [];

// Checks if the taskData array has elements in it on page load, if so call the method to load all of the task items.
if (taskData.length) {
    loadTaskData();
}

// Loads all of the task items into the listContainer
function loadTaskData() {
    // Clears the list container in case any task was edited or removed
    listContainer.innerHTML = ``;
    // Iterates through the taskData array.
    for (const index in taskData) {
        // Appends a the task item to the list container
        listContainer.innerHTML += `<div class="task" id="item-${index}">
            <p><strong>Title:</strong> ${taskData[index].taskName}</p>
            <p><strong>Date:</strong> ${taskData[index].taskDate}</p>
            <p><strong>Description:</strong> ${taskData[index].taskDescription}</p>
            <h4 class="header-button">Edit</h4>
            <h4 class="header-button">Delete</h4>
            </div>`
    }
}

// Initializes a new taskObject to store the necessary information for each task item.
function taskObject(id, name, date, description) {
    this.taskID = id;
    this.taskName = name;
    this.taskDate = date;
    this.taskDescription = description;
}

// Resets all of the containers to their original states, formContainer will be hidden, and the listContainer and newTaskButton will be visible.
function resetContainers() {
    formContainer.classList.toggle('hidden')
    listContainer.classList.toggle('hidden')
    newTaskButton.classList.toggle('hidden');

}

// Displays the form container, also hides the listContainer and newTaskButton.
function displayFormContainer() {
    formContainer.classList.toggle('hidden');
    listContainer.classList.toggle('hidden');
    newTaskButton.classList.toggle('hidden');
}

// Adds or edits a task based on the values entered into the formContainer inputs
function addOrEditTask() {
    // Takes user inputs from the various inputs and assigns them to variables.
    let name = formTitleInput.value;
    let date = formDateInput.value;
    let description = formDescriptionInput.value;
    
    // Creates an id for the task in the form of the name which is converted to spinal-tap.
    let id = name.split(' ').join('-').toLowerCase()

    // Creates a new task item based on a new taskObject
    let newItem = new taskObject(id, name, date, description);
    
    // Pushes the new task item to the taskData array.
    taskData.push(newItem);

    // Calls the method to reload the taskData array.
    loadTaskData();

    // Calls the method to reset the containers back to their default views.
    resetContainers();
}

// Loads all of the default event listeners
function loadDefaultEventListeners() {
    newTaskButton.addEventListener('click', displayFormContainer);
    formCancelButton.addEventListener('click', () => {
        // Provides a confirm modal to confirm the discarding of any changes.
        let result = confirm('Warning: this action will discard any changes made.');
        // If the user confirms, calls the resetContainer method.
        result ? resetContainers() : '';
    });

    formTaskButton.addEventListener('click', addOrEditTask)
}

loadDefaultEventListeners();