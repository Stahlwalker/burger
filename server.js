
var express = require("express");
var bodyParser = require("body-parser");

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
  });
