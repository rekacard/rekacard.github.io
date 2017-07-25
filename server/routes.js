module.exports = function(app, db) {
  // var Grocery  = require('./api/grocery.controller')(db);
  var Email  = require('./api/email.controller')(db);

  //Search items that match brand name or product name
  // app.get("/api/id", Grocery.retrieveByID);
  // app.get("/api/grocery", Grocery.retrieveAll);
  // app.get("/api/grocery/brand", Grocery.retrieveByBrand);
  // app.get("/api/grocery/product", Grocery.retrieveByProduct);
  // app.put('/api/grocery/brand/', Grocery.UpdateBrand);
  // app.put('/api/grocery/product/', Grocery.UpdateProduct);

  app.post("/api/id", Email.retrieveIDByEmail);
  app.get("/api/new", Email.createNew);
};