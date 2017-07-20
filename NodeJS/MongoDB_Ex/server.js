var express = require("express");
var mongodb = require("mongodb");
var app = express();
app.use(express.static(__dirname+"/../MongoDB_Ex"));
//create the mongo client
var nareshIT = mongodb.MongoClient;
app.get("/emp",function (req,res) {
    nareshIT.connect("mongodb://localhost:27017/test",function (err,db) {
        db.collection("emp").find().toArray(function (err, array) {
            res.send(array);
        });
    });
});
app.listen(8080);
console.log("Server Listening the port no 8080");










