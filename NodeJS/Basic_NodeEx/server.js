//import express
var express = require("express");


//create the server instance
var app = express();



//deploy the application (client application location)
app.use(express.static(__dirname+"/../Basic_NodeEx"));


//assign the port no.
app.listen(8080);
console.log("Server listening the port no.8080");



