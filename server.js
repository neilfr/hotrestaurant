var express = require("express");
var path = require("path");

var app = express();

var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var customers = [
    {
        "id":"1",
        "name":"Dracula",
        "email":"dracula@gmail.com",
        "phone":"123-456-7890",
        "table":"1"
    },
    {
        "id":"2",
        "name":"Frankenstein",
        "email":"frankenstein@gmail.com",
        "phone":"098-765-4321",
        "table":"2"
    }
];

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

// Displays a single customer
app.get("/api/customers/:customer", function(req, res) {
    var chosen = req.params.customer;
    console.log(chosen);
   return res.json(customers[chosen-1]);
  });