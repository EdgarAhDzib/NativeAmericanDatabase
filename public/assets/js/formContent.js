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
	//Get the input from all checkboxes
	//var firstVal = $("input:checkbox[name='q1']").val().trim();
	var val = [];
		$(':checkbox:checked').each(function(i){
			val[i] = $(this).val();
		});
	console.log(val);

	var contentObj = {

	};
	
	$.post(currURL + "../item/create/", contentObj, function(result){
		console.log(result);
	});

});