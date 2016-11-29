var mysql = require('mysql');
var keys = require('../config/keys.js');

var connection = mysql.createConnection(keys.localhost);

connection.connect(function(err){
if (err) throw err;
	console.log("connected as id " + connection.threadId);
});

var createDate = new Date();
var updateDate = new Date();

var insertArray = [
['Adoption','Family_and_Marriage'],
['Altar','Ritual'],
['Ancestor_Spirits','Religion_and_Spirituality'],
['Communal_Cult','Ritual'],
['Communication_with_the_Supernatural','Religion_and_Spirituality'],
['Cosmology','Religion_and_Spirituality'],
['Cult_to_the_Dead','Religion_and_Spirituality'],
['Dance','Visual_and_Performing_Arts'],
['Divinities','Religion_and_Spirituality'],
['Ecclesiastical_Cult','Ritual'],
['Entheogen','Ritual'],
['Ethnic_Stereotypes','Inter-Ethnic_Relations'],
['Exchanges_Between_Groups','Inter-Ethnic_Relations'],
['Female_Behavior_or_Activity','Gender'],
['Food-Related_Rites','Ritual'],
['Funerary_Rites','Ritual'],
['Healing_Instruments','Healing_and_Illness'],
['Healing_Rites','Healing_and_Illness'],
['Ideas_About_Neighbors','Inter-Ethnic_Relations'],
['Inter-Ethnic_Marriage','Inter-Ethnic_Relations'],
['Male_Behavior_or_Activity','Gender'],
['Medicine','Healing_and_Illness'],
['Music','Visual_and_Performing_Arts'],
['Offering_and__or_Sacrifice','Ritual'],
['Prayer','Ritual'],
['Raids','Conflict_and_Resolution'],
['Removal','Family_and_Marriage'],
['Rite_of_Passage','Ritual'],
['Ritual','Ritual'],
['Ritual_Avoidances','Ritual'],
['Ritual_Dance','Ritual'],
['Ritual_Effigy','Ritual'],
['Ritual_Specialists','Religion_and_Spirituality'],
['Season_Rites','Ritual'],
['Shamanic_Cult','Ritual'],
['Shamanism','Ritual'],
['Sorcery','Ritual'],
['Theology','Religion_and_Spirituality'],
['War','Conflict_and_Resolution']
];

for (i=0; i<insertArray.length; i++) {
	var currentInsert = insertArray[i];
	connection.query("INSERT INTO native_db.ethn_fields (`name`,`main_topic`,`createdAt`,`updatedAt`) VALUES (?,?,?,?)",[insertArray[i][0], insertArray[i][1], createDate, updateDate],function(err){
		if (err) throw err;
	});
}