// Object to replace the 3 arrays and exterior functions have been put inside
// A new task will be created as incomplete
function newTask(title, description) {
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

const task1 = newTask("Clean Dog Poo", "Use a bag, get it all!");
const task2 = newTask("Do Laundry", "Laaaame but has to be done.");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

const task3 = newTask("Make third task", "Write it using function");
tasks.push(task3);

console.log(tasks);

task3.logState();
task3.markCompleted();
task3.logState();
