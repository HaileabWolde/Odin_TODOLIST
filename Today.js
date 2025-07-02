import { format } from 'date-fns';
import './css_files/Today.css';
function TodayTask(AllProjects) {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd');

    const todayTasks = AllProjects.map(project =>
        project.tasks.filter(task => task.dueDate === formattedDate)
    );

    const todayContainer = document.getElementById("TaskList");
    todayContainer.innerHTML = ""; // Clear previous tasks

    if (todayTasks.length === 0 || todayTasks.every(task => task.length === 0)) {
        todayContainer.innerHTML = "<p>No tasks for today.</p>";
        return;
    }

    todayTasks.forEach(tasks => {
        tasks.forEach(task => {
            const taskElement = document.createElement("div");
            taskElement.className = "Today_task";
            taskElement.innerHTML = `
                <h3>${task.name}</h3>
                <p>Due:${task.dueDate}</p>
            `;
            // Apply priority styling
            if (task.priority === 'low') {
                taskElement.style.border = '2px solid green';
            } else if (task.priority === 'medium') {
                taskElement.style.border = '2px solid orange';
            } else if (task.priority === 'high') {
                taskElement.style.border = '2px solid red';
            }
            todayContainer.appendChild(taskElement);
        });
    });
}

export default TodayTask;
