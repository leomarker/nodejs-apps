import fs from "fs";
import path from "path";
import { urlToFilename } from "./utills.js";
import superAgent from "superagent";

export const spider = (url, cb) => {
  const filename = urlToFilename(url);

  fs.access(filename, (err) => {
    if (err && err.code === "ENOENT") {
      console.log(`Downloading ${url} into ${filename}`);
      superAgent.get(url).end((err, res) => {
        if (err) {
          cb(err);
        } else {
          fs.mkdir(path.dirname(filename), (err) => {
            if (err) {
              cb(err);
            } else {
              fs.writeFile(filename, res.text, (err) => {
                if (err) {
                  cb(err);
                } else {
                  cb(null, filename, url);
                }
              });
            }
          });
        }
      });
    } else {
      cb(null, filename, url);
    }
  });
};
