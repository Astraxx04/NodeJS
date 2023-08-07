const express = require('express');
const path = require('path');

const app = express();

// Setting up static and middleware
app.use(express.static("./navbar-app/public"));

// Cn dump this in the public folder itself
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.get("*", (req, res) => {
    res.status(404).send("Resource not found")
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});