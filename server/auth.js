var LocalStrategy = require('passport-local').Strategy;

var config = require('./config');

function authenticateUser(username, password) {
  var userDB = config.USER_DATABASE;

  for (var i=0; i<userDB.length; i++) {
    var currentUser = userDB[i];
    if (username == currentUser.username) {
      return (password == currentUser.password);
    }
  }

  return false;
}

module.exports = function(app, passport) {

  var localAuthenticate = function(username, password, done) {
    //console.log("In authenticate function(): username=%s, password=%s", username, password);

    var valid = authenticateUser(username, password);
    if (valid) return done(null, username);
    return done(null, false);
  };
  
  passport.use(new LocalStrategy(
    { // redefine the field names the stratgey (passport-local) expects
      usernameField: 'username',
      passwordField: 'password',
    },
  
    localAuthenticate // the strategy's "verify" callback
  ));
  
  passport.serializeUser(function(username, done) {
    //console.log('passport.serializeUser: ' + username);
    done(null, username);
  });
  
  passport.deserializeUser(function(id, done) {
    //console.log('passport.deserializeUser: ' + id);
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
