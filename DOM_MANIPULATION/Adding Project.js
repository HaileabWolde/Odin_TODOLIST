import EachProject from "./EachProject";
const ProjectList = document.getElementById("ProjectList");
const ProjectListFirstChild = ProjectList.firstChild
// This is the global array to hold all projects
function displayAllProjects(project) {
    const projectItem = document.createElement('div');
    projectItem.textContent = project.name.trim(); // Trim whitespace from the project name
    projectItem.id = project.id; // Set the ID of the project item
    projectItem.addEventListener("click", () => {
        EachProject(project); // Call the EachProject function with the project object
    });
    ProjectList.insertBefore(projectItem, ProjectListFirstChild);
    // This function can be used to display each project in the UI
    const AddProject = document.createElement('button');
    AddProject.textContent = "Add Project";
    AddProject.id = "AddProject";
    AddProject.addEventListener("click", () => {
        AddingProject();
        ProjectList.removeChild(AddProject);
    });
   ProjectList.appendChild(AddProject);
}
 function CreateProject(name, newDiv) {
    const AllProjects = [];
        const project = {
            id: Date.now(), // Unique ID based on current timestamp
            // This ensures that each project has a unique ID
            name: name,
            tasks: []
        };
        AllProjects.push(project);
        if(AllProjects.length > 0) {
            AllProjects.map((project)=> displayAllProjects(project));
        }
        const Today = document.getElementById("Today");
        Today.addEventListener("click", () => {
          project.tasks.forEach(task => {
            console.log(task.name); // Log each task's name to the console
          })
        })
        ProjectList.removeChild(newDiv); // Remove the form after adding the project
    }
function AddEventListener(newDiv){
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