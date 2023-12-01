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

export function concatFiles(dist, ...notes) {
  let index = 0;
  let content = "";

  readNotes(notes, index, content, (err, note) => {
    fs.writeFile(dist, note, "utf-8", (err) => {
      if (err) console.log(err);

      console.log("ALL not have been read");
    });
  });
}

function readNotes(notes, index, content, cb) {
  console.log(index);
  console.log(notes.length);

  if (index === notes.length) {
    console.log("true");
    return cb(null, content);
  }

  fs.readFile(notes[index], "utf-8", (err, data) => {
    if (err) return cb(err);
    console.log(data);
    readNotes(notes, ++index, content.concat(data, "\n"), cb);
  });
}
