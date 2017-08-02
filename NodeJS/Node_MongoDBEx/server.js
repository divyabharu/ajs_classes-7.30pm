var express = require("express");
var mongodb = require("mongodb");
var app = express();
app.use(express.static(__dirname+"/../Node_MongoDBEx"));
var mongoClient = mongodb.MongoClient;

app.get("/subjects",function (req,res) {
    mongoClient.connect("mongodb://localhost:27017/test",function (err,db) {
        db.collection("emp").find().toArray(function (mongoError,array) {
            res.send(array);
        });
    });
});

app.listen(8080);
console.log("Server Listening the Port No.8080");