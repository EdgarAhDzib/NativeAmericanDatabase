var express = require('express');
var router = express.Router();
var models  = require('../models');
var mysql = require('mysql');
var keys = require('../config/keys.js');

//The table associations assigned through Sequelize
models.text_contents.hasMany(models.content_fields, {foreignKey: 'content_id'});
models.text_contents.hasMany(models.media_source, {foreignKey: 'content_id'});
models.text_contents.hasOne(models.source_ref, {foreignKey: 'content_id'});
models.content_fields.belongsTo(models.text_contents, {foreignKey: 'id'});
models.media_source.belongsTo(models.text_contents, {foreignKey: 'id'});
models.text_contents.hasOne(models.source_ref, {foreignKey: 'content_id'});

// Below are the routes which will be needed by the app

//Redirect the default path to /home
router.get('/', function(req, response) {
	response.redirect('/home');
});

router.get('/home', function(req, response){
	models.text_contents.findAll({
	}).then(function(data) {	
		var handleObj = { entry: data, showMenus: true };
		response.render('index', handleObj);
	});
});

//Show the cultures menu
router.get('/cultures', function(req, response){
	models.native_group.findAll({
	}).then(function(data) {	
		var handleObj = { entry: data, cultures: true };
		response.render('index', handleObj);
	});
});

//Show the subjects menu
router.get('/subjects', function(req, response){
	models.ethn_fields.findAll({
	}).then(function(data) {	
		var handleObj = { entry: data, subjects: true };
		response.render('index', handleObj);
	});
});

router.get('/authenticated', authenticatedUser, function(req,response){
	response.render('authenticated');
});

router.get('/subj/:categ', function(req, response){
	var categ = req.params.categ;

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
		var handleObj = {entry:results, isGroup:true, searchParam: true};
		response.render('index', handleObj);
	});

});

router.get('/item/:id', function(req, response){
	var itemId = req.params.id;
	models.text_contents.findAll( { where: {id: itemId}, include: [
		{
			model: models.content_fields
		},
		{
			model: models.media_source
		},
		{
			model: models.source_ref
		}
		], 
	})
	.then(function(results){
		var handleObj = {entry:results, itemPage:true};
		response.render('index', handleObj);
	});

});

/*
//Create a variable that will be associated with the models' content
var newItem;

//Insert new item to text_contents table by receiving content from the posted JSON
router.post('/item/create/', function(response){
	var createDate = new Date();
	var updateDate = new Date();

//Post will have options for text, photo, or video

//If text:
	models.text_contents.create({
		//Get keys from posted JSON
		item_title: String(),
		group:
		period:
		main_desc: //If content is newly written
		prim_doc: //If the content is from already published material
		if_published: false //Default, published TRUE after review
		createdAt: createDate,
		updatedAt: updateDate,

//Insert related content into associated tables
		//For source_refs table:
		source_ref: {
			content_id:
			author:
			url:
			contributor:
			publication:
			createdAt: createDate,
			updatedAt: updateDate
		},
		//For content_fields table (There could be several, so this will require a loop)
		content_fields: {
			content_id:
			ethn_id:
			createdAt: createDate,
			updatedAt: updateDate
		},

	},
	{
		include: [
			models.content_fields,
			models.source_ref
		]
	}
	).then (function(item){
		return newItem = item;
		response.redirect('/home');
	});


//If photo:
	models.text_contents.create({
		//Get keys from posted JSON
		item_title: String(),
		group:
		period:
		main_desc: //If content is newly written
		prim_doc: //If the content is from already published material
		if_published: false //Default, published TRUE after review
		createdAt: createDate,
		updatedAt: updateDate

//Insert related content into associated tables
		//For source_refs table:
		content_id:
		author:
		contributor:
		publication:
		createdAt: createDate,
		updatedAt: updateDate

		//For media_sources:
		content_id:
		img_ref_1:
		museum:
		createdAt: createDate,
		updatedAt: updateDate

		//For content_fields table (There could be several, so this will require a loop)
		content_id:
		ethn_id:
		createdAt: createDate,
		updatedAt: updateDate

	}).then (function(){
		response.redirect('/home');
	});

//If video:
	models.text_contents.create({
		//Get keys from posted JSON
		item_title: String(),
		group:
		period:
		main_desc: //If content is newly written
		prim_doc: //If the content is from already published material
		if_published: false //Default, published TRUE after review
		createdAt: createDate,
		updatedAt: updateDate

//Insert related content into associated tables
		//For source_refs table:
		content_id:
		author:
		contributor:
		publication:
		createdAt: createDate,
		updatedAt: updateDate

		//For media_sources:
		content_id:
		youTube: String(),
		museum:
		createdAt: createDate,
		updatedAt: updateDate

		//For content_fields table (There could be several, so this will require a loop)
		content_id:
		ethn_id:
		createdAt: createDate,
		updatedAt: updateDate

	}).then (function(){
		response.redirect('/home');
	});

}); //Closes the router function
	*/

function authenticatedUser(req, response, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in.');
		response.redirect('/users/login');
	}
}

module.exports = router;