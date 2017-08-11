var express = require("express");
var mysql = require("mysql");
var mongodb = require("mongodb");
var bodyparser = require("body-parser");
var app = express();
app.use(express.static(__dirname+"/../POC"));
app.use(bodyparser.json());
var jwt = require("jwt-simple");


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

    connection.query("select uname from login_details where uname='"+uname+"'",
        function (err,recordsArray,fields) {
        if(recordsArray.length>0){

            var token = jwt.encode({'uname':uname},"hr@tcs.com");
            tokens.push(token);
            res.send({"login":"success","token":token});
        }else{
            res.send({"login":"fail !"});
        }
    });
});


app.listen(8080);
console.log("Server Listening the Port No.8080");