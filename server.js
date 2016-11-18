var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'native_db'
});

connection.connect(function(err){
if (err) throw err;
	console.log("connected as id " + connection.threadId);
});

router.get('/', function(req, response){
	connection.query("SELECT * FROM ethnographic_content", function(err, data){
		if (err) throw err;
		var handleObj = { entry: data };
		response.render('index', handleObj);
	});
});

app.use(router);

var port = 8080;
app.listen(process.env.PORT || port, function() {
	console.log('Listening on PORT ' + port);
});