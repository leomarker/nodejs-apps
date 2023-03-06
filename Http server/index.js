const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer();

const GETHandler = (req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/plain" });
  }
};

const POSTHandler = (req, res) => {};

const DELETEHandler = (req, res) => {};
server.on("request", (req, res) => {
  switch (req.method) {
    case "GET":
      GETHandler(req, res);
      break;
    case "POST":
      POSTHandler(req, res);
      break;
    case "DELETE":
      DELETEHandler(req, res);
      break;
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("asdfsa");
});

server.listen(8080);
