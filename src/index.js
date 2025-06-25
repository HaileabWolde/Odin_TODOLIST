import "./styles.css";
import AddingProject from "../DOM_MANIPULATION/Adding Project";
const ProjectList = document.getElementById("ProjectList");
const AddProject = document.getElementById("AddProject");
const Today = document.getElementById("Today");
AddProject.addEventListener("click", () => {
    AddingProject();
    ProjectList.removeChild(AddProject);
});