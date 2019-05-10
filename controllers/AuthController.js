const passport = require("passport");
const db = require("../models");


module.exports = {
  register: function (req, res) {
    console.log("registering user");
    db.User.register(
      new db.User({ username: req.body.username, email: req.body.email }),
      req.body.password,
      function (err, user) {
        if (err) {
          console.log(err);
          return res.json(err);
        }
        passport.authenticate("local")(req, res, function (data) {
          res.json(req.user);
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
        return res.json(info);
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.json(user);
      });
    })(req, res, next);
  },
  
  isAuthorized: function (req, res) {
    res.json(req.user);
  },


  findAll: function(req, res) {
    db.Entries
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  logout: function (req, res) {
    req.logout();
    res.json({ message: "logged out" });
  }
}