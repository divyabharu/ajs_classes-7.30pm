var express = require("express");
var mongodb = require("mongodb");
var app = express();
app.use(express.static(__dirname+"/../Node_MongoDB"));
var nareshIT = mongodb.MongoClient;
app.get("/test",function (req,res) {
    nareshIT.connect("mongodb://127.0.0.1:27017/test",function (err,db) {
        db.collection("products").find().toArray(function (mongoError,array) {
            res.send(array);
        });
    });
});
app.listen(8080);
console.log("Server Listening the Port No.8080");