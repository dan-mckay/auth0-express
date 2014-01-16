var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({  
    domain:       '<-- YOUR AUTH0 DOMAIN -->',
    clientID:     '<-- YOUR AUTH0 CLIENTID -->',
    clientSecret: '<-- YOUR AUTH0 CLIENTSECRET -->',
    callbackURL:  '/callback'
  }, function(accessToken, refreshToken, profile, done) {
    //Some tracing info
    //console.log('profile is', profile);
    return done(null, profile);
  });

passport.use(strategy);

// This is not a best practice, but we want to keep things simple for now
passport.serializeUser(function(user, done) {
  done(null, user); 
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = strategy;