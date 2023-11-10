import { spider } from "./spider.js";

const url = process.argv[2];
const nesting = Number.parseInt(process.argv[3], 10) || 1;

spider(url, nesting, (err, filename, downloaded) => {
  if (err) {
    console.log(err);
  } else if (downloaded) {
    console.log(`Completed the download of "${filename}"`);
  } else {
    console.log(`"${filename}" was already downloaded`);
  }
});
