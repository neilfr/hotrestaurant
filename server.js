var express = require("express");
var path = require("path");

var app = express();

var PORT = 3000;

app.listen(PORT, function(){
    console.log("App is listening on PORT " +PORT);
});

app.get("/", function(req,res){
    console.log("Home!");
   // res.send("Welcome to Table Finder!");
    res.sendFile(path.join(__dirname,'home.html'));
});

app.get("/tables", function(req,res){
    console.log("Tables!");
    //res.send("Welcome to Tables Page!");
    res.sendFile(path.join(__dirname,'tables.html'));
});

app.get("/reservations", function(req,res){
    console.log("Reservations!");
    //res.send("Welcome to Reservations Page!");
    res.sendFile(path.join(__dirname,'reservations.html'));
});