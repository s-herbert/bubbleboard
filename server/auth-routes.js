const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    // res.render('login', { user: req.user });
    res.send('hello');
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
    res.redirect('/profile');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send('bye')
  // res.redirect('/');
});

module.exports = router;

// res.sendFile(path.join(__dirname, '../index2.html'))