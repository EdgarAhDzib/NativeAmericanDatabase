//The object arrays from the /subject/tree Handlebars and /form/ routes are rendered,
//but into invisible DIVs that only JQuery will access
$('#allSubjs').hide();
var subjectString = $('#allSubjs').text();

$('#checkedSubjs').hide();
var checkedString = $('#checkedSubjs').text().trim();

//Revert the arrays to objects for JQuery manipulation
var subjectJSON = JSON.parse(subjectString);
var checkedJSON;

//Compare the IDs of each menu category to the main_topic values from the object array,
//to populate the ULs with subjects aligned with their respective topics
$('.mainEthn').each(function(index) {
	var mainTopic = $(this).attr('id');
	var mainTopCaps = mainTopic.toUpperCase();
	for (i=0; i<subjectJSON.length; i++){
		if (subjectJSON[i].main_topic === $(this).attr('id')) {
			$(this).append('<li class="subjItem"><a href="/subj/' + subjectJSON[i].subject + '">' + subjectJSON[i].subject + '</a></li>');
		}
	}
});

$('.formCateg').each(function(index) {
	var mainTopic = $(this).attr('id');
	var mainTopCaps = mainTopic.toUpperCase();
	for (i=0; i<subjectJSON.length; i++){
		if (subjectJSON[i].main_topic === $(this).attr('id')) {
			$(this).append('<div class="col-xs-12 col-sm-4"><input type="checkbox" class="ethnCheckBox" id="' + subjectJSON[i].subject + '"/>&nbsp;&nbsp;<span class="underScores">' + subjectJSON[i].subject + '</span><br/>&nbsp;</div>');
		}
	}
});

$('.hideList').children().hide();
$('.hideBoxes').children().hide();

//Each menu is hidden by default and collapsible on click
$('.hideList').on('click', function(){
	$(this).siblings('ul').children().toggle();
});

$('.hideBoxes').on('click', function(){
	$(this).siblings('div').children().toggle();
});

//Parse the array for already existing subjects only if this DIV has contents
if ( checkedString.length > 0 ) {
	checkedJSON = JSON.parse(checkedString);
	//Compare the previously associated ethnographic subject fields with the full list
	//and change all matching names to "checked" state
	$('.ethnCheckBox').each(function(index){
		var subjName = $(this).attr('id');

			for (i=0; i<checkedJSON.length; i++){
				if (checkedJSON[i] === subjName) {
					$(this).attr('checked',true);
				}
				var cleanUp = checkedJSON[i].replace(/_/g," ");
				var toLower = cleanUp.toLowerCase();

				if (toLower === subjName) {
					$(this).attr('checked',true);
				}
			}
		
	});
}