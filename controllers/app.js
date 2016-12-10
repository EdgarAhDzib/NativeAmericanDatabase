var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var models = require('../models');
var mysql = require('mysql');
var keys = require('../config/keys.js');
var keyword_extractor = require("keyword-extractor");
var passport = require('passport');
var connection = require('../config/connection.js');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

//The table associations assigned through Sequelize
models.text_contents.hasMany(models.content_fields, { foreignKey: 'content_id' });
models.text_contents.hasMany(models.media_source, { foreignKey: 'content_id' });
models.text_contents.hasOne(models.source_ref, { foreignKey: 'content_id' });
models.content_fields.belongsTo(models.text_contents, { foreignKey: 'id' });
models.media_source.belongsTo(models.text_contents, { foreignKey: 'id' });
models.text_contents.hasOne(models.source_ref, { foreignKey: 'content_id' });

//Sequelize associations for saved searches
models.text_contents.hasMany(models.saved_searches, {foreignKey: 'content_id'});
models.user_info.hasMany(models.saved_searches, {foreignKey: 'user_id'});

models.saved_searches.belongsTo(models.text_contents, { foreignKey: 'id' });
models.saved_searches.belongsTo(models.user_info, { foreignKey: 'id' });

// models.saved_searches.hasMany(models.media_source, {foreignKey: 'content_id'});
// models.media_source.hasOne(models.saved_searches, {foreignKey: 'content_id'});

//Initialize variables that will be assigned through the query
var userName = "";
var currId;
var handleObj;

// Below are the routes which will be needed by the app

//Redirect the default path to /home
router.get('/', function(req, response) {
	response.redirect('/home');
});

router.get('/home', function(req, response) {
	models.text_contents.findAll({}).then(function(data) {
		var handleObj = { entry: data, showMenus: true };
		response.render('index', handleObj);
	});
});

router.post('/search', function(req, response) {
	/*
	//Under review, this is apparently crashing the Heroku server with timeout errors
	var searchTerm = keyword_extractor.extract(req.body.srchterm, {
		language: "english",
		// language: "spanish",
		remove_digits: true,
		return_changed_case: true,
		remove_duplicates: false
	});
	*/
	var searchTerm = req.body.srchterm;
	console.log("SEARCHTERM "+searchTerm);
	searchQuery = "SELECT * FROM text_contents WHERE MATCH (item_title,main_desc,prim_doc) AGAINST('"+searchTerm+"')";
	connection.query(searchQuery, function(err,results){
		// if(err) throw err;
		/*
		for (i=0; i<results.length; i++){
			console.log(results[i].id);
			console.log(results[i].item_title);
		}
		*/
		console.log('SEARCH QUERY '+searchQuery);
			var handleObj = { entry: results, searchValue: searchTerm, searchResults: true, searchParam: true};
			response.render('index', handleObj);
	})
});

router.get('/mysearches', authenticatedUser, function(req, response) {
	var userId = "";
	if (req.user) {
		userId=req.user.id;
	}
	
	models.text_contents.findAll({
		include: [{
			model: models.saved_searches,
			where: { user_id: userId }
		},
		{
			model: models.media_source
		}
		],
	})
	.then(function(results){
		handleObj = { entry: results, mySearches: true };
		response.render('index', handleObj);
	});
});

router.get('/myarticles', authenticatedUser, function(req, response) {
		var handleObj = { myArticles: true };
		response.render('index', handleObj);	
});

router.get('/drafts', authenticatedUser, function(req, response) {
		var handleObj = { drafts: true };
		response.render('index', handleObj);	
});

router.get('/about', function(req, response){
	var handleObj = { about: true };
	response.render('index', handleObj);
});

//Show the cultures menu
router.get('/cultures', function(req, response) {
	models.native_group.findAll({}).then(function(data) {
		var handleObj = { entry: data, cultures: true };
		response.render('index', handleObj);
	});
});

//Show the subjects menu by tree
router.get('/subjects/tree', function(req, response) {
	models.ethn_fields.findAll({}).then(function(data) {
		var topicsArr = [];
		var subTopsArr = [];

		//Initialize a full object array that relates each subject with its main and sub-topics
		var fullSubjArr = [];

		for (i=0; i<data.length; i++) {
			//Loops through data and pushes new value into the arrays if it doesn't already exist
			if (topicsArr.indexOf(data[i].main_topic) === -1){
				topicsArr.push(data[i].main_topic);
			}
			if (subTopsArr.indexOf(data[i].subtopic) === -1 && data[i].subtopic != "" && data[i].subtopic !== null){
				subTopsArr.push(data[i].subtopic);
			}
			fullSubjArr.push({main_topic:data[i].main_topic, subtopic: data[i].subtopic, subject: data[i].name});
		}
		topicsArr.sort();
		var subjsString = JSON.stringify(fullSubjArr);
		var handleObj = { topic: topicsArr, allSubjs: subjsString, tree:true, subjects: true };
		response.render('index', handleObj);
	});
});

