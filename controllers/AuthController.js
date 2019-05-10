const mongoose = require("mongoose");
const passport = require("passport");
const db = require("../models");

// const userController = {};

module.exports = {
  register: function(req, res) {
    db.User
      .create(req)
      .then(dbUser => res.json(dbUser.username))
      .catch(err => res.status(422).json(err));
    },
    login: function(req, res) {
      passport.authenticate('local')(req, res, function () {
        res.json(res);
      })
      db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  logout: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};



// // Restrict access to root page
// userController.home = function(req, res) {
//   res.render('index', { user : req.user });
// };

// // Go to registration page
// userController.register = function(req, res) {
//   res.render('register');
// };

// // Post registration
// userController.doRegister = function(req, res) {
//   User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
//     if (err) {
//       return res.json(user);
//     }

//   });
// };

// // Go to login page
// userController.login = function(req, res) {
//   res.json(res);
// };

// // Post login
// userController.doLogin = function(req, res) {
//   passport.authenticate('local')(req, res, function () {
//     res.json(res);
//   });
// };

// // logout
// userController.logout = function(req, res) {
//   req.logout();
//   res.json(res);
// };

// module.exports = userController;