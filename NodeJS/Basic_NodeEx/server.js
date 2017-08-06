//import express module
var express = require("express");

//create the node server instance
var app = express();

//Deploy the Application.
app.use(express.static(__dirname+"/../Basic_NodeEx"));

//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");