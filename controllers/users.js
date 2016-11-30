var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var models  = require('../models');
var mysql = require('mysql');
var keys = require('../config/keys.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var user_Info = require('../models/user_info');

// Below are the routes which will be needed by the app
 
router.get('/signup', function(req, response){
	response.render('signup');
});

router.get('/login', function(req, response){
	response.render('login');
});

router.post('/signup', function(req, response){
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;
	var password2 = req.body.password2;

	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if(errors){
		response.render('signup',{
			errors:errors
		})
	} else {
		var salt = bcrypt.genSaltSync(4);
		var hashedPassword = bcrypt.hashSync(password, salt);
		var role = 'user';

		var newUser = {
			name: name,
			email: email,
			sword_fish: hashedPassword,
			role: role
		}

		models.user_info.findOne({
	  		where: {
	  			'email': email
	  		}
		}).then(function(user) {
			if (user == null) {
				models.user_info.create(newUser).then(function(){
					req.flash('success_msg', 'You are signed up can now login');
					response.redirect('./login');
				})
			} else {
				req.flash('error',"You have an account.");
				response.redirect('./login');
			}			
		}).catch(function(error){
			req.flash('error',"There was a problem signing you up. Try Again");
			response.redirect('./signup');
		})

		// models.user_info.create(newUser).then(function(){
		// 	req.flash('success_msg', 'You are signed up can now login');
		// 	response.redirect('./login');
		// }).catch(function(error){
		// 	req.flash('error',"Please use a different email");
		// 	response.redirect('/signup');
		// })
	}
});

passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
},
  function(username, password, done) {
  	models.user_info.findOne({
  		where: {
  			'email': username
  		}
  	}).then(function(user) {
  		if (user == null){
  			console.log('no match');
  			return done(null, false, {message: 'Invalid email or password'})
  		}

  		if(bcrypt.compareSync(password,user.sword_fish)) {
  			if (user.role != 'editor') {
  				user.role = null;
  			}  				
  			return done(null, user,user.name,user.email,user.role)
  		}

  		return done(null, false, {message: 'Invalid email or password'})
  	})
  }
))

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	models.user_info.findOne({
		where: {
			'id': id
		}
	}).then(function(user){
		if(user == null) {
			done(new Error('Wrong user id'))
		}
		done(null, user)
	})
})

router.post('/login', passport.authenticate('local', {
	successRedirect: '/', 
	failureRedirect:'/users/login', 
	failureFlash: true
}));

router.get('/logout', function(req, response){
	req.logout();
	req.flash('success_msg', "You are logged out.");
	response.redirect('/');
});

module.exports = router;