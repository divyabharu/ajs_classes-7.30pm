var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.static(__dirname+"/../MySQL_Ex"));
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"workshop"
});
connection.connect();
app.get("/emp",function (req,res) {
    connection.query("select * from emp",function (err,recordsArray,fields) {
        res.send(recordsArray);
    });
});
app.listen(8080);
console.log("Server Listening the port no.8080");