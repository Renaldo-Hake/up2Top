// SERVER

// Requirements
const express = require('express');
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// initialize express
const app = express();

// ROUTES
require('./routes/index')(app);

// Security
app.use(helmet());

// Connect to Database
const uri = "mongodb+srv://renaldo:renaldo@cluster0.johk3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  dbname: "myFirstDatabase"
});

// ERROR
mongoose.connection.on('error', function() {
  console.log("Could not connect to the database. Exiting...");
  process.exit();
});

//SUCCESS
mongoose.connection.once('open', function() {
  console.log("Successfully connected to the database");
});

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev'));


// PORT
const PORT = 8000;
app.listen(PORT, () => console.log("Listening on port:", PORT));

module.exports = app;