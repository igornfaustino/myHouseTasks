const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// REGISTER
router.post('/register', function (req, res, next) {
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});

	User.addUser(newUser, function (err, user) {
		if (err){
			res.json({success: false, msg: 'Failed to register user'});
		} else {
			res.json({success: true, msg: 'user registered'});

		}
	})
});

// AUTHENTICATE
router.get('/authenticate', function (req, res, next) {
	res.send('AUTHENTICATE');
});

// PROFILE
router.get('/profile', function (req, res, next) {
	res.send('PROFILE');
});

module.exports = router;