var express = require("express");
var fs = require("fs");
var app = express();
app.use(express.static(__dirname+"/../StaticData_NodeEx"));

//get request.
app.get("/products",function (req,res) {
    fs.readFile(__dirname+"/test.json",function (err,data) {
        res.send(data);
    });
});

//assign the port no.
app.listen(8080);
console.log("Server listening the port no.8080");
