const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: "490361609185-efrkikm8502j9fdl83ourroqergi94q0.apps.googleusercontent.com",
  clientSecret: "rCOit5eX73wb_GvGq_FFS9cN",
  callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));
