const TaskList = document.getElementById("TaskList");

const EachProject = (project) => {
    // Clear the TaskList before displaying tasks for the selected project
    TaskList.innerHTML = '';
    TaskList.innerHTML = 
    `<dialog id="dialog" class="dialog">
        <form method="dialog" class="dialog-form">
            <h3 class="dialog-title">Add Task</h3>
            <label for="taskName">Task Name:</label>
            <input type="text" id="taskName" name="taskName" required>
            <input type="date" id="dueDate" name="dueDate">
            <button type="submit" class="dialog-submit" id="AddTask">Add Task</button>`;
    // Create a header for the project name
    const projectHeader = document.createElement('h2');
    projectHeader.textContent = project.name.trim(); // Trim whitespace from the project name
    TaskList.appendChild(projectHeader);

    // Display each task in the project
    project.tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.textContent = task.name.trim(); // Trim whitespace from the task name
        taskItem.id = task.id; // Set the ID of the task item
        TaskList.appendChild(taskItem);
    });

    // Optionally, you can add a button to add new tasks to this project
    const addTaskButton = document.createElement('button');
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
        if (taskName) {
            const task = {
                id: Date.now(), // Unique ID based on current timestamp
                name: taskName,
                dueDate: dueDate // Store the due date
            };
            project.tasks.push(task); // Add the new task to the project
            const taskItem = document.createElement('div');
        
            taskItem.textContent = task.name; // Display the new task
            taskItem.id = task.id; // Set the ID of the task item
            TaskList.appendChild(taskItem);
            document.getElementById('taskName').value = ''; // Clear the input field
            dialog.close(); // Close the dialog after adding the task
        }
    });
};
export default EachProject;
// This function is intended to handle the display of each project in the UI
