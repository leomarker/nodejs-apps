const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method == "GET") {
    if (req.url == "/" || req.url == "home") {
    }
    if (req.url == "/login") {
    }
    if (req.url == "/logout") {
    }
    if (req.url == "/add") {
    }
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("asdfsa");
});

server.listen(8080);
