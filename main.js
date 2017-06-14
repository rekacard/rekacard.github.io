//Load Express package - ECMA6

const express = require("express");

//Create an instance of Express application
const app = express();

// Configure routes
// Look at directory public for any file request
app.use("/",
    // Create a handler for my static content
    express.static(__dirname + "/public")
);

app.use("/images",
    // Create a handler for my static content
    express.static(__dirname + "/pics")
);

app.get("/time", function(req, resp) {
    resp.status(200);
    resp.type("text/plain");
    const currentTime = new Date();
    resp.send(currentTime.toISOString());
});

app.use(function(req, resp) {
    resp.status(404);
    resp.type("text/html");
    resp.send("<h3>Error!</h3>");
});

// Start the server
const port = 3000;

// Open the port. If we're successful. execute the funciton
app.listen(port, function() {
    console.log("listen on Port " + port);
    }
);