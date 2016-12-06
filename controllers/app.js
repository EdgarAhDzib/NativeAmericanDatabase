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
        var handleObj = { mySearches: true };
        response.render('index', handleObj);	
})

router.get('/myarticles', authenticatedUser, function(req, response) {
        var handleObj = { myArticles: true };
        response.render('index', handleObj);	
})

router.get('/drafts', authenticatedUser, function(req, response) {
        var handleObj = { drafts: true };
        response.render('index', handleObj);	
})

//Show the cultures menu
router.get('/cultures', function(req, response) {
    models.native_group.findAll({}).then(function(data) {
        var handleObj = { entry: data, cultures: true };
        response.render('index', handleObj);
    });
});

//Show the subjects menu
router.get('/subjects', function(req, response) {
    models.ethn_fields.findAll({}).then(function(data) {
        var handleObj = { entry: data, subjects: true };
        response.render('index', handleObj);
    });
});

router.get('/form', function(req, response) {
    var handleForm = { showForm: true };
    response.render('index', handleForm);
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

    models.text_contents.hasMany(models.media_source, { foreignKey: 'content_id' });
    models.media_source.belongsTo(models.text_contents, { foreignKey: 'id' });
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

router.get('/item/:id', function(req, response) {
    var itemId = req.params.id;
    models.text_contents.findAll({
            where: { id: itemId },
            include: [{
                model: models.content_fields
            }, {
                model: models.media_source
            }, {
                model: models.source_ref
            }],
        })
        .then(function(results) {
            var handleObj = { entry: results, itemPage: true };
            response.render('index', handleObj);
        });

});

//Create a variable that will be associated with the models' content
var newItem;

//Initialize variables that will be assigned through the query
var userName = "";
var currId;

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
			console.log(req.body);
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
					image_b64: reqImgBlob
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

/*
//Post will have options for text, photo, or video
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

function authenticatedUser(req, response, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash('error_msg', 'You are not logged in.');
        response.redirect('/users/login');
    }
}

module.exports = router;
