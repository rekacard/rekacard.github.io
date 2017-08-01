module.exports = function(auth, app, passport) {
  app.post('/login', passport.authenticate('local'), function(req, res) {
    // console.log(req);
    res.status(200).json({user: req.user});
  });
  
  app.get('/user/auth', function(req, res) {
    if (req.user) {
      console.log('/user/auth found');
      res.status(200).json({ user: req.user });
    }
    else {
      console.log('/user/auth Not found');
      res.sendStatus(401);
    }
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};