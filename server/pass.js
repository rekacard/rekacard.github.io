var passport = require('passport')
var passportLocal = require('passport-local');
var expressSession = require('express-session');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/jquery/dist/'));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));


app.use(expressSession({
      secret: process.env.SESSION_SECRET || 'secret',
      resave:false,
      saveUninitialized: false
}))




passport.use(new passportLocal.Strategy(function(username,password, done){
    if(username == password)
    {
        done(null,{ id:username, name: username });
    }
    else
    {
        done(null,null);
    }


}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user,done){
        done(null,user.id);
});
passport.deserializeUser(function(id,done){
        done(null, { id:id,name: id});
});


app.use('/', index);
app.use('/', users);

app.get('/', function(req, res, next) {
  res.render("login",{
      isAuthenticated: req.isAuthenticated(),
      user: req.user
  });
});
app.post('/login',
  passport.authenticate('local'), function(req, res, next) {
  res.redirect("/index1");
});