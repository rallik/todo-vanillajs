class ToDo {
    constructor(task, datetime) {
        this.task = task;
        this.datetime = datetime;
    }

    getTimeElapsed() {
        const rightnow = new Date().getTime() - this.datetime;
        return `The task: ${this.task}, is ${this.datetime} old.`;
    }
}

function addTask() {
    const newTask = document.getElementById('task');
    console.log(newTask);
}