//Show the subjects menu by alphabet
router.get('/subjects', function(req, response) {
	models.ethn_fields.findAll({}).then(function(data) {
		var namesArr = [];
		for (i=0; i<data.length; i++) {
			namesArr.push(data[i].name);
		}
		namesArr.sort();
		var handleObj = { entry: namesArr, tree:false, subjects: true };
		response.render('index', handleObj);
	});
});

router.get('/form', function(req, response) {

	models.ethn_fields.findAll({}).then(function(data) {
		var topicsArr = [];
		var subTopsArr = [];

		//Initialize a full object array that relates each subject with its main and sub-topics
		var fullSubjArr = [];

		for (i=0; i<data.length; i++) {
			//Loops through data and pushes new value into the arrays if it doesn't already exist
			if (topicsArr.indexOf(data[i].main_topic) === -1){
				topicsArr.push(data[i].main_topic);
			}
			if (subTopsArr.indexOf(data[i].subtopic) === -1 && data[i].subtopic != "" && data[i].subtopic !== null){
				subTopsArr.push(data[i].subtopic);
			}
			fullSubjArr.push({main_topic:data[i].main_topic, subtopic: data[i].subtopic, subject: data[i].name});
		}
		topicsArr.sort();
		var subjsString = JSON.stringify(fullSubjArr);
		var handleForm = { topic: topicsArr, allSubjs: subjsString, showForm: true };
		response.render('index', handleForm);
	});

});

router.get('/authenticated', authenticatedUser, function(req, response) {
	response.render('authenticated');
});

router.get('/subj/:categ', function(req, response) {
	var categ = req.params.categ;

	models.text_contents.findAll({
			include: [{
				model: models.content_fields,
				where: { ethn_id: categ }
			}, {
				model: models.media_source
			}],
		})
		.then(function(results) {
			var handleObj = { entry: results, isSubj: true, searchParam: true };
			response.render('index', handleObj);
		});

});

router.get('/group/:groupname', function(req, response) {
	var groupname = req.params.groupname;

	models.text_contents.findAll({
			where: { group: groupname },
			include: [{
				model: models.media_source
			}],
		})
		.then(function(results) {
			var handleObj = { entry: results, isGroup: true, searchParam: true };
			response.render('index', handleObj);
		});

});

//Get the item according to its text_contents ID number
router.get('/item/:id', function(req, response) {
	var itemId = req.params.id;
	var userId = "";
	if (req.user) {
		userId=req.user.id;
	}
	console.log("USER ID is " + userId);

	models.text_contents.findAll({
			where: { id: itemId },
			include: [{
				model: models.content_fields
			}, {
				model: models.media_source
			}, {
				model: models.source_ref
			}, {
				//This inclusion will check whether the item is already saved for the user - and thus whether to remove it
				model: models.saved_searches
			}
			],
		})
		.then(function(results) {
			handleObj = { entry: results, itemPage: true, isSaved: false };

			for (i=0; i<results.length; i++){
				currId = results[i].dataValues.id;

				if (results[i].saved_searches.length > 0) {

					//Match the item for logged in user and ID in saved_searches table
					if (userId === results[i].saved_searches[0].dataValues.user_id && currId === results[i].saved_searches[0].dataValues.content_id) {

						//Then toggle button to indicate it is already saved for current user
						handleObj = { entry: results, itemPage: true, isSaved: true };
					}
				}
			}
			//Moved the render from this scope to await completion of conditional logic        	
		}).then(function(){
			response.render('index', handleObj);
		});

});

//Save an item to Searches by posting with its ID number
router.post('/item/save', function(req,response){
	var saveItem = req.body.item_id.trim();
	var userId = "";
	var createDate = new Date();
	var updateDate = new Date();
	
	//Insert record only if user is logged in    
	if (req.user) {
		userId=req.user.id;
		models.saved_searches.create({
			user_id: userId,
			content_id: saveItem
		})
		.then(function() {
			response.redirect('/item/'+saveItem);
		});
	}

});

//Remove an item from Searches by posting with its ID number
router.post('/item/remove', function(req,response){
	var removeItem = req.body.item_id;
	var userId = "";
	
	//Remove record only if user is logged in and item has a match
	if (req.user) {
		userId=req.user.id;
		models.saved_searches.destroy({
			where: {
				user_id: userId,
				content_id: removeItem
			}
		})
		.then(function() {
			response.redirect('/savedsearches');
		});
	}
});

router.get('/savedsearches', function(req, response){
	response.redirect('/mysearches');
});

//Create a variable that will be associated with the models' content
var newItem;

