var express = require("express");
var mysql = require("mysql");
var bodyparser = require("body-parser");
var jwt = require("jwt-simple");
//create the server instance
var app = express();
//Deploy the Project(AngularJS)
app.use(express.static(__dirname+"/../POC"));
//create the connection object.
var connection = mysql.createConnection({
   host:"localhost",
    user:"root",
    password:"root",
    database:"workshop"
});
//connect to database.
connection.connect();
//set the MIME Type
app.use(bodyparser.json());
var tokens=[];
//create the REST API
app.post("/login",function (req,res) {
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    connection.query("select * from login_details where uname='"+uname+"'",
            function (err,recordsArray,fields) {
        if(recordsArray.length>0){
            var token = jwt.encode({'uname':uname},'tcs@admin.com');
            tokens.push(token);
            res.send({'login':'success','token':token});
        }else{
            res.send({'login':'fail'});
        }
    });
});

app.post("/about",function (req,res) {
   if(req.body.token==tokens[0]){
       connection.query("select * from emp",function (err,records,fields) {
           res.send(records);
       });
   };
});




//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");



