const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    if (req.url === "/") {
        res.end("Hello, Welcome to the home page");
    }
    if (req.url === "/about") {
        res.end("Here is a short history");
    }
    res.end(`<h1>Oops!!</h1>
    <p>We cannot seem to find the page we're looking for!</p>
    <a href="/">Home</a>`);
});

server.listen(5000);