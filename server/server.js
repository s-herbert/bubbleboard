const express = require('express');
const bodyParser = require('body-parser'); //to access req.body
const passport = require('passport');
const keys = require('./keys')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('./models/db');

// passport.use(new GoogleStrategy({
//   clientID: keys.google.clientID,
//   clientSecret: keys.google.clientSecret,
//   callbackURL: "/auth/google/cheese"
// },
// function(accessToken, refreshToken, profile, done) {
//      User.findOrCreate({ googleId: profile.id }, function (err, user) {
//        return done(err, user);
//      });
// }
// ));

//create express server
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + './../'));
app.use(passport.initialize());

//create server routers
const router = require('./router');
router(app);

app.listen(3000, () => console.log('backend server up! this is run on port 3000, but visit 8080 for the dev server'))
