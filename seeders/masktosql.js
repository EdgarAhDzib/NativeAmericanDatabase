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
//https://www.rrncommunity.org/items.json?filters=type+mask%2C+made+in+Canada%2C+institution+note+Description
request('https://www.rrncommunity.org/items.json?filters=culture+yanomami', function (error, response, body) {
var descText = "";
    if (!error && response.statusCode == 200) {
        var results = JSON.parse(body);
        var itemRRNId = "";
        var sqlName = "";
        var sqlCulture = "";
        var sqlUrl = "";
        var sqlMuseum = "";
        var imgOne = "";
        var imgTwo = "";
        var imgThree = "";
        var imgFour = "";
        var sqlNotes = "";
        var sqlDesc = "";
        var sqlLongDesc = "";
        var sqlContext = "";
        var sqlResearch = "";
        var sqlDisplay = "";
        var sqlDoc = "";
        var itemType = "";
        var itemMaterial = "";
        var imageArr = [];
        var contentArr = [];
        var createDate = "";
        var updateDate = "";
        var currId = "";
        for (i=0; i<results.items.length; i++) {
            itemRRNId = results.items[i].id;
            sqlName = results.items[i].name;
            if (results.items[i].cultures.length > 0) {
                sqlCulture = results.items[i].cultures[0].name;
            }
            sqlUrl = results.items[i].original_record_url;
            sqlMuseum = results.items[i].holding_institution.name;
            console.log("text_contents.item_title : " + sqlName + "\n");
            contentArr.push("<br/><br/>" + sqlName + "<br/>");
            console.log("text_contents.item_id : " + itemRRNId + "\n");
            contentArr.push(itemRRNId + "<br/>");
            console.log("text_contents.group : " + sqlCulture + "\n");
            contentArr.push(sqlCulture + "<br/>");

            createDate = new Date();
            contentArr.push("<br/>" + createDate + "<br/>");
            updateDate = new Date();
            contentArr.push(updateDate + "<br/><br/>");

            var instNotes = results.items[i].institution_notes;
            var notesLength = instNotes.length;

            sqlNotes = "";
            sqlDesc = "";
            sqlLongDesc = "";
            sqlContext = "";
            sqlResearch = "";
            sqlDisplay = "";
            sqlDoc = "";

            for (j=0; j<notesLength; j++) {
                switch (instNotes[j].title) {
                    case "Notes" :
                    sqlNotes = instNotes[j].text;
                    console.log("text_contents.notes : " + sqlNotes + "\n");
                    contentArr.push(sqlNotes + "<br/>");
                    break;
                    case "Description" :
                    sqlDesc = instNotes[j].text;
                    console.log("text_contents.main_desc : " + sqlDesc + "\n");
                    contentArr.push(sqlDesc + "<br/>");
                    break;
                    case "Longer Description" :
                    sqlLongDesc = instNotes[j].text;
                    console.log("text_contents.long_desc : " + sqlLongDesc + "\n");
                    contentArr.push(sqlLongDesc + "<br/>");
                    break;
                    case "Context":
                    sqlContext = instNotes[j].text;
                    console.log("text_contents.context : " + sqlContext + "\n");
                    contentArr.push(sqlContext + "<br/>");
                    break;
                    case "Research Notes" :
                    sqlResearch = instNotes[j].text;
                    console.log("text_contents.research_notes : " + sqlResearch + "\n");
                    contentArr.push(sqlResearch + "<br/>");
                    break;
                    case "Display History" :
                    sqlDisplay = instNotes[j].text;
                    console.log("text_contents.display : " + sqlDisplay + "\n");
                    contentArr.push(sqlDisplay + "<br/>");
                    break;
                    case "Primary Documentation" :
                    sqlDoc = instNotes[j].text;
                    console.log("text_contents.prim_doc : " + sqlDoc + "\n");
                    contentArr.push(sqlDoc + "<br/>");
                    break;
                }
        } //Closes loop for the institution notes
    connection.query("INSERT INTO text_contents (`item_title`, `item_id`, `group`, `notes`, `main_desc`, `long_desc`, `context`, `research_notes`, `display`, `prim_doc`, `if_published`,`createdAt`,`updatedAt`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [sqlName, itemRRNId, sqlCulture, sqlNotes, sqlDesc, sqlLongDesc, sqlContext, sqlResearch, sqlDisplay, sqlDoc, 1, createDate, updateDate] , function(err){
        if (err) throw err;
    });
    connection.query("SELECT id FROM text_contents WHERE item_id = ?",itemRRNId, function(err,result){
        if (err) throw err;
        currId = result[0].id;
        console.log("Inserted as ID " + currId); //This works, the ten id numbers are returning in sequence
        console.log("source_refs.original_record_url for " + currId + " : " + sqlUrl + "\n");
        connection.query("INSERT INTO source_refs (content_id, url, createdAt, updatedAt) VALUES (?,?,?,?)", [currId, sqlUrl, createDate, updateDate], function(err){
                if (err) throw err;
            });
        //This works, the rest of the tables belong in this scope
    });
            contentArr.push(sqlUrl + "<br/>");
            if (results.items[i].item_types.length > 0) {
                itemType = results.items[i].item_types[0].name;
                console.log("content_fields.name : " + itemType);
                contentArr.push(itemType + "<br/>");
/*
connection.query("INSERT INTO content_fields (`content_id`,`ethn_id`,`createdAt`,`updatedAt`) VALUES (?,?,?,?)", [currId, itemType, createDate, updateDate], function(err){
    if (err) throw err;
});
*/
                itemMaterial = results.items[i].materials;
                for (j=0; j<itemMaterial.length; j++) {
                    console.log("content_fields.name : " + itemMaterial[j].name);
                    contentArr.push(itemMaterial[j].name + "<br/>");
/*
connection.query("INSERT INTO content_fields (`content_id`,`ethn_id`,`createdAt`,`updatedAt`) VALUES (?,?,?,?)", [currId, itemMaterial[j].name, createDate, updateDate], function(err){
    if (err) throw err;
});
*/

                }
            }
            console.log("media_sources.museum : " + sqlMuseum + "\n");
            contentArr.push(sqlMuseum + "<br/>");

            var digObj = results.items[i].digital_objects;
            var objLen = digObj.length;

            for (j=0; j<objLen; j++) {
                imgOne = "";
                imgTwo = "";
                imgThree = "";
                imgFour = "";
                var imgUrl = digObj[j].url;
                if (imgUrl.charAt(44) == "3") {
                    console.log("This URL has a 3!\n" + imgUrl);
                    imgUrl = imgUrl.replace("original","w800h600");
                }
                imgUrl = imgUrl.replace("//","https://");                
                switch (digObj[j].order) {
                    case 0 :
                    imgOne = imgUrl;
                    console.log("media_sources.img_ref_1: " + imgOne);
                    imageArr.push(imgOne);
                    break;
                    case 1 :
                    imgTwo = imgUrl;
                    console.log("media_sources.img_ref_2: " + imgTwo);
                    imageArr.push(imgTwo);
                    break;
                    case 2 :
                    imgThree = imgUrl;
                    console.log("media_sources.img_ref_3: " + imgThree);
                    imageArr.push(imgThree);
                    break;
                    imgFour = imgUrl;
                    console.log("media_sources.img_ref_4: " + imgFour);
                    imageArr.push(imgFour);
                    case 3 :
                    break;
                }
/*
connection.query("INSERT INTO media_sources (`content_id`,`img_ref_1`,`img_ref_2`,`img_ref_3`,`img_ref_4`, museum, createdAt, updatedAt) VALUES (?,?,?,?,?,?,?,?)", [currId,imgOne, imgTwo, imgThree, imgFour, sqlMuseum, createDate, updateDate], function(err){
    if (err) throw err;
});
*/
            }

        app.get('/',function(req,res){
            var imgHTMLArr = [];
            for (i=0; i<imageArr.length; i++){
                var imgToHTML = "<img src='" + imageArr[i] + "' width='250'/><br/>";
                imgHTMLArr.push(imgToHTML);
            }
            var fullString = imgHTMLArr.join("");
            res.send(fullString + contentArr);
			});
		}
	}
});

app.use(router);

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
