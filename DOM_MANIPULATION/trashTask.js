const deleteIcon= (Task, project, allTasks)=>{
// Delete Tasks,
const deleteWrapper = document.createElement('div');
deleteWrapper.innerHTML = `
<dialog id = "deleteDialog" class='dialog'>
    <div class="deleteTask">
        <h1>Are you sure?</h1>
        <div class="buttonClass">
             <button class="yesButton">Yes</button>
            <button class="noButton">No</button>
        </div>
    </di>
</dialog>

`
document.body.appendChild(deleteWrapper); // Or append to TaskList if preferred
const deleteDialog = deleteWrapper.querySelector('#deleteDialog');
deleteDialog.showModal();
const yesButton = deleteWrapper.querySelector('.yesButton');
yesButton.addEventListener(("click"), ()=>{
    project.tasks = project.tasks.filter(
       (task)=> {
        if(parseInt(task.id) != Task.id){
            return true;
        }
        else{
            return false;
        }
       } 
    )
    // Update DOM elements
    allTasks.forEach(taskItem => {
        if (parseInt(taskItem.id) === Task.id) {
            taskItem.remove();
        }
    });
    deleteDialog.close();
    deleteWrapper.remove(); // Clean up after close
})
const noButton = deleteWrapper.querySelector('.noButton');
noButton.addEventListener(("click"), ()=>{
    deleteDialog.close();
    deleteWrapper.remove(); // Clean up after close
})
}
export default deleteIcon;