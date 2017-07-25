module.exports = function(app, db) {
  // var Grocery  = require('./api/grocery.controller')(db);
  var Email  = require('./api/email.controller')(db);
  var Seed  = require('./api/seed.controller')(db);

  app.post("/api/id", Email.retrieveIDByEmail);
  app.get("/api/newrole", Seed.createNewRole);
  app.get("/api/newuser", Seed.createNewUser);
  app.get("/api/neworg", Seed.createNewOrganisation);
  app.get("/api/newevent", Seed.createNewEvent);
  
};