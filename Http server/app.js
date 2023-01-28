const http = require("http");

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
const JSONResponse = (req, res) => {
  res.setHeader("Content-type", "application/json");
  res.writeHead(200);
  res.end(JSONdata);
};

const server = http.createServer(JSONResponse);

let PORT = 8080;
server.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
