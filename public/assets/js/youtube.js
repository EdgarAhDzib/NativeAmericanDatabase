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

$('img').each(function (index,value) {
	if ( $(this).attr('src') === "") {
		console.log('img ' + index + "isn't here");
		//If this element has a blank "" image source, hide it to vertically align the text with YouTube thumbnail
		$(this).hide();
	}
})