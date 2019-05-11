const passport = require("passport");
const db = require("../models");


module.exports = {
  register: function (req, res) {
    console.log("registering user");
    db.User.register(new User({ username: req.body.username, email: req.body.email}), req.body.password,
      function (err, user) {
        if (err) {
          console.log(err);
          return res.json(err);
        }
        req.login(user, function(err) {
          if (err) {
            console.log(err);
          }
          res.redirect('/');
        });
      }
    );
  },

  login: function (req, res, next) {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        res.redirect('/');
      }
    })(req, res, next);
  },

  logout: function (req, res) {
    req.logout();
    res.json({ message: "logged out" });
  }
}