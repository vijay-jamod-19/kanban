const express = require('express');
const {signupUser,loginUser} = require('../controllers/userController')

const router = express.Router();

//POST Route for Create New User
router.route('/signup').post(signupUser);

// POST Route for Login User
router.route('/login').post(loginUser);

module.exports = router;