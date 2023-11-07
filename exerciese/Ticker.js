import { count } from "console";
import { EventEmitter } from "events";

function ticker(number, cb) {
  const emitter = new EventEmitter();

  recursive(number, emitter, cb);

  return emitter;
}

function recursive(number, emitter, cb) {
  let count = 0;

  setTimeout(function tick() {
    if (count * 50 >= number) {
      return cb(null, count);
    }
    count++;
    emitter.emit("tick", count);
    setTimeout(tick, 50);
  }, 50);
}

ticker(1000, (err, count) => {
  console.log("Total Ticks:", count);
}).on("tick", (count) => {
  console.log("tick", count);
});
