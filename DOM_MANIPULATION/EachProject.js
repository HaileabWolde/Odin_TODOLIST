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
            <button type="submit" class="dialog-submit">Add Task</button>`;
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
};
export default EachProject;
// This function is intended to handle the display of each project in the UI
