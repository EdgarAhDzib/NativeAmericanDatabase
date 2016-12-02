var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use(flash());

app.use(session({
	secret: 'nativeamerican',
	saveUnitialized: true,
	resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, response, next) {
	response.locals.success_msg = req.flash('success_msg');
	response.locals.error_msg = req.flash('error_msg');
	response.locals.error = req.flash('error');
	response.locals.user = req.user || null;
	next();
});

var routes = require('./controllers/app');
app.use('/', routes);

var users = require('./controllers/users');
app.use('/users', users);

//const PORT = process.env.PORT || 3306;
app.listen(process.env.PORT);
// app.listen(PORT, function() {
// 	console.log('Listening on PORT ' + PORT);
// });