const editTask = (Task, project, allTasks) => { 
   // Create and inject the dialog but DO NOT overwrite the TaskList
    const dialogWrapper = document.createElement('div');
    dialogWrapper.innerHTML = `
        <dialog id="editDialog" class="dialog">
            <form method="dialog" class="dialog-form">
                <h3 class="dialog-title">Edit Task</h3>
                <input type="text" id="editTaskName" name="taskName" value="${Task.name}" required>
                <input type="date" id="editDueDate" name="dueDate" value="${Task.dueDate ? new Date(Task.dueDate).toISOString().split('T')[0] : ''}">
                <div class="dialog-priority">
                    <h2>Priority</h2>
                    <div class="priority-options">
                        <label for="low">Low</label>
                        <input type="radio" id="low" name="priorityOptions" value="low" ${Task.priority === 'low' ? 'checked' : ''}>
                        <label for="medium">Medium</label>
                        <input type="radio" id="medium" name="priorityOptions" value="medium" ${Task.priority === 'medium' ? 'checked' : ''}>
                        <label for="high">High</label>
                        <input type="radio" id="high" name="priorityOptions" value="high" ${Task.priority === 'high' ? 'checked' : ''}>
                    </div>
                    <button type="submit" class="dialog-submit" id="saveChanges">Save Changes</button>
                </div>
                <button class="dialog-close" id="closeEditDialog">Close</button>
            </form>
        </dialog>
    `;
 document.body.appendChild(dialogWrapper); // Or append to TaskList if preferred
    const editDialog = dialogWrapper.querySelector('#editDialog')

    editDialog.showModal();

    const closeEditDialog = dialogWrapper.querySelector("#closeEditDialog");
    closeEditDialog.addEventListener("click", () => {
        editDialog.close();
        dialogWrapper.remove(); // Clean up
    });

    const dialogForm = dialogWrapper.querySelector('.dialog-form');
    dialogForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const updatedTask = {
            id: Task.id,
            name: document.getElementById("editTaskName").value.trim(),
            dueDate: document.getElementById("editDueDate").value,
           priority: document.querySelector('input[name="priorityOptions"]:checked').value
        };
       
        // Update the project task list
        project.tasks = project.tasks.map(task =>
            task.id === updatedTask.id ? updatedTask : task
        );
       
        // Update DOM elements
        allTasks.forEach(taskItem => {
           
            if (parseInt(taskItem.id) === updatedTask.id) {
                taskItem.querySelector('.task-name').textContent = updatedTask.name;
                taskItem.querySelector('.task-due-date').textContent =
                    updatedTask.dueDate ? `Due: ${new Date(updatedTask.dueDate).toLocaleDateString()}` : 'No due date';

                // Update border style based on priority
                if (updatedTask.priority === 'low') {
                    document.getElementById(taskItem.id).style.border = '2px solid green';
                } else if (updatedTask.priority === 'medium') {
                    document.getElementById(taskItem.id).style.border = '2px solid orange';
                } else if (updatedTask.priority === 'high') {
                    document.getElementById(taskItem.id).style.border = '2px solid red';
                    
                }
            }
        });
    
        editDialog.close();
        dialogWrapper.remove(); // Clean up after close
    });
};
export default editTask;
