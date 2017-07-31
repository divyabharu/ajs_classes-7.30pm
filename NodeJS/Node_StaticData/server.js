var express = require("express");

var fs = require("fs");

var app = express();

app.use(express.static(__dirname+"/../Node_StaticData"));

app.get("/emp",function (req,res) {
    fs.readFile(__dirname+"/emp.json",function (err,data) {
        res.send(data);
    });
});

app.listen(8080);
console.log("Server Listening the Port No.8080");
