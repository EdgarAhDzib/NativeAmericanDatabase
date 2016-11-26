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

createDate = new Date();

connection.query("SELECT * FROM sample_content WHERE id > 18", function(err, results){
    if (err) throw err;
    for (i=0; i<results.length; i++) {
        var escSingle = results[i].prim_doc.replace(/'/g,"&#39;")
        var escDouble = escSingle.replace(/"/g,"&quot;")
        connection.query("INSERT INTO text_contents (`item_title`, `group`, `prim_doc`, `if_published`,`createdAt`,`updatedAt`) VALUES (?,?,?,?,?,?)",[results[i].item_title,'Eskimo',escDouble,1,createDate,createDate], function(err){
            if (err) throw err;
        });
    }
});