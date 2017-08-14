var express = require("express");
var mongodb = require("mongodb");
var app = express();
app.use(express.static(__dirname+"/../MongoDB_NodeEx"));


//create the client
var onlineClient = mongodb.MongoClient;

//get request
app.get("/products",function (req,res) {
    onlineClient.connect("mongodb://127.0.0.1:27017/online_classes",function (err,db) {
        db.collection("products").find().toArray(function (mongoError,array) {
            res.send(array);
        });
    });
});


//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");