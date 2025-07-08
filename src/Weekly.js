import { addDays, format } from "date-fns";
import '../css_files/Today.css';
import AllProjects from "./ProjectStore";
function Weekly(){
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    const weeklyTask = AllProjects.map((project)=> {
         const WeeklyTasked = project.tasks.filter(task => {
            for (let i = 0; i < 7; i++){
               const futureDate = addDays(formattedDate, i);
               const futureDateFormatted = format(futureDate, 'yyyy-MM-dd');
                // console.log(futureDateFormatted);
                // console.log(task.dueDate);
                // console.log(task.dueDate === futureDateFormatted);
                if (task.dueDate === futureDateFormatted) {
                    return task;
                }
                if (task.dueDate === futureDate) {
                    return task;
                }
            }
            return null;
        })
        return WeeklyTasked;
    })
  
   const weeklyContainer = document.getElementById("TaskList");
   weeklyContainer.innerHTML = ""; // Clear previous tasks
   weeklyTask.forEach((projectTasks) => {
       projectTasks.forEach((task) => {
      
            const taskItem = document.createElement("div")
            taskItem.className = "Today_task"
            taskItem.innerHTML = `
            <h3>${task.name}</h3>
            <p>Due:${task.dueDate}</p>
            `
           taskItem.id = task.id; // Set the ID of the task item
             // Apply priority styling
            if (task.priority === 'low') {
                taskItem.style.border = '2px solid green';
            } else if (task.priority === 'medium') {
                taskItem.style.border = '2px solid orange';
            } else if (task.priority === 'high') {
                taskItem.style.border = '2px solid red';
            }
           weeklyContainer.appendChild(taskItem);
       });
   })
}
export default Weekly;