const UserController = require('./controllers/UserController');
const passport = require('passport');

module.exports = function(app){

  // app.get('/', (req, res) => {
  //   console.log('get request to /')
  // })
  // app.post('/', (req, res) => {
  //   console.log('post request to /')
  // })

  // app.get('/cheese',(req, res) => {res.sendFile(path.join(__dirname, '../index2.html'))});
  // app.post('/login', UserController.checkUser, UserController.createUser)
  // app.get('/all', UserController.getAllUsers);

  app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

  app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect('/cheese');
  });

}