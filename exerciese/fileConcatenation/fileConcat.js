import fs from "fs";

let index = 0;

export function fileConcat(dist, ...notes) {
  console.log(notes.length);
  if (index === notes.length) {
    return console.log("DONE");
  }
  copyNote(dist, notes[index], (err) => {
    if (err) {
      console.log(err);
    }
    ++index;
    fileConcat(dist, ...notes);
  });
}

function copyNote(dist, note, cb) {
  fs.readFile(note, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }

    console.log(data);

    fs.appendFile(dist, data, "utf-8", (err) => {
      if (err) {
        console.log(err);
      }

      cb();
    });
  });
}
