module.exports = function(app, db) {
  // var Authenticate = require('./api/email.controller')(db);
  // var Email  = require('./api/email.controller')(db);
  var User  = require('./api/user.controller')(db);
  var Events  = require('./api/event.controller')(db);
  var Event_User  = require('./api/event_user.controller')(db);
  var Seed  = require('./api/seed.controller')(db);
  
  // app.post("/api/login", Email.retrieveIDByEmail);
  // app.post("/register", function(req, res) {
  //   console.log(req.body);
  //   console.log("/register handler");
  //   res.status(200).type("application/json").json({user: 1});
  //   res.status(200).json({user: req.user});
  // });

  app.post("/register", User.registerUser);
  app.get("/api/username", User.retrieveUser);
  app.get("/api/event", Events.retrieveEvent);
  app.get("/api/upcomingevent", Event_User.retrieveUpcomingEvent);
  app.get("/api/pastevent", Event_User.retrievePastEvent);

  app.get("/new", Seed.createNewAllTables);       // events Table

};