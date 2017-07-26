module.exports = function(app, db, auth, passport) {
  var Email  = require('./api/email.controller')(db);
  var Seed  = require('./api/seed.controller')(db);

  app.post("/api/login", Email.retrieveIDByEmail);
  app.get("/api/newrole", Seed.createNewRole);
  app.get("/api/newuser", Seed.createNewUser);
  app.get("/api/neworg", Seed.createNewOrganisation);
  app.get("/api/newevent", Seed.createNewEvent);
  
};