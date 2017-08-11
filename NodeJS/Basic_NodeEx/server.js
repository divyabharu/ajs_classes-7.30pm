//import express module
//require() is the predefined function used to import the modules
var express = require("express");


//create the server instance
var app = express();


//deploy the application
//app.use(express.static("D:/AJS_Classes/NodeJS/Basic_NodeEx"));
app.use(express.static(__dirname+"/../Basic_NodeEx"));


//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");