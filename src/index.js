import "./styles.css";
import AddingProject from "../DOM_MANIPULATION/Adding Project";
import loadExistingProjects from "./LoadProject";
import TodayTask from "../Today";
import Weekly from "./Weekly";
import AllProjects from "./ProjectStore";
import EachProject from "../DOM_MANIPULATION/EachProject";
const ProjectList = document.getElementById("ProjectListHeader");
const AddProject = document.getElementById("AddProject");
const Today = document.getElementById("Today");
const ThisWeek = document.getElementById("This Week");
loadExistingProjects(); // Load saved projects from localStorage
AddProject.addEventListener("click", () => {
    AddingProject();
    ProjectList.removeChild(AddProject);
});
ProjectList.addEventListener("click", (e) => {
    const clickedItem = e.target.closest(".project-item");
    if (clickedItem) {
        EachProject(AllProjects.find(p => p.id == clickedItem.id));
    }
});
Today.addEventListener("click", () => {
    TodayTask(AllProjects)
})
ThisWeek.addEventListener("click", ()=>{
    Weekly();
})

