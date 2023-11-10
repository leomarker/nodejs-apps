import fs from "fs";
import path from "path";
import { urlToFilename } from "./utils.js";
import superAgent from "superagent";
import { getPageLinks } from "./utils.js";

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

      cb(null, res.text);
    });
  });
};

const spiderLinks = (url, content, nesting, cb) => {
  if (nesting === 0) {
    return process.nextTick(cb);
  }
  const links = getPageLinks(url, content);

  if (links.length === 0) {
    return process.nextTick(cb);
  }

  function iterate(index) {
    if (index === links.length) {
      return cb();
    }

    spider(links[index], nesting - 1, (err) => {
      if (err) {
        return cb(err);
      }

      iterate(index + 1);
    });
  }

  iterate(0);
};

export const spider = (url, nesting, cb) => {
  const filename = urlToFilename(url);

  fs.readFile(filename, "utf8", (err, fileContent) => {
    if (err) {
      if (err.code !== "ENOENT") {
        return cb(err);
      }

      return downloadFile(url, filename, (err, requestContent) => {
        if (err) {
          return cb(err);
        }

        spiderLinks(url, requestContent, nesting, cb);
      });
    }

    spider(url, fileContent, nesting, cb);
  });
};
