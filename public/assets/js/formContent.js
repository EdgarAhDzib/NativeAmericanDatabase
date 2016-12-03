var mediaID;

$('.btn-primary').on('click', function () {
	$('.btn-success').removeClass('btn-success');
	$('button').addClass('btn-primary');
	$(this).removeClass('btn-primary');
	$(this).addClass('btn-success');
	mediaID = $(this).attr('id');

	var mediaDiv;
	switch (mediaID) {
		case "textButton":
		mediaDiv = "<div>Notes:<br/><textarea id='notes' rows='10' cols='80'></textarea><br/>Or original document:<br/><textarea id='prim_doc' rows='10' cols='80'></textarea><br/>URL: <input type='text' id='url' /><br/>Publication: <input type='text' id='publication' /><br/></div>"
		break;
		case "vidButton":
		mediaDiv = "<div>Description:<br/><textarea id='main_desc' rows='10' cols='80'></textarea><br/>URL (Please include full URL for YouTube videos): <input type='text' id='url' /><br/>Publication: <input type='text' id='publication' /><br/></div>"
		break;
		case "picButton":
		mediaDiv = "<div></div>"
		break;
	}
	$("#mediaType").html(mediaDiv);
});

$("#submit").on("click", function(){
	var title = "";
	var group = "";
	var period = "";
	var author = "";
	var notes = "";
	var prim_doc = "";
	var url = "";
	var publication = "";
	var main_desc = "";
	var ytCode = "";

	//Process only if one of the media option buttons is clicked
	if (mediaID === "textButton" || mediaID === "vidButton" || mediaID === "picButton") {

		if ( typeof $('#itemTitle').val() === "string"){
			title = $('#itemTitle').val().trim();
		}

		if ( typeof $('#groupName').val() === "string"){
			group = $('#groupName').val().trim();
		}

		if ( typeof $('#period').val() === "string"){
			period = $('#period').val().trim();
		}

		if ( typeof $('#author').val() === "string"){
			author = $('#author').val().trim();
		}

		if ( typeof $('#notes').val() === "string"){
			notes = $('#notes').val().trim();
		}

		if ( typeof $('#prim_doc').val() === "string"){
			prim_doc = $('#prim_doc').val().trim();
		}

		if ( typeof $('#url').val() === "string"){
			url = $('#url').val().trim();

			if (url.length > 32) {
				//check that the URL has a YouTube address
				var ifYouTube = url.substring(12,19)
				var ytLowerC = ifYouTube.toLowerCase();

				//Get the code from the final characters of the URL if its domain is 'youtube' (lower case)
				if (ytLowerC === "youtube") {
					var ytString = url.substring(32);
					var strLen = ytString.length;
					if (strLen !== 11) {
						throw new Error ('Something went wrong with your YouTube link. Please check the original URL.');
						} else {
						ytCode = ytString;
					}
				}
			}

		}

		if ( typeof $('#publication').val() === "string"){
			publication = $('#publication').val().trim();
		}

		if ( typeof $('#main_desc').val() === "string"){
			main_desc = $('#main_desc').val().trim();
		}

		//Get the input from all checkboxes
		var boxVals = [];
			$('input:checkbox:checked').each(function(i){
				var checkBoxVal = $(this).attr('id');
				boxVals.push(checkBoxVal);
			});

		var contentObj = {
			media_type: mediaID,
			item_title: title,
			group_name: group,
			period: period,
			author: author,
			notes: notes,
			prim_doc: prim_doc,
			url: url,
			publication: publication,
			main_desc: main_desc,
			ethn_fields: boxVals,
			youTube: ytCode
		};

		//This will require validation
		$.post("../item/create/", contentObj, function(){
		});

	}
});