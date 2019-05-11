const express = require('express');
const router = express.Router();
const auth = require("../../controllers/AuthController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// route to register
router.post('/register', auth.register);

// route to login 
router.post('/login', auth.login);

router.get("/authorized", isAuthenticated, function (req, res) {
  res.json(req.user);
});

// route for logout action
router.get('/logout', auth.logout);

module.exports = router;
