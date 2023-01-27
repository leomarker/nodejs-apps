const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("This is nodejs server");
});

let PORT = 8080;
server.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
