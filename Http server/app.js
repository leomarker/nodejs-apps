const http = require("http");
const fs = require("fs/promises");

const JSONdata = JSON.stringify([
  -128610405,
  "bent",
  [
    {
      meal: -2007318308.6798844,
      pack: "window",
      cheese: 1074790244,
      apart: 1650846736,
      facing: 577623722,
      half: -548687929,
    },
    false,
    "younger",
    1669862118.6488533,
    -1647484755.2707276,
    "smoke",
  ],
  true,
  407392355.508039,
]);

const HTMLresponse = (req, res) => {
  fs.readFile(__dirname + "/index.html")
    .then((response) => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(response);
    })
    .catch((err) => {
      res.writeHead(500);
      res.end(err);
    });
};

const JSONResponse = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSONdata);
};

const server = http.createServer((req, res) => {
  if (req.url == "/json") {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSONdata);
  } else if (req.url == "/web") {
    fs.readFile(__dirname + "/index.html")
      .then((response) => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(response);
      })
      .catch((err) => {
        res.writeHead(500);
        res.end(err);
      });
  }
});

let PORT = 8080;
server.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
