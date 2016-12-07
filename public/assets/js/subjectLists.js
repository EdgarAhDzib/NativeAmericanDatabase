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

$('.hideList').children().hide();

//Each menu is hidden by default and collapsible on click
$('.hideList').on('click', function(){
	$(this).siblings('ul').children().toggle();
});