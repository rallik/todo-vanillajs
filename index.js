// class ToDo {
//     constructor(task) {
//         this.task = task;
//     }
// }

function formatTaskForList(taskText) {
    // const newTask = new ToDo(taskText)
    console.log(taskText);
    const todoelement = document.createElement("li");
    todoelement.classList.add("taskListElement");
    const todoelement_inner = 
        `<button class="taskComplete"></button>
        ${taskText}
        <button class="deleteTask"></button>`;
    todoelement.innerHTML = todoelement_inner;
    console.log(typeof todoelement);
    taskList.appendChild(todoelement);
    

}


let taskTextInput = document.getElementById("taskTextInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

let taskComplete = document.getElementById("taskComplete");
let deleteTask = document.getElementById("deleteTask");


addTask.addEventListener("click", function(){
    let newTask = taskTextInput.value;
    console.log(newTask);
    let formattedTask = formatTaskForList(newTask);
    console.log(typeof formattedTask);
})

// taskComplete.addEventListener("click", function(){
//     console.log('task complete clic')
//     todoelement.classList.add("taskcomplete");
// })