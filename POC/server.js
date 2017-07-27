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




//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");