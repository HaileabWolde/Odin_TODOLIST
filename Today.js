import { format } from 'date-fns';

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
            taskElement.className = "task";
            taskElement.innerHTML = `
                <h3>${task.name}</h3>
                <p>Due: ${task.dueDate}</p>
                <p>${task.description || ""}</p>
            `;
            todayContainer.appendChild(taskElement);
        });
    });
}

export default TodayTask;
