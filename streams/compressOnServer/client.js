import { request } from "http";
import { createGzip } from "zlib";
import { createReadStream } from "fs";
import { basename } from "path";

const filename = process.argv[2];
const serverHost = process.argv[3];

const httpRequestOptions = {
  hostname: serverHost,
  port: 8080,
  path: "/",
  method: "PUT",
  headers: {
    "Content-Type": "application/octet-stream",
    "Content-encoding": "gzip",
    "x-Filename": basename(filename),
  },
};

const req = request(httpRequestOptions, (res) =>
  console.log(`Server Response ${res.statusCode}`)
);

createReadStream(filename)
  .pipe(createGzip())
  .pipe(req)
  .on("finish", () => console.log("File sent successful "));
