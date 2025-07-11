import EachProject from "./EachProject";
import AddingProject from "./Adding Project";
import '../css_files/EachProject.css';
const ProjectList = document.getElementById("ProjectListHeader");
const ProjectListFirstChild = ProjectList.childNodes[2]; // Get the first child of ProjectList
function displayAllProjects(project) {
    const projectItem = document.createElement('div');
    projectItem.textContent = project.name.trim(); // Trim whitespace from the project name
    projectItem.classList.add('project-item'); // Add a class for styling
    projectItem.id = project.id; // Set the ID of the project item
    projectItem.addEventListener("click", () => {
        EachProject(project); // Call the EachProject function with the project object
    });
   
    ProjectList.insertBefore(projectItem, ProjectListFirstChild);
    // This function can be used to display each project in the UI
    if (!document.getElementById("AddProject")) {
    const AddProject = document.createElement('button');
    AddProject.textContent = "Add Project";
    AddProject.id = "AddProject";
    AddProject.addEventListener("click", () => {
        AddingProject();
        ProjectList.removeChild(AddProject);
    });
    ProjectList.appendChild(AddProject);
}
}
export default displayAllProjects;
