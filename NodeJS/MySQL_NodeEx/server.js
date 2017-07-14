var express = require("express");

var mysql = require("mysql");

var app = express();

app.use(express.static(__dirname+"/../MySQL_NodeEx"));


var connection = mysql.createConnection({
   host:"localhost",
    user:"root",
    password:"root",
    database:"demo_classes"
});

connection.connect();

app.get("/emp",function (req,res) {
    connection.query("select * from emp",function (err,records,fields) {
       res.send(records);
    });
});


app.listen(8080);
console.log("Server Listening the Port No.8080");