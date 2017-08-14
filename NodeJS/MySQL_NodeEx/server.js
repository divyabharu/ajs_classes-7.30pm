var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.static(__dirname+"/../MySQL_NodeEx"));

//create the connection object.
var connection = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"root",
   database:"online_classes"
});


//connect to database.
connection.connect();

//create the get request.
app.get("/products",function (req,res) {
    connection.query("select * from products",function (err,recordsArray,fields) {
        res.send(recordsArray);
    });
});

//assign the port no.
app.listen(8080);
console.log("Server Listening the port no.8080");