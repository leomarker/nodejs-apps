const http = require("http");
const fs = require("fs");
const { parse } = require("querystring");
const PORT = 3000;

const server = http.createServer();

const GETHandler = (req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("you are on the home page");
    res.end();
  } else if (req.url === "/login") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("this is the login page");
    res.end(`
        <!doctype html>
        <html>
        <body>
            <form action="/login" method="post">
                <input type="email" name="email" /><br />
                <input type="text" name="password" /><br />
                <button>LOGIN</button>
            </form>
        </body>
        </html>
    `);
  } else if (req.url === "/add") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("A value was added");
    res.end();
  }
};

const POSTHandler = (req, res) => {
  if (req.url === "/login") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(parse(body));
    });

    res.end();
  }
};

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
});

server.listen(8080);

// res.end(`
// <!doctype html>
// <html>
// <body>
//     <form action="/" method="post">
//         <input type="text" name="fname" /><br />
//         <input type="number" name="age" /><br />
//         <input type="file" name="photo" /><br />
//         <button>Save</button>
//     </form>
// </body>
// </html>
// `);
