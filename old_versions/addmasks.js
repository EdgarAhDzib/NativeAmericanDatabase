// Dependencies
// =============================================================
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
var mysql = require('mysql');
var keys = require('../config/keys.js');

var connection = mysql.createConnection(keys.localhost);

connection.connect(function(err){
if (err) throw err;
    console.log("connected as id " + connection.threadId);
});
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//culture+Haida yielded four results, made+in+Canada yielded six
request('https://www.rrncommunity.org/items.json?filters=type+mask%2C+made+in+Canada%2C+institution+note+Description', function (error, response, body) {
var descText = "";
    if (!error && response.statusCode == 200) {
        var results = JSON.parse(body);
        for (i=0; i<results.items.length; i++) {
            var instNotes = results.items[i].institution_notes;
            console.log("Item "+ i);
            var notesLength = instNotes.length;
            for (j=0; j<notesLength; j++) {
                console.log("Title " + j + " " + instNotes[j].title);
                console.log(instNotes[j].text);
            }
            connection.query("INSERT INTO sample_content (`source_id`,`item_name`,`original_url`,`image_url`,`item_types`,`materials`,`cultures`,`institution`) VALUES (?,?,?,?,?,?,?,?)",
                [results.items[i].identification_number,results.items[i].name,results.items[i].original_record_url,results.items[i].digital_objects[0].url,results.items[i].item_types[0].name,results.items[i].materials[0].name,results.items[i].cultures[0].name,results.items[i].holding_institution.name] , function(err){
                if (err) throw err;
            });
        }
        app.get('/',function(req,res){

            res.send(results);
        })
    }
});

app.use(router);

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});

