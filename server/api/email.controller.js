// Defines endpoint handler exposed to client side for retrieving department information from database
var retrieveIDByEmail = function(db) {
  return function(req, res) {
      console.log("retrieve req.query" + JSON.stringify(req.query));

    var where = {};
    if (req.query.email) {
        where.email_id = req.query.email;
    }

    // console.log("-- POST /api/login/ " + where.id);

    db.Email
    // findOne asks sequelize to search
        .findOne({ where: where })
        // this .then() handles successful findAll operation
        // in this example, findAll() used the callback function to return departments
        // we named it departments, but this object also contains info about the
        // latest manager of that department
        .then(function (result) {
            console.log("-- POST /api/login/ findOne then() result \n " + JSON.stringify(result));
            res.json(result);
        })
        // this .catch() handles erroneous findAll operation
        .catch(function (err) {
            console.log("-- POST /api/login/ findOne catch() \n " + JSON.stringify(departments));
            res
                .status(500)
                .json({error: true});
        });

    };
}; 

// Export route handlers
module.exports = function(db) {
  return {
    retrieveIDByEmail: retrieveIDByEmail(db),
  }
};