import { readFile, writeFile } from "node:fs/promises";
import { gzip } from "node:zlib";
import { promisify } from "node:util";

const gzipPromise = promisify(gzip);
let filename = process.argv[2];

async function main() {
  while (!filename) {
    console.log("No file provided. Please enter a file path:");
    const input = await getUserInput();
    filename = input.trim();
  }

  const data = await readFile(filename);
  const gzippedData = await gzipPromise(data);

  await writeFile(`${filename}.gz`, gzippedData);

  console.log("File compressed");

  process.exit(0);
}

async function getUserInput() {
  return new Promise((resolve) => {
    process.stdin.once("data", (data) => {
      resolve(data.toString().trim());
    });
  });
}

main();