//Insert new item to text_contents table by receiving content from the posted JSON
router.post('/item/create/', function(req, response){

	var reqFields = [];

	var createDate = new Date();
	var updateDate = new Date();

	var reqMedia = req.body.media_type;
	var reqTitle = req.body.item_title;
	var reqGroup = req.body.group_name;
	var reqPeriod = req.body.period;
	var reqAuthor = req.body.author;
	var reqNotes = req.body.notes;
	var reqPrimDoc = req.body.prim_doc;
	var reqUrl = req.body.url;
	var reqPublication = req.body.publication;
	var reqMainDesc = req.body.main_desc;
	var reqMuseum = req.body.museum;
	var reqYouTube = req.body.youTube;
	var reqImgBlob = req.body.imgToBase64;

	if (req.body['ethn_fields[]']) {
		for (i=0; i<req.body['ethn_fields[]'].length; i++) {
			reqFields.push(req.body['ethn_fields[]'][i]);
		}
	}

	models.user_info.find({
			where: { id: req.user.id }
	})
	.then(function(results) {
		userName = results.name;
	})
	.then(function(){

		if (reqMedia === "textButton") {
			models.text_contents.create({

				//Get keys from posted object
				item_title: reqTitle,
				group: reqGroup,
				period: reqPeriod,
				notes: reqNotes, //If content is newly written
				main_desc: reqMainDesc, //If content is newly written
				prim_doc: reqPrimDoc, //If the content is from already published material
				if_published: false, //Default, published TRUE after review
				createdAt: createDate,
				updatedAt: updateDate,
					
				//For the source_refs table
				source_ref: {
					author: reqAuthor,
					url: reqUrl,
					contributor: userName,
					publication: reqPublication
				}

			},
			{
				//INCLUDE MODELS
				include: [models.source_ref]
			}
			)
			.then (function(item){
				newItem = item;
				currId = newItem.id;
				response.redirect('/home');
			})

			//Add the associations for content_fields
			.then(function(){

				//Loop the subjects from the array through SQL INSERT query
				for (i=0; i<reqFields.length; i++) {
					connection.query("INSERT INTO content_fields (`content_id`, `ethn_id`, `createdAt`, `updatedAt`) VALUES (?,?,?,?)", [currId, reqFields[i], createDate, updateDate], function(err){
						if (err) throw err;
					});
				}

			});

	/*
	text_contents.belongsToMany(models.content_fields, {through: 'FieldContent'});
	*/

		} // Closes the textButton condition
		else if (reqMedia === "vidButton") {
			models.text_contents.create({

				//Get keys from posted object
				item_title: reqTitle,
				group: reqGroup,
				period: reqPeriod,
				main_desc: reqMainDesc, //If content is newly written
				if_published: false, //Default, published TRUE after review
				createdAt: createDate,
				updatedAt: updateDate,
				
				//For the source_refs table
				source_ref: {
					author: reqAuthor,
					url: reqUrl,
					contributor: userName,
					publication: reqPublication
				}
			},
			{
				//INCLUDE MODELS
				include: [models.source_ref]
			}
			)
			.then (function(item){
				newItem = item;
				currId = newItem.id;
				response.redirect('/home');
			})
			.then (function(){
				models.media_source.create({
					content_id: currId,
					youtube: reqYouTube
				})
			})

			//Add the associations for content_fields
			.then(function(){

				//Loop the subjects from the array through SQL INSERT query
				for (i=0; i<reqFields.length; i++) {
					connection.query("INSERT INTO content_fields (`content_id`, `ethn_id`, `createdAt`, `updatedAt`) VALUES (?,?,?,?)", [currId, reqFields[i], createDate, updateDate], function(err){
						if (err) throw err;
					});
				}

			});

		} // Closes the vidButton condition

		else if (reqMedia === "picButton") {

			models.text_contents.create({

				//Get keys from posted object
				item_title: reqTitle,
				group: reqGroup,
				period: reqPeriod,
				main_desc: reqMainDesc, //If content is newly written
				if_published: false, //Default, published TRUE after review
				createdAt: createDate,
				updatedAt: updateDate,
				
				//For the source_refs table
				source_ref: {
					author: reqAuthor,
					url: reqUrl,
					contributor: userName,
					publication: reqPublication
				}
			},
			{
				//INCLUDE MODELS
				include: [models.source_ref]
			}
			)
			.then (function(item){
				newItem = item;
				currId = newItem.id;
				response.redirect('/home');
			})
			.then (function(){
				models.media_source.create({
					content_id: currId,
					image_b64: reqImgBlob,
					museum: reqMuseum
				})
			})

			//Add the associations for content_fields
			.then(function(){

				//Loop the subjects from the array through SQL INSERT query
				for (i=0; i<reqFields.length; i++) {
					connection.query("INSERT INTO content_fields (`content_id`, `ethn_id`, `createdAt`, `updatedAt`) VALUES (?,?,?,?)", [currId, reqFields[i], createDate, updateDate], function(err){
						if (err) throw err;
					});
				}

			});
		} //closes the image condition
	});
}); //Closes the router function

function authenticatedUser(req, response, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		req.flash('error_msg', 'You are not logged in.');
		response.redirect('/users/login');
	}
}

module.exports = router;
