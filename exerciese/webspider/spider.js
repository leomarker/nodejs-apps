import fs from "fs";
import path from "path";
import { urlToFilename } from "./utils.js";
import superAgent from "superagent";

const saveFile = (filename, contents, cb) => {
  fs.mkdir(path.dirname(filename), { recursive: true }, (err) => {
    if (err) {
      return cb(err);
    } else {
      fs.writeFile(filename, contents, cb);
    }
  });
};

const downloadFile = (url, filename, cb) => {
  console.log(`Downloading ${url} into ${filename}`);

  superAgent.get(url).end((err, res) => {
    if (err) {
      return cb(err);
    }

    saveFile(filename, res.text, (err) => {
      if (err) {
        return cb(err);
      }
      console.log(`DownLoaded and saved The File ${filename}`);

      cb(null, filename, url);
    });
  });
};

export const spider = (url, cb) => {
  const filename = urlToFilename(url);

  fs.access(filename, (err) => {
    if (!err && !err.code === "ENOENT") {
      cb(null, filename, url);
    }
  });

  downloadFile(url, filename, (err) => {
    if (err) {
      return cb(err);
    }

    cb(null, filename, url);
  });
};
