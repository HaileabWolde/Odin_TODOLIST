// ProjectStore.js
const AllProjects = []
const storedProjects = JSON.parse(localStorage.getItem("projects"));
storedProjects ? AllProjects.push(...storedProjects) : AllProjects; 

export default AllProjects;
