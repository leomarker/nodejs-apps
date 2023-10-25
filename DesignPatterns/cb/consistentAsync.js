import { readFile } from "fs";

const cache = new Map();

function ReadFile(fileName, callback) {
  if (cache.has(fileName)) {
    process.nextTick(() => {
      callback(cache.get(fileName));
    });
  } else {
    readFile(fileName, "utf-8", (err, file) => {
      cache.set(fileName, file);
      return callback(file);
    });
  }
}

function createFileReader(fileName) {
  const listeners = [];
  ReadFile(fileName, (file) => {
    listeners.forEach((listener) => listener(file));
  });

  return {
    onDataReady: (listener) => listeners.push(listener),
  };
}

const reader1 = createFileReader("data.txt");

reader1.onDataReady((data) => {
  console.log(`First data call:${data}`);

  const reader2 = createFileReader("data.txt");

  reader2.onDataReady((data) => {
    console.log(`second data call:${data}`);
  });
});
