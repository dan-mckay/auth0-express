
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var passport = require('passport');
var strategy = require('./lib/setup-passport');
var fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session({ secret: 'shhhhhhhhh' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/loggedin', function(req, res) {
  res.render('index', { 
    title: 'Login Auth0 Test App',
    user: req.session.passport.user
  });
});

app.get('/', function(req, res) {
  res.render('login', { 
    title: 'Login Auth0 Test App',
  });
});

// Auth0 callback handler
app.get('/callback', passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }), 
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/loggedin");
  }
);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
