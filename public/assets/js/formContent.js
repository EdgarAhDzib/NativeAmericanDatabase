$('.btn-primary').on('click', function () {
	$('.btn-success').removeClass('btn-success');
	$('button').addClass('btn-primary');
	$(this).removeClass('btn-primary');
	$(this).addClass('btn-success');
	var mediaID = $(this).attr('id');
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
	var title = $('#itemTitle').val();
	var group = $('#groupName').val();
	var period = $('#period').val();
	var author = $('#author').val();
	var notes = $('#notes').val();
	var prim_doc = $("#prim_doc").val();
	var url = $('#url').val();
	var publication = $('#publication').val();

	//Get the input from all checkboxes
	var boxVals = [];
		$('input:checkbox:checked').each(function(i){
			var checkBoxVal = $(this).attr('id');
			boxVals.push(checkBoxVal);
		});

	var contentObj = {
		item_title: title,
		group_name: group,
		period: period,
		author: author,
		notes: notes,
		prim_doc: prim_doc,
		url: url,
		publication: publication,
		if_published:false,
		ethn_fields: val
	};
	
	console.log(contentObj);
	return false;
	/*
	$.post("../item/create/", contentObj, function(result){
		console.log(result);
		return false;
	});
	*/
});