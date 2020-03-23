// Define our UI variables
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners()

function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask)
    taskList.addEventListener('click', removeTask)
}

// Add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task')
    }

    // Create li element
    const li = document.createElement('li')
    li.className = 'collection-item'
    li.appendChild(document.createTextNode(taskInput.value))
    const link = document.createElement('a')
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link)
    taskList.appendChild(li)
    taskInput.value = ''

    e.preventDefault()
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            const li = e.target.parentElement.parentElement
            li.remove()
        }
    }
}