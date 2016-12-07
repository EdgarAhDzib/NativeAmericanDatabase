$('.queryItem').each(function (index,value) {
	var ifImg = $(this).children('img').attr('src');
	var ifYouTube = $(this).children('div').attr('id');
	//If neither the img element's src or the div element's ID is a string, the result is the preview to a written note
	if (ifImg == '' && ifYouTube == '') {
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

$('.ifAltName').each(function (index, value) {
	if ( $(this).attr('id') !== "") {

		//Get the alternative name from the ID value, provided through Handlebars
		var altName = " ( <em>" + $(this).attr('id') + "</em> )";
		$(this).html(altName);
	}
});

$('.underScores').each(function (index, value) {
	if ( $(this).val('') !== "") {
		var cleanUp = $(this).text().replace(/_/g," ");
		var toCaps = cleanUp.toUpperCase();
		$(this).text(toCaps);
	}
});