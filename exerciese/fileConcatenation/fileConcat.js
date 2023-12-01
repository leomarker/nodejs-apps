import fs from "fs";

export const fileConcatenation = (dist, cb, ...notes) => {
  let index = 0;

  console.log(notes[index]);
  next(notes[index], dist, (err) => {
    if (err) {
      console.log(err);
      cb(err);
    }

    if (index === notes.length) {
      cb(dist);
    }

    next(notes[++index], dist);
  });
};

function next(file, dist, cb) {
  readFileContent(file, (err, data) => {
    if (err) {
      console.log(err);
    }

    console.log(data);

    writeFileContentToDist(dist, data, (err) => {
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
    console.log("YOUR not has be read");
    cb(data);
  });
}

function writeFileContentToDist(dist, data, cb) {
  fs.writeFile(dist, data, "utf-8", (err) => {
    if (err) {
      console.log(err);
      cb(err);
    }

    console.log(`New not has been written to ${dist}`);
  });
}
