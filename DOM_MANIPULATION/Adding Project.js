import AddEventListener from './AddEventListener.js';
import '../css_files/addingProject.css';
// This module handles the addition of a new project form to the project list.

const AddingProject = (function (){
     const ProjectList = document.getElementById("ProjectListHeader");
    const newDiv = document.createElement('div');
    newDiv.classList.add('adding-project');
    newDiv.id = 'adding-project';
    // Adding a unique ID for easier targeting
    newDiv.innerHTML = `
    
        <form id="project-form">
            <input type="text" id="project-name" name="project-name" required placeholder="Enter project name">
            <div class="buttonDiv">
              <button type="submit">Add</button>
            <button type="button" id="cancel-project">Cancel</button>
            </div>
        </form>
    `;
    // Append the new project form to the ProjectList
    ProjectList.append(newDiv);
    AddEventListener(newDiv); // Call the function to add event listeners
    const cancelProject = document.getElementById("cancel-project");

    cancelProject.addEventListener("click", () => {
    const addingProjectDiv = document.getElementById("adding-project");
    if (addingProjectDiv) {
        addingProjectDiv.remove(); // Remove the adding project form
    }
    const AddProjectButton = document.createElement("button");
    AddProjectButton.id = "AddProject";
    AddProjectButton.textContent = "Add Project";
    AddProjectButton.addEventListener("click", () => {
        AddingProject(); // Call the AddingProject function to show the form again
        ProjectList.removeChild(AddProjectButton); // Remove the Add Project button
    });
    ProjectList.appendChild(AddProjectButton); // Re-add the Add Project button
});
})


export default AddingProject;