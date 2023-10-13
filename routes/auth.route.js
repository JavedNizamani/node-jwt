const express = require('express');
const route = express.Router();
const {registerUser, signInUser} = require('../controller/auth.controller');

// Registration route

route.post('/sign-up',registerUser);

// signIn route
route.post('/sign-in',signInUser);

module.exports = route;