import { add } from 'date-fns';
import '../css_files/EachProject.css'; // Importing the CSS file for styling
const TaskList = document.getElementById("TaskList");
const TaskListSecondChild = TaskList.querySelector("AddTaskButton")
const EachProject = (project) => {
    // Clear the TaskList before displaying tasks for the selected project
    TaskList.innerHTML = '';
    TaskList.innerHTML = 
    `<dialog id="dialog" class="dialog">
        <form method="dialog" class="dialog-form">
            <h3 class="dialog-title">Add Task</h3>
            <input type="text" id="taskName" name="taskName" placeholder="Add A Task" required>
            <input type="date" id="dueDate" name="dueDate">
            <div class="dialog-priority">
                <h2>Priority</h2>
                <div class="priority-options">
                 <label for="low">Low</label>
                <input type="radio" id="low" name="priority" value="low">
                <label for="medium">Medium</label>
                <input type="radio" id="medium" name="priority" value="medium">
                <label for="high">High</label>
                <input type="radio" id="high" name="priority" value="high">
                </div>
                <button type="submit" class="dialog-submit" id="AddTask">Add Task</button>
            </div>
            <button class="dialog-close" id="closeDialog">Close</button>
        </form>
            `;
    // Create a close button for the dialog
    const closeButton = document.getElementById("closeDialog");
    closeButton.addEventListener("click", () => {
        const dialog = document.getElementById("dialog");
        dialog.close(); // Close the dialog when the close button is clicked
    });
    // Create a header for the project name
    const projectHeader = document.createElement('h2');
    projectHeader.textContent = project.name.trim(); // Trim whitespace from the project name
    TaskList.appendChild(projectHeader);

    // Display each task in the project
    project.tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.textContent = task.name.trim(); // Trim whitespace from the task name
        taskItem.id = task.id; // Set the ID of the task item
          taskItem.classList.add('task-item'); // Add a class for styling
        TaskList.insertBefore(taskItem, TaskListSecondChild); // Insert the task item before the second child
        if(task.priority === 'low') {
            taskItem.style.border = '2px solid green'; // Set border color for low priority
        }
        else if(task.priority === 'medium') {
            taskItem.style.border = '2px solid orange'; // Set border color for medium priority
        }
        else if(task.priority === 'high') {
            taskItem.style.border = '2px solid red'; // Set border color for high priority
        }
    });

    // Optionally, you can add a button to add new tasks to this project
    const addTaskButton = document.createElement('button');
    addTaskButton.id = "AddTaskButton"; // Set an ID for the button
    addTaskButton.textContent = "Add Task";
    addTaskButton.addEventListener("click", () => {
       const dialog = document.getElementById("dialog");
       dialog.showModal();
    });
    
    TaskList.appendChild(addTaskButton);
    // Add event listener for the dialog form submission
    const dialogForm = document.querySelector('.dialog-form');
    dialogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskName = document.getElementById('taskName').value.trim(); // Get the task name and trim whitespace
        const dueDate = document.getElementById('dueDate').value; // Get the due date
        const priority = document.querySelector('input[name="priority"]:checked'); // Get the selected priority
        if (priority) {
            const priorityValue = priority.value; // Get the value of the selected priority
            console.log(`Priority: ${priorityValue}`); // Log the priority value (optional)
        }
        if (taskName) {
            const task = {
                id: Date.now(), // Unique ID based on current timestamp
                name: taskName,
                dueDate: dueDate, // Store the due date
                priority: priority ? priority.value : 'low' // Default to 'low' if no priority is selected
            };
            project.tasks.push(task); // Add the new task to the project
            const taskItem = document.createElement('div');
        
            taskItem.textContent = task.name; // Display the new task
            taskItem.id = task.id; // Set the ID of the task item
            if(task.priority === 'low') {
                taskItem.style.border = '2px solid green'; // Set background color for low priority
            }
            else if(task.priority === 'medium') {
                taskItem.style.border = '2px solid orange'; // Set background color for medium priority
            }
            else if(task.priority === 'high') {
                taskItem.style.border = '2px solid red'; // Set background color for high priority
            }
            taskItem.classList.add('task-item'); // Add a class for styling
            TaskList.insertBefore(taskItem, TaskListSecondChild); // Insert the new task before the second child
            document.getElementById('taskName').value = ''; // Clear the input field
            dialog.close(); // Close the dialog after adding the task
        }
    });
};
export default EachProject;
// This function is intended to handle the display of each project in the UI
