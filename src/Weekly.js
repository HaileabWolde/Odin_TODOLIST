import { addDays, format } from "date-fns";
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
           const taskItem = document.createElement("div");
           taskItem.textContent = task.name.trim(); // Trim whitespace from the task name
           taskItem.id = task.id; // Set the ID of the task item
           weeklyContainer.appendChild(taskItem);
       });
   })
}
export default Weekly;