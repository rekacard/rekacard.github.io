// TODO: Add ability to choose manager when registering a department. An existing manager shouldn't be
// TODO: allowed on the list. Saving of department in departments table and of manager in dept_managers table should be
// TODO: one  transaction (i.e., atomic)

// TODO: 4. Add route that would handle retrieval of employees that are not managers and would return first name, last
// TODO: name, and emp no to client
// TODO: 6. Update POST api/departments route to include insertion of new department and its manager into the
// TODO: 6. dept_manager table

// DEPENDENCIES ------------------------------------------------------------------------------------------------------
// Loads express module and assigns it to a var called express
var express = require("express");

// Loads path to access helper functions for working with files and directory paths
var path = require("path");

// Loads bodyParser to populate and parse the body property of the request object
var bodyParser = require("body-parser");

// Loads sequelize ORM
var Sequelize = require("sequelize");

// CONSTANTS ---------------------------------------------------------------------------------------------------------
// Defines server port.
// Value of NODE_PORT is taken from the user environment if defined; port 3000 is used otherwise.
// const NODE_PORT = process.env.NODE_PORT || 3000;
const NODE_PORT = 3000;

// Defines paths
// __dirname is a global that holds the directory name of the current module
const CLIENT_FOLDER = path.join(__dirname, '/../client');  // CLIENT FOLDER is the public directory
const MSG_FOLDER = path.join(CLIENT_FOLDER, '/assets/messages');

// Defines MySQL configuration
const MYSQL_DATABASE = 'shop';
const MYSQL_USERNAME = 'root';
const MYSQL_PASSWORD = 'asdf';

// OTHER VARS ---------------------------------------------------------------------------------------------------------
// Creates an instance of express called app
var app = express();

// DBs, MODELS, and ASSOCIATIONS ---------------------------------------------------------------------------------------
// Creates a MySQL connection
var sequelize = new Sequelize(
    MYSQL_DATABASE,
    MYSQL_USERNAME,
    MYSQL_PASSWORD,
    {
        host: 'localhost',         // default port    : 3306
        logging: console.log,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Loads model for department table
var Grocery = require('./models/grocery')(sequelize, Sequelize);

// Associations. Reference: https://dev.mysql.com/doc/employee/en/sakila-structure.html
// Link Department model to DeptManager model through the dept_no FK. This relationship is 1-to-N and so we use hasMany
// Link DeptManager model to Employee model through the emp_no FK. This relationship is N-to-1 and so we use hasOne
// Department.hasMany(Manager, {foreignKey: 'dept_no'});
// Manager.hasOne(Employee, {foreignKey: 'emp_no'});

// MIDDLEWARES --------------------------------------------------------------------------------------------------------

// Serves files from public directory (in this case CLIENT_FOLDER).
// __dirname is the absolute path of the application directory.
// if you have not defined a handler for "/" before this line, server will look for index.html in CLIENT_FOLDER
app.use(express.static(CLIENT_FOLDER));

// Populates req.body with information submitted through the registration form.
// Default $http content type is application/json so we use json as the parser type
// For content type is application/x-www-form-urlencoded  use: app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// ROUTE HANDLERS -----------------------------------------------------------------------------------------------------
// Defines endpoint handler exposed to client side for retrieving department information from database
app.get("/api/id", function (req, res) {
    var where = {};
    if (req.query.id) {
        where.id = req.query.id
    }
    // console.log("-- GET /api/id/ " + where.id);
    Grocery
    // findOne asks sequelize to search
        .findOne({ where: where })
        // this .then() handles successful findAll operation
        // in this example, findAll() used the callback function to return departments
        // we named it departments, but this object also contains info about the
        // latest manager of that department
        .then(function (result) {
            console.log("-- GET /api/id/ findOne then() result \n " + JSON.stringify(result));
            res.json(result);
        })
        // this .catch() handles erroneous findAll operation
        .catch(function (err) {
            console.log("-- GET /api/id/ findOne catch() \n " + JSON.stringify(departments));
            res
                .status(500)
                .json({error: true});
        });
}); 

// Defines endpoint handler exposed to client side for retrieving department information from database
app.get("/api/grocery", function (req, res) {
    Grocery
    // findAll asks sequelize to search
        .findAll({
            where: {
                // This where condition filters the findAll result so that it only includes department names and
                // department numbers that have the searchstring as a substring (e.g., if user entered 's' as search
                // string, the following
                $or: [
                    {brand: {$like: "%" + req.query.searchString1 + "%"}},
                    {name: {$like: "%" + req.query.searchString2 + "%"}}
                ]
            }
            , order: [["id", "ASC"]]
            , limit: 20
        })
        .then(function (grocery) {
            res
                .status(200)
                .json(grocery);
        })
        .catch(function (err) {
            res
                .status(500)
                .json(err);
        });
});

// Defines endpoint handler exposed to client side for retrieving department information from database
app.get("/api/grocery/brand", function (req, res) {
    Grocery
    // findAll asks sequelize to search
        .findAll({
            where: {
                // This where condition filters the findAll result so that it only includes department names and
                // department numbers that have the searchstring as a substring (e.g., if user entered 's' as search
                // string, the following
                    brand: {$like: "%" + req.query.searchString + "%"},
            }
            , order: [["id", "ASC"]]
            , limit: 20
        })
        .then(function (grocery) {
            console.log(JSON.stringify(grocery))
            res
                .status(200)
                .json(grocery);
        })
        .catch(function (err) {
            // con.log(JSON.stringify(err));
            res
                .status(500)
                .json(err);
        });
}); 

// Defines endpoint handler exposed to client side for retrieving department information from database
app.get("/api/grocery/product", function (req, res) {
    Grocery
    // findAll asks sequelize to search
        .findAll({
            where: {
                // This where condition filters the findAll result so that it only includes department names and
                // department numbers that have the searchstring as a substring (e.g., if user entered 's' as search
                // string, the following
                    name: {$like: "%" + req.query.searchString + "%"},
            }
            , order: [["id", "ASC"]]
            , limit: 20
        })
        .then(function (grocery) {
            res
                .status(200)
                .json(grocery);
        })
        .catch(function (err) {
            res
                .status(500)
                .json(err);
        });
});

// -- Updates department info
app.put('/api/grocery/brand/', function (req, res) {
console.log("Undate brand");
    console.log(JSON.stringify(req.body));
    
    var where = {};
    where.id = req.body.id;

    //*** Updates department detail
    Grocery
        .update({
                brand: req.body.brand,
            }, {
                where: where,
            }
        )
        .then(function (result) {
            console.log("result: " + result);
            res
              .status(200)
              .json({ sucess: result });
        })
        .catch(function (err) {
            console.log("error: " + err);
            res
              .status(500)
              .json(err);
        });
});

// -- Updates department info
app.put('/api/grocery/product/', function (req, res) {
console.log("Undate product name");
    console.log(JSON.stringify(req.body));
    var where = {};
    where.id = req.body.id;
    //*** Updates department detail
    Grocery
        .update({
                name: req.body.name,
            }, {
                where: where,
            }
        )
        .then(function (result) {
            console.log("result: " + result);
            res
              .status(200)
              .json({ sucess: result });
        })
        .catch(function (err) {
            console.log("error: " + err);
            res
              .status(500)
              .json(err);
        });
});





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