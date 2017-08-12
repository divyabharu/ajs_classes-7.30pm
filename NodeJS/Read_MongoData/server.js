var express = require("express");
var mongodb = require("mongodb");
var app = express();
app.use(express.static(__dirname+"/../Read_MongoData"));
//create the client
var nareshIT = mongodb.MongoClient;
//create the get request.
app.get("/products",function (req,res) {
    nareshIT.connect("mongodb://localhost:27017/demo",
                                        function (err,db) {
        db.collection("products").find().toArray(
                                    function (mongoError,array) {
           res.send(array);
        });
    });
});
//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");