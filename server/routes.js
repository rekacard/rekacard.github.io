<<<<<<< HEAD
module.exports = function(app, db) {
  // var Authenticate = require('./api/email.controller')(db);
  // var Email  = require('./api/email.controller')(db);
  var Uer  = require('./api/user.controller')(db);
  var Seed  = require('./api/seed.controller')(db);
  
  // app.post("/api/login", Email.retrieveIDByEmail);
    app.post("/register", function(req, res) {
    // console.log(req);
    console.log("/register handler");
    res.status(200).type("application/json").json({user: 1});
    // res.status(200).json({user: req.user});
  });
=======
module.exports = function(app, db, auth, passport) {
  var Email  = require('./api/email.controller')(db);
  var Seed  = require('./api/seed.controller')(db);

  app.post("/api/login", Email.retrieveIDByEmail);
>>>>>>> master
  app.get("/api/newrole", Seed.createNewRole);
  app.get("/api/newuser", Seed.createNewUser);
  app.get("/api/neworg", Seed.createNewOrganisation);
  app.get("/api/newevent", Seed.createNewEvent);
  
};