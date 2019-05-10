const express = require('express');
const router = express.Router();
const auth = require("../controllers/AuthController.js");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/dashboard')
  .get(auth.username)

// route to register
router.get('/register')
  .get(auth.register)
  .post(auth.doregister);

// route to login 
router.get('/login')
  .get(auth.login)
  .post(auth.doLogin);

// route for logout action
router.get('/logout', auth.logout);

module.exports = router;
