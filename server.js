var express = require('express');
// var router = express.Router();
// var mysql = require('mysql');
var methodOverride = require('method-override');

var app = express();
// var keys = require('./config/keys.js');

var models  = require('./models');
var sequelizeConnection = models.sequelize;

sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0').then(function(){
	return sequelizeConnection.sync() //{force:true} empties the table
});

app.use(express.static(process.cwd() + '/'));

// override with POST having ?_method=PUT
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// var connection = mysql.createConnection(keys.localhost);

// connection.connect(function(err){
// if (err) throw err;
// 	console.log("connected as id " + connection.threadId);
// });

var routes = require('./controllers/app.js');
app.use('/',routes)

// app.use(router);

//Redirect the default path to /home
// router.get('/', function(req, response) {
// 	response.redirect('/home');
// });

// router.get('/home', function(req, response){
// 	connection.query("SELECT * FROM text_contents", function(err, data){
// 		if (err) throw err;
// 		var handleObj = { entry: data };
// 		response.render('index', handleObj);
// 	});
// });

//Use Karma testing for proper case

// router.get('/subj/:categ', function(req, response){
// 	var categ = req.params.categ;

// 	models.text_contents.hasMany(models.content_fields, {foreignKey: 'content_id'});
// 	models.text_contents.hasMany(models.media_source, {foreignKey: 'content_id'});
// 	models.content_fields.belongsTo(models.text_contents, {foreignKey: 'id'});
// 	models.media_source.belongsTo(models.text_contents, {foreignKey: 'id'});
// 	models.text_contents.findAll( { include: [
// 		{
// 			model: models.content_fields, where : {ethn_id: categ}
// 		},
// 		{
// 			model: models.media_source
// 		}
// 		], 
// 	})
// 	.then(function(results){
// 		//Write this as a RETURN for Karma testing
// 		var handleObj = {entry:results};
// 		response.render('search', handleObj);
// 	});

// });

// router.get('/group/:groupname', function(req, response){
// 	var groupname = req.params.groupname;

// 	models.text_contents.hasMany(models.media_source, {foreignKey: 'content_id'});
// 	models.media_source.belongsTo(models.text_contents, {foreignKey: 'id'});
// 	models.text_contents.findAll( { where : {group: groupname}, include: [
// 		{
// 			model: models.media_source
// 		}
// 		], 
// 	})
// 	.then(function(results){
// 		//Write this as a RETURN for Karma testing
// 		var handleObj = {entry:results};
// 		response.render('search', handleObj);
// 	});

// });

var port = 8080;
app.listen(process.env.PORT || port, function() {
	console.log('Listening on PORT ' + port);
});