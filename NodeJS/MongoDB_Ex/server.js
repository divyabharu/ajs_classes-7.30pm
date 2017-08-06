var express = require("express");
var mongodb = require("mongodb");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(express.static(__dirname+"/../MongoDB_Ex"));

var nareshIT = mongodb.MongoClient;

app.post("/emp",function (req,res) {
    nareshIT.connect("mongodb://127.0.0.1:27017/workshop",function (err,db) {
        db.collection("registration").insert({'uname':req.body.uname,'upwd':req.body.upwd});
    });
});

app.listen(8080);
console.log("Server listening the port No . 8080");