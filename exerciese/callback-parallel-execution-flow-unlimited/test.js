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
];

let completed = 0;

tasks.forEach((task) =>
  task(() => {
    if (++completed === tasks.length) {
      finish();
    }
  })
);

function finish() {
  console.log("All tasks has been completed ");
}
