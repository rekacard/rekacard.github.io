
module.exports = function(auth, app, passport) {
  app.post('/login', passport.authenticate('local'), function(req, res) {
    res.status(200).json({user: req.user});
  });
  
  app.get('/user/auth', function(req, res) {
    if (req.user) {
      res.status(200).json({ user: req.user });
    }
    else {
      res.sendStatus(401);
    }
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};
