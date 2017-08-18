var express = require("express");
var fs = require("fs");
var app = express();
app.use(express.static(__dirname+"/../Read_StaticData"));
app.get("/products",function(req,res){
    fs.readFile(__dirname+"/sample.json",function (err,data) {
        res.send(data);
    });
});
app.listen(8080);
console.log("Server Listening the Port No.8080");