//Loop through each search result preview
$('.youTube').each(function (index, value) {
	//Select those DIV elements without empty "" YouTube identifiers
	if ( $(this).attr('id') !== "") {

		//Get the YouTube code from the ID value, provided through Handlebars
		var ytCode = $(this).attr('id');

		//Form the HTML to create a YouTube thumbnail around the selected code and embed it within the current DIV
		var ytHTML = '<iframe width="150" height="85" src="https://www.youtube.com/embed/' + ytCode + ' " frameborder="0" allowfullscreen></iframe>'
		$('#'+ytCode).html(ytHTML);
	}
});

//Get the YouTube code from the ID value, provided through Handlebars
var ytFullCode = $('.youTubeFull').attr('id');

//If the code from id isn't empty, form the HTML to create a YouTube thumbnail around the selected code and embed it within the current DIV
if (ytFullCode !== "") {
	var ytHTML = '<iframe width="800" height="450" src="https://www.youtube.com/embed/' + ytFullCode + ' " frameborder="0" allowfullscreen></iframe>'
	$('.youTubeFull').html(ytHTML);
}

$('img').each(function (index,value) {
	if ( $(this).attr('src') === "") {
		//If this element has a blank "" image source, hide it to vertically align the text with YouTube thumbnail
		$(this).hide();
	}
});