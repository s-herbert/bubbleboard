const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./auth-routes');
const profileRoutes = require('./profile-routes');
const passportSetup = require('./passport-setup');
const keys = require('./keys');
const path = require('path');
const db = require('./models/db');
const app = express();

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

app.use(express.static(__dirname + './../'));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});