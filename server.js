var express = require("express");
var path = require("path");

var app = express();

var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
        "id":"id1",
        "name":"Dracula",
        "email":"dracula@gmail.com",
        "phone":"123-456-7890"
    },
    {
        "id":"id2",
        "name":"Frankenstein",
        "email":"frankenstein@gmail.com",
        "phone":"098-765-4321"
    }
];

var waitlist = [];

app.listen(PORT, function(){
    console.log("App is listening on PORT " +PORT);
});

app.get("/", function(req,res){
    console.log("Home!");
    res.sendFile(path.join(__dirname,'home.html'));
});

app.get("/tables", function(req,res){
    console.log("Tables!");
    res.sendFile(path.join(__dirname,'tables.html'));
});

app.get("/reservations", function(req,res){
    console.log("Reservations!");
    res.sendFile(path.join(__dirname,'reservations.html'));
});

// Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

// Displays waitlist
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

// Displays a single table
app.get("/api/tables/:tables", function(req, res) {
    var chosen = req.params.tables;
    console.log(chosen);
    return res.json(tables[chosen-1]);
});

// Create New Table - takes in JSON input
app.post("/api/tables", function(req, res) {
    var newtable = req.body;  
    console.log(newtable);
    if (tables.length<5){
        tables.push(newtable);
    } else {;
        waitlist.push(newtable);
    }
    //res.json(newtable);
});