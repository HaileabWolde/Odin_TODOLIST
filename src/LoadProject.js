import displayAllProjects from "../DOM_MANIPULATION/Display_Projects";

function loadExistingProjects() {
    const AllProjects = JSON.parse(localStorage.getItem("projects")) || [];
    AllProjects.forEach(project => {
        displayAllProjects(project);
    });
}

export default loadExistingProjects;