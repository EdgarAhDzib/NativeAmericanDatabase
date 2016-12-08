//The object array from the /subject/tree Handlebars route is rendered,
//but into an invisible DIV that only JQuery will access
$('#allSubjs').hide();
var subjectString = $('#allSubjs').text();
//Revert the array to an object for JQuery manipulation
var subjectJSON = JSON.parse(subjectString);

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
			$(this).append('<div class="col-xs-12 col-sm-4"><input type="checkbox" id="' + subjectJSON[i].subject + '"/>&nbsp;&nbsp;<span class="underScores">' + subjectJSON[i].subject + '</span><br/>&nbsp;</div>');
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