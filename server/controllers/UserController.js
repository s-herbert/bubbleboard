const User = require('../models/UserModel');

const UserController = {

  getAllUsers(req, res) {
    User.find({}, (err, info) => res.send(info));
  },

  createUser(req, res) {
    User.create(req.body, (err, info) => {if(err) console.log(err)})
  },

  checkUser(req, res, next) {
    User.findOne(req.body, (err, info) => {
      if (err) console.log(err);
      if (!info) {
        next();
      } else {
        return;
      }
    });
  }
};

module.exports = UserController;
