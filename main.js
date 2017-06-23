var express = require("express");

var app = express();

app.get("/register", function(req, resp) {

        // console.log(JSON.stringify(req));
        console.log("Print req");
        
        console.log(JSON.stringify(req.query));
        console.log(req.query.name);
        console.log("End of req");

        resp.status(201);
        resp.type("text/plain");
        resp.send();

    // resp.status(202);
    // resp.type("application/json");
    // resp.json({regId: regId});

});


app.use(express.static(__dirname + "/public"));
app.use("/lib", express.static(__dirname + "/bower_components"));

var port = parseInt(process.argv[2]) || 3000;
app.listen(port, function() {
    console.log("Application started on port %d", port);
});