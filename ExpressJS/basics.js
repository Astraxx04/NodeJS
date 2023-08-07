const http = require('http');
const { readFileSync } = require("fs");

const homePage = readFileSync("./index.html", "utf8");

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(homePage)
        res.end();
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<center><h1>About Page</h1></center>")
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<center><h1>Error Page</h1></center>")
        res.end();
    }
});

server.listen(5000);