var express = require('express');
var methodOverride = require('method-override');

var app = express();

var models  = require('./models');
var sequelizeConnection = models.sequelize;

sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0').then(function(){
	return sequelizeConnection.sync() //{force:true} empties the table
});

app.use(express.static(process.cwd() + '/public'));

// override with POST having ?_method=PUT
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/app.js');
app.use('/',routes)

var port = 8080;
app.listen(process.env.PORT || port, function() {
	console.log('Listening on PORT ' + port);
});