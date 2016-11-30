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

$('.queryItem').each(function (index,value) {
	var ifImg = $(this).children('img').attr('src');
	var ifYouTube = $(this).children('div').attr('id');
	//If neither the img element's src or the div element's ID is a string, the result is the preview to a written note
	if (typeof ifImg !== 'string' && typeof ifYouTube !== 'string') {
		$(this).prepend("<div width='250'><font style='font-size:300%'>Notes</font></div>");
	}
});

$('.preview').each(function(index,value){
	var previewText = $(this).html();
	if (previewText !== "") {
		//Add two positions from the first period, followed by a space
		var periodPos = previewText.indexOf(". ") + 2;
		//Add ellipses to the end of the preview sentence
		var firstSentence = previewText.substring(0,periodPos) + "...";
		//Insert the first sentence text into the preview text <span>
		$(this).html(firstSentence);
	}
})

$('.authorSpan').each(function (index,value) {
	if ( $(this).html() === "Author: ") {
		//If this element has a blank "Author: " reference, hide
		$(this).hide();
	}
});

$('.contribSpan').each(function (index,value) {
	if ( $(this).html() === "Contributor: ") {
		//If this element has a blank "Author: " reference, hide
		$(this).hide();
	}
});

$('.pubSpan').each(function (index,value) {
	if ( $(this).html() === "Publication: ") {
		//If this element has a blank "Author: " reference, hide
		$(this).hide();
	}
});