var express = require('express');
var router = express.Router();
var models  = require('../models');
var mysql = require('mysql');
var keys = require('../config/keys.js');

// Below are the routes which will be needed by the app

//Redirect the default path to /home
router.get('/', function(req, response) {
	response.redirect('/home');
});

router.get('/home', function(req, response){
	// connection.query("SELECT * FROM text_contents", function(err, data){
	// 	if (err) throw err;
	models.text_contents.findAll({
	}).then(function(data) {	
		var handleObj = { entry: data };
		response.render('index', handleObj);
	});
});

router.get('/authenticated', authenticatedUser, function(req,response){
	response.render('authenticated');
});

//Use Karma testing for proper case

router.get('/subj/:categ', function(req, response){
	var categ = req.params.categ;

	models.text_contents.hasMany(models.content_fields, {foreignKey: 'content_id'});
	models.text_contents.hasMany(models.media_source, {foreignKey: 'content_id'});
	models.content_fields.belongsTo(models.text_contents, {foreignKey: 'id'});
	models.media_source.belongsTo(models.text_contents, {foreignKey: 'id'});
	models.text_contents.findAll( { include: [
		{
			model: models.content_fields, where : {ethn_id: categ}
		},
		{
			model: models.media_source
		}
		], 
	})
	.then(function(results){
		//Write this as a RETURN for Karma testing
		var handleObj = {entry:results, isSubj:true, searchParam: true};
		response.render('index', handleObj);
	});

});

router.get('/group/:groupname', function(req, response){
	var groupname = req.params.groupname;

	models.text_contents.hasMany(models.media_source, {foreignKey: 'content_id'});
	models.media_source.belongsTo(models.text_contents, {foreignKey: 'id'});
	models.text_contents.findAll( { where : {group: groupname}, include: [
		{
			model: models.media_source
		}
		], 
	})
	.then(function(results){
		//Write this as a RETURN for Karma testing
		var handleObj = {entry:results, isGroup:true, searchParam: true};
		response.render('index', handleObj);
	});

});

function authenticatedUser(req, response, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in.');
		response.redirect('/users/login');
	}
}

module.exports = router;