const express = require('express');
const router = express.Router();
const auth = require("../../controllers/AuthController");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// route to register
router.get('/register')
  .post(auth.register);

// route to login 
router.get('/login')
  .post(auth.login);

// route for logout action
router.get('/logout', auth.logout);

module.exports = router;
