var LocalStrategy = require('passport-local').Strategy;

var config = require('./config');

module.exports = function(app, db, passport) {

  var localAuthenticate = function(req, email, password, done) {
    //console.log("In authenticate function(): username=%s, password=%s", username, password);

    console.log("-- POST /login/ findOne then() result \n ");
    var where = {};
    if (email) {
        where.email_id = email;
    }

    // console.log("-- POST /api/login/ " + where.id);
    db.Email
    // findOne asks sequelize to search
        .findOne({ where: where })
        // this .then() handles successful findAll operation
        .then(function (result) {
            // console.log("-- POST /api/login/ findOne then() result \n " + JSON.stringify(result));
            if (result.password == password)
              return done(null, String(result.user_id));
            return done(null, false);
        })
        // this .catch() handles erroneous findAll operation
        .catch(function (err) {
            // console.log("-- POST /api/login/ findOne then() error \n " + JSON.stringify(err));
            return done(null, false);
        });
  };
  
  passport.use(new LocalStrategy(
    { // redefine the field names the stratgey (passport-local) expects
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
  
    localAuthenticate // the strategy's "verify" callback
  ));
  
  passport.serializeUser(function(username, done) {
    console.log('passport.serializeUser: ' + username);
    done(null, username);
  });

  passport.deserializeUser(function(id, done) {
    console.log('passport.deserializeUser: ' + id);
    var user = id;
    done(null, user);
  });
  
  var isAuthenticated = function(req, res, next) {
    //console.log("isAuthenticated(): ", req.user);
    if (req.isAuthenticated()) {
      next();
    }
    else {
      res.sendStatus(401);
    }
  }

  return {
    isAuthenticated: isAuthenticated,
  }
};
