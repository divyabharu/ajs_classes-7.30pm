var express = require("express");
var mysql = require("mysql");
var mongodb = require("mongodb");
var bodyparser = require("body-parser");
var jwt = require("jwt-simple");
var fs = require("fs");
var app = express();
app.use(bodyparser.json());
app.use(express.static(__dirname+"/../POC"));

//connection object
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"poc"
});

//connect to database
connection.connect();

var tokens=[];
//post request
app.post("/login",function (req,res) {
    var uname = req.body.uname;
    var upwd = req.body.upwd;

    connection.query("select uname from login_details where uname='"+uname+"'",function (err,recordsArray,fields) {
        if(recordsArray.length>0){
            var token = jwt.encode({'uname':uname},'hr@nareshit.in');
            tokens.push(token);
            res.send({"login":"success","token":token});
        }else{
            res.send({"login":"failure"});
        }
    });



});


app.post("/about",function (req,res) {
    var token = req.body.token;

    if(tokens[0] == token){
        fs.readFile(__dirname+"/about.json",function (err,data) {
            res.send(data);
        });
    }else{
        res.send({"401":'Authentication Error !'});
    }
});



var mongoClient = mongodb.MongoClient;



app.post("/contact",function (req,res) {
    var token = req.body.token;

    var uname = req.body.uname;
    var upwd = req.body.upwd;



    if(tokens[0] == token){
        mongoClient.connect("mongodb://localhost:27017/poc" , function (err,db) {
            db.collection("login_details").insert({'uname':uname,'upwd':upwd});
        });
        res.send({"record":"success"});
    }else{
        res.send({"401":'Authentication Error !'});
    }
});


app.post("/portfolio",function (req,res) {
    var token = req.body.token;

    if(tokens[0] == token){
        connection.query("select * from emp",function (err,recordsArray,fields) {
           res.send(recordsArray);
        });
    }else{
        res.send({"401":'Authentication Error !'});
    }
});





//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");