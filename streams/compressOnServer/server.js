import { createWriteStream } from "fs";
import { createServer } from "http";
import { basename, join } from "path";
import { createGunzip } from "zlib";

const server = createServer((req, res) => {
  const filename = basename(req.headers["x-filename"]);
  const destFilename = join("received_files", filename);

  console.log(`File request received: ${filename}`);

  req
    .pipe(createGunzip())
    .pipe(createWriteStream(destFilename))
    .on("finish", () => {
      res.writeHead(201, { "Content-Type": "text/plain" });
      res.end("Ok");

      console.log(`File Saved : ${destFilename}`);
    });
});

server.listen("8080", () => {
  console.log("Server listing at port: 8080");
});
