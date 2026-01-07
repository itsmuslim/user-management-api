const express = require('express');
const routeer = express.Router();
const { rejisterUser, loginUser } = require('../controllers/userController');

// @route   POST api/auth/register
// @desc    Register a new user
// @access  Public
routeer.post('/register', rejisterUser);

// @route   POST api/auth/login
// @desc    Login user and return JWT token
// @access  Public
routeer.post('/login', loginUser);

module.exports = routeer;