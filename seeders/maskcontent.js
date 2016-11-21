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
//culture+Nasca%2C+held+at+MOA%3A+University+of+British+Columbia%2C
//https://www.rrncommunity.org/items.json?page=4&per_page=25&filters=type+mask%2C+made+in+Canada%2C

request('https://www.rrncommunity.org/items.json?filters=type+mask%2C+made+in+Canada%2C+institution+note+Description', function (error, response, body) {
var descText = "";
    if (!error && response.statusCode == 200) {
        var results = JSON.parse(body);
        var sqlName = "";
        var sqlNotes = "";
        var sqlDesc = "";
        var sqlLongDesc = "";
        var sqlContext = "";
        var sqlResearch = "";
        var sqlDisplay = "";
        var sqlDoc = "";
        for (i=0; i<results.items.length; i++) {
            sqlName = results.items[i].name;
            var instNotes = results.items[i].institution_notes;
            var notesLength = instNotes.length;
            for (j=0; j<notesLength; j++) {
                sqlNotes = "";
                sqlDesc = "";
                sqlLongDesc = "";
                sqlContext = "";
                sqlResearch = "";
                sqlDisplay = "";
                sqlDoc = "";
                switch (instNotes[j].title) {
                    case "Notes" :
                    sqlNotes = instNotes[j].text;
                    break;
                    case "Description" :
                    sqlDesc = instNotes[j].text;
                    break;
                    case "Longer Description" :
                    sqlLongDesc = instNotes[j].text;
                    break;
                    case "Context":
                    sqlContext = instNotes[j].text;
                    break;
                    case "Research Notes" :
                    sqlResearch = instNotes[j].text;
                    break;
                    case "Display History" :
                    sqlDisplay = instNotes[j].text;
                    break;
                    case "Primary Documentation" :
                    sqlDoc = instNotes[j].text;
                    break;
                }
                connection.query("INSERT INTO text_contents (`item_title`, `notes`, `main_desc`, `long_desc`, `context`, `research_notes`, `display`, `prim_doc`) VALUES (?,?,?,?,?,?,?,?)",
                [sqlName, sqlNotes, sqlDesc, sqlLongDesc, sqlContext, sqlResearch, sqlDisplay, sqlDoc] , function(err){
                if (err) throw err;
                });
            }
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