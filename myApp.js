var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + "/public"))
    

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});






 module.exports = app;
