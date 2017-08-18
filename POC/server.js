var express = require("express");
var bodyparser = require("body-parser");
var fs = require("fs");
var mysql = require("mysql");
var mongodb = require("mongodb");
var jwt = require("jwt-simple");
var app = express();
app.use(express.static(__dirname+"/../POC"));
app.use(bodyparser.json());

var connection = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"root",
   database:"poc"
});

connection.connect();

var tokens=[];

app.post("/login",function (req,res) {
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    connection.query("select uname from login_details where uname='"+uname+"'",function (err,recordsArray,fields) {
        if(recordsArray.length>0){
            var token = jwt.encode({'uname':uname},'hr@tcs.com');
            tokens.push(token);
            res.send({'login':'success','token':token});
        }else{
            res.send({'login':'fail'});
        }
    });
});


app.post("/about",function (req,res) {
    var token = req.body.token;

    if(tokens[0]==token){
        fs.readFile(__dirname+"/sample.json",function (err,data) {
            res.send(data);
        });
    }else{
        res.send({'message':'Authentication Error...!'});
    }
});



app.post("/portfolio",function (req,res) {

    var token = req.body.token;

    if(tokens[0]==token){
        connection.query("select * from products",function (err,recordsArray,fields) {
            res.send(recordsArray);
        });
    }else{
        res.send({'message':'Authentication Error...!'});
    }
});

var mongoClient = mongodb.MongoClient;

app.post("/feedback",function (req,res) {

    var token = req.body.token;

    if(tokens[0]==token){
        mongoClient.connect("mongodb://localhost:27017/poc",function (err,db) {
            db.collection("products").find().toArray(function (mongoError,data) {
               res.send(data);
            });
        });
    }else{
        res.send({'message':'Authentication Error...!'});
    }
});



app.listen(8080);
console.log("Server Listening the Port No.8080");