// DEPENDENCIES ------------------------------------------------------------------------------------------------------
// Loads express module and assigns it to a var called express
var express = require("express");

// Loads path to access helper functions for working with files and directory paths
var path = require("path");

// Loads bodyParser to populate and parse the body property of the request object
var bodyParser = require("body-parser");

// Loads Session
var session = require('express-session');

// Load authentication module
var passport = require('passport');

// Loads sequelize ORM
var Sequelize = require("sequelize");

// Loads sequelize ORM
var config = require("./config");

// CONSTANTS ---------------------------------------------------------------------------------------------------------
// Defines server port.
// Value of NODE_PORT is taken from the user environment if defined; port 3000 is used otherwise.
const NODE_PORT = process.env.PORT || process.env.NODE_PORT || config.PORT || 3000;

// Defines paths
// __dirname is a global that holds the directory name of the current module
const CLIENT_FOLDER = path.join(__dirname, '/../client');  // CLIENT FOLDER is the public directory
const MSG_FOLDER = path.join(CLIENT_FOLDER, '/assets/messages');

// OTHER VARS ---------------------------------------------------------------------------------------------------------
// Creates an instance of express called app
var app = express();

// Load Database Models
const db = require('./db');

// MIDDLEWARES --------------------------------------------------------------------------------------------------------


// Populates req.body with information submitted through the registration form.
// Default $http content type is application/json so we use json as the parser type
// For content type is application/x-www-form-urlencoded  use: app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// ROUTE HANDLERS ---------------------------------------------------------------------------------
// Load Routes handlers
app.use(session({
  secret: config.SECRET,
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// Serves files from public directory (in this case CLIENT_FOLDER).
// __dirname is the absolute path of the application directory.
// if you have not defined a handler for "/" before this line, server will look for index.html in CLIENT_FOLDER
app.use(express.static(CLIENT_FOLDER));

var auth = require('./auth')(app, db, passport);
const auth_routes = require('./auth_routes')(auth, app, passport);

const routes = require('./routes')(app, db);

// ERROR HANDLING ----------------------------------------------------------------------------------------------------
// Handles 404. In Express, 404 responses are not the result of an error,
// so the error-handler middleware will not capture them.
// To handle a 404 response, add a middleware function at the very bottom of the stack
// (below all other path handlers)
app.use(function (req, res) {
    res.status(404).sendFile(path.join(MSG_FOLDER + "/404.html"));
});

// Error handler: server error
app.use(function (err, req, res, next) {
    res.status(501).sendFile(path.join(MSG_FOLDER + '/501.html'));
});


// SERVER / PORT SETUP ------------------------------------------------------------------------------------------------
// Server starts and listens on NODE_PORT
app.listen(NODE_PORT, function () {
    console.log("Server running at http://localhost:" + NODE_PORT);
});