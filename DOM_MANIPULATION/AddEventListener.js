import displayAllProjects from "./Display_Projects.js";
import AllProjects from "../src/ProjectStore.js"; // Import the ProjectStore to manage projects
// This module handles the addition of a new project form to the project list.
const ProjectList = document.getElementById("ProjectListHeader");
function CreateProject(name, newDiv) {
    
        const project = {
            id: Date.now(), // Unique ID based on current timestamp
            // This ensures that each project has a unique ID
            name: name,
            tasks: []
        };
      
        AllProjects.push(project);
       
        localStorage.setItem("projects", JSON.stringify(AllProjects)); // Save the project to localStorage
        
        if(AllProjects.length > 0) {
            displayAllProjects(project);
        }
        
        ProjectList.removeChild(newDiv); // Remove the form after adding the project
    }
const AddEventListener = (newDiv)=>{
    // Add event listener for form submission
    const projectForm = document.getElementById('project-form');
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const projectName = document.getElementById('project-name').value.trim(); // Get the project name and trim whitespace
        CreateProject(projectName,newDiv); // Create a new project with the provided name
        // Here you can add logic to actually save the project
        projectForm.reset(); // Reset the form after submission
    });
}
export default AddEventListener;