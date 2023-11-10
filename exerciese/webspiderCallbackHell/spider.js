import fs from "fs";
import path from "path";
import { urlToFilename } from "./utils.js";
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
          fs.mkdir(path.dirname(filename), { recursive: true }, (err) => {
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

/* what is going on here ? very confusing  

   - we are creating a nested callback which isn't easy to understand and fix
   - the function is doing a lots of things(single responsibility a function should do one thing and do it well)
   
  how to fix it 
   - we return the function as early as possible avoiding handling unwanted logic(notice the if else block) 
   - instead of using callback use named functions and  
   - share responsibility among other functions or split the code

*/
