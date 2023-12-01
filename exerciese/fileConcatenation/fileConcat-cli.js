import { fileConcatenation } from "./fileConcat.js";

console.log(process.argv.slice(2));

fileConcatenation(
  process.argv[2],
  (err, filename) => {
    if (err) {
      console.log(err);
    }

    console.log(
      `All you note have been concatenated and are now under the file name:${filename}`
    );
  },
  ...process.argv.slice(3)
);
