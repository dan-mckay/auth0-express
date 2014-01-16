var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({  
    domain:       'fh-dan.auth0.com',
    clientID:     'RngC3hcOfp7nUqea9yF3IvNZimkJt3Z4',
    clientSecret: 'hJJan87MjOKw068qHLTSWawL4iZLioAq3Ua-En_fdgMlnCX0JKoEo_Q4y12HU2fm',
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