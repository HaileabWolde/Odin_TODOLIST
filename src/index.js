import "./styles.css";
import AddingProject from "../DOM_MANIPULATION/Adding Project";
const ProjectList = document.getElementById("ProjectList");
const AddProject = document.getElementById("AddProject");
AddProject.addEventListener("click", () => {
    AddingProject();
    ProjectList.removeChild(AddProject);
});