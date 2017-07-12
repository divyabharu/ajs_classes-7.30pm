//import express
var express = require("express");

//import mongodb
var mongodb = require("mongodb");

//import body-parser
var bodyparser = require("body-parser");

//import jwt-module
var jwt = require("jwt-simple");

//create the server.
var app = express();

//Link the Client Location.
app.use(express.static(__dirname+"/../SlamBook"));

//set the JSON As the MIME Type.
app.use(bodyparser.json());

//Default Output.
app.get("/",function (req,res) {
   res.redirect("/index.html");
});

//create the mongo client
var mongoClient = mongodb.MongoClient;

var tokens=[];
//Post Request.
app.post("/SlamBook/login/login",function (req,res) {
    var uname = req.body.uname;
    var upwd = req.body.upwd;


    mongoClient.connect("mongodb://localhost:27017/slambook",function (err,db) {
        db.collection("login_details").find().toArray(function (err,array) {
            for(var i=0;i<array.length;i++){
                if(array[i].uname==uname && array[i].upwd==upwd){
                    var token = jwt.encode({'uname':uname},'hr@tcs.com');
                    tokens.push(token);
                    res.send({'login':'success','token':token});
                }else{
                    res.send({'login':'failure'});
                }
            }
        });
    });

});


//port number.
app.listen(8080);
console.log("Server Listening the Port No.8080");