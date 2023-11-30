import fs from "fs";

export function fileConcatenation(dist, cb, ...notes) {
  let index = 0;
  next(notes[0], dist, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    if (index === notes.length) {
      console.log("Nice ALL your notes have been moved to one file");
      process.exit(1);
    }

    next(notes[++index], dist);
  });
}

function next(file, dist, cb) {
  readFileContent(file, (err, data) => {
    if (err) {
      console.log();
    }

    writeFileContentToDist(dist, (err) => {
      if (err) {
        console.log(err);
        cb(err);
      }

      cb();
    });
  });
}

function readFileContent(file, cb) {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    cb(data);
  });
}

function writeFileContentToDist(dist, cb) {
  fs.writeFile(dist, data, "utf-8", (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`New not has been written to ${dist}`);
  });
}
