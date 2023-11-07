import { EventEmitter } from "events";
import { readFile } from "fs";

class FindRegex extends EventEmitter {
  constructor(regex) {
    super();
    this.regex = regex;
    this.files = [];
  }

  addFile(file) {
    this.files.push(file);
    return this;
  }

  async find() {
    this.emit("processing", this.files);
    for (const file of this.files) {
      readFile(file, "utf8", (err, content) => {
        if (err) {
          return this.emit("error", err);
        }
        this.emit("fileread", file);
        const match = content.match(this.regex);
        if (match) {
          match.forEach((elem) => this.emit("found", file, elem));
        }
      });
    }
    return this;
  }
}

const findRegexInstance = new FindRegex(/hello \w+/);

findRegexInstance
  .addFile("a.txt")
  .addFile("b.json")
  .find()
  .on("processing", (files) => {
    console.log(`process started  with : ${files}`);
  })

  .on("found", (file, match) =>
    console.log(`Matched "${match}" in file
${file}`)
  )
  .on("error", (err) => console.error(`Error emitted ${err.message}`));
