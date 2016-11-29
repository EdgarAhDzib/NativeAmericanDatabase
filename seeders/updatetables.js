// Dependencies
// =============================================================
var mysql = require('mysql');
var keys = require('../config/keys.js');

var connection = mysql.createConnection(keys.localhost);

var ethnSubjects = ["ritual","artifact_type","architecture","economy","conflict_and_resolution","family_and_marriage","folklore","gender","settlement_pattern","social_behavior","social_event","social_organization","kinbased_social_structure","kinship_type","interethnic_relations","responses_to_modernization__globalization","philosophy","religion_and_spirituality","healing_and_illness","visual_and_performing_arts"];
var createDate = new Date();
var updateDate = new Date();

connection.connect(function(err){
if (err) throw err;
	console.log("connected as id " + connection.threadId);
});

//The ethn_fields can be populated with new values after the content_fields operation with ethn_fields_list.js

/*
//UPDATE text_contents with `period` values
connection.query("SELECT * from old_cora_associations WHERE ref_id <=23", function(err,result){
	if (err) throw err;
	for (i=0; i<result.length; i++){
		//Get the time period values and update the text_contents table
		connection.query("UPDATE text_contents SET `period`='" + result[i].period + "' WHERE `id`=?",[result[i].ref_id], function(err){
			if (err) throw err;
		})
	}
});
*/

/*
//source_refs columns to INSERT: content_id, author, url, contributor, publication, createdAt, updatedAt
connection.query("SELECT * from old_cora_associations WHERE ref_id <=23", function(err,result){
	if (err) throw err;
	for (i=0; i<result.length; i++){
		//Iterate through the publication source columns
		var content_id = result[i].ref_id;
		var author = result[i].author;
		var url = result[i].external_source_link;
		var contributor = result[i].contributor;
		var publication = result[i].source;
		connection.query("INSERT INTO source_refs (`content_id`,`author`,`url`,`contributor`,`publication`,`createdAt`,`updatedAt`) VALUES (?,?,?,?,?,?,?)", [content_id, author, url, contributor, publication, createDate, updateDate], function(err){
			if (err) throw err;
		});
	}
});
*/

/*
//content_fields columns to INSERT: content_id, ethn_id, createdAt, updatedAt
connection.query("SELECT * from old_cora_associations WHERE ref_id <=23", function(err,result){
	if (err) throw err;
	for (i=0; i<result.length; i++){
		//Iterate through the ethnological subject column names to find non-blank values
		for (j=0; j<ethnSubjects.length; j++) {
			if (result[i][ethnSubjects[j]]) {
				//Convert the initial objects into strings
				var tableColumn = result[i][ethnSubjects[j]].toString();
				//Initialize an empty array to insert each iteration's value(s)
				var subjectList = [];
				var hasComma = tableColumn.includes(",");
					if (ethnSubjects[j] !== 'source' && ethnSubjects[j] !== 'author' && hasComma) {
						//Any cell with comma-separated values will be split into an array, whose values will be inserted individually
						subjectList = tableColumn.split(",");
					}
				if (subjectList.length > 0) {
					for (k=0; k<subjectList.length; k++) {
						//INSERT only when a column yields one or more values
						connection.query("INSERT INTO content_fields (`content_id`,`ethn_id`,`createdAt`,`updatedAt`) VALUES (?,?,?,?)", [result[i].ref_id, subjectList[k], createDate, updateDate], function(err){
							if (err) throw err;
						})
					}
				}
			}
		}
	}
});
*/

/*
ref_id
author
source
external_source_link
region
period
ritual
contributor
artifact_type
architecture
economy
conflict_and_resolution
family_and_marriage
folklore
gender
settlement_pattern
social_behavior
social_event
social_organization
kinbased_social_structure
kinship_type
interethnic_relations
responses_to_modernization__globalization
philosophy
religion_and_spirituality
healing_and_illness
visual_and_performing_arts
*/

/*
connection.query("SELECT id,item_id FROM text_contents", function(err,result){
	if (err) throw err;
	for (i=0; i<result.length; i++){
		console.log(result[i].item_id);
//Update the content_id in the source_refs table to the item_id values selected from the text_contents table
		var currId = result[i].id;
		if (result[i].item_id) {
			connection.query("UPDATE source_refs SET content_id = " + currId + " WHERE content_id = ?", result[i].item_id, function(err){
				if (err) throw err;
			});
		}
	}
});
*/

/*
//Update the content_id in the media_sources table to the item_id values from the text_contents table
connection.query("SELECT id,item_id FROM text_contents", function(err,result){
	if (err) throw err;
	for (i=0; i<result.length; i++){
		console.log(result[i].item_id);
		var currId = result[i].id;
		if (result[i].item_id) {
			connection.query("UPDATE media_sources SET content_id = " + currId + " WHERE content_id = ?", result[i].item_id, function(err){
				if (err) throw err;
			});
		}
	}
});
*/
/*
//Update the content_id in the content_fields table to the item_id values from the text_contents table
connection.query("SELECT id,item_id FROM text_contents", function(err,result){
	if (err) throw err;
	for (i=0; i<result.length; i++){
		console.log(result[i].item_id);
		var currId = result[i].id;
		if (result[i].item_id) {
			connection.query("UPDATE content_fields SET content_id = " + currId + " WHERE content_id = ?", result[i].item_id, function(err){
				if (err) throw err;
			});
		}
	}
});
*/