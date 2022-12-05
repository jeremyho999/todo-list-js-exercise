//// Arrays to keep track of each task's state
//const taskTitles = [];
//const taskComplete = [];

// Modify the newTask fn to use a Task object to keep track of the task's state:

//// Create a new task by adding to the arrays
//// A new task will be created as incomplete
function newTask(title, description) {
  //taskTitles.push(title);
  //taskComplete.push(false);
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

//logTaskState(task1);
//completeTask(task1);
//logTaskState(task1);

task1.logState();
task1.markCompleted();
task1.logState();

// for now, let's just make sure we see our tasks
//console.log(tasks);

//newTask("Clean Cat Litter"); // task 0
//newTask("Do Laundry"); // task 1

//logTaskState(0); // Clean Cat Litter has not been completed
//completeTask(0);
//logTaskState(0); // Clean Cat Litter has been completed
