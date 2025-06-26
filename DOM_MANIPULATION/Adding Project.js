import AddEventListener from './AddEventListener.js';
// This module handles the addition of a new project form to the project list.

const AddingProject = (function (){
     const ProjectList = document.getElementById("ProjectList");
    const newDiv = document.createElement('div');
    newDiv.classList.add('adding-project');
    newDiv.id = 'adding-project';
    // Adding a unique ID for easier targeting
    newDiv.innerHTML = `
    
        <form id="project-form">
            <label for="project-name">Project Name:</label>
            <input type="text" id="project-name" name="project-name" required>
            <button type="submit">Add</button>
        </form>
    `;
    // Append the new project form to the ProjectList
    ProjectList.append(newDiv);
    AddEventListener(newDiv); // Call the function to add event listeners
})
export default AddingProject;