const express = require("express");

var port = process.env.PORT || 3000;

var app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log("started server");
});