var express = require("express");

var app = express();

app.get("/register", function(req, resp) {

        resp.status(200);
        resp.type("text/plain");
        resp.send();
});


app.use(express.static(__dirname + "/public"));
app.use("/lib", express.static(__dirname + "/bower_components"));

var port = parseInt(process.argv[2]) || 3000;
app.listen(port, function() {
    console.log("Application started on port %d", port);
});