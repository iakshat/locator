const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/selflocator.html");
});

app.get("/loader.gif", (req, res) => {
    res.sendFile(__dirname + "/loader_real.gif");
});

app.listen(7070,() => {
    console.log("server running on 7070");
});