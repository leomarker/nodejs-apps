function makeRandomTasks(name) {
  return (cb) => {
    console.log(`${name} started`);

    setTimeout(() => {
      console.log(`${name} has been completed`);
      cb();
    }, Math.random() * 1000);
  };
}

const tasks = [
  makeRandomTasks("Task 1"),
  makeRandomTasks("Task 2"),
  makeRandomTasks("Task 3"),
  makeRandomTasks("Task 4"),
  makeRandomTasks("Task 5"),
  makeRandomTasks("Task 6"),
];

let completed = 0;
let concurrency = 2;
let running = 0;
let index = 0;

function next() {
  while (running < concurrency && index < tasks.length) {
    const task = tasks[index++];

    task(() => {
      if (++completed === tasks.length) {
        finish();
      }
      running--;
      next();
    });

    running++;
  }
}

next();

function finish() {
  console.log("All tasks has been completed ");
}
