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
	var title = "";
	var group = "";
	var period = "";
	var author = "";
	var notes = "";
	var prim_doc = "";
	var url = "";
	var publication = "";


	if ( typeof $('#itemTitle').val() === "string"){
		title = $('#itemTitle').val();
	}

	if ( typeof $('#notes').val() === "string"){
		notes = $('#notes').val();
	}

	if ( typeof $('#prim_doc').val() === "string"){
		prim_doc = $('#prim_doc').val();
	}

	if ( typeof $('#url').val() === "string"){
		url = $('#url').val();
	}

	if ( typeof $('#publication').val() === "string"){
		publication = $('#publication').val();
	}

	group = $('#groupName').val();
	period = $('#period').val();
	author = $('#author').val();
	notes = $('#notes').val();
	prim_doc = $("#prim_doc").val();
	url = $('#url').val();
	publication = $('#publication').val();

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
		ethn_fields: boxVals
	};

/*
router.post('/signup', function(req, response){
var name = req.body.name;
var email = req.body.email;
var password = req.body.password;
var password2 = req.body.password2;

req.checkBody('name', 'Name is required').notEmpty();
req.checkBody('email', 'Email is required').notEmpty();
req.checkBody('email', 'Email is not valid').isEmail();
req.checkBody('password', 'Password is required').notEmpty();
req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
*/

	//This will require validation
	console.log(contentObj);
	return false;
	/*
	$.post("../item/create/", contentObj, function(result){
		console.log(result);
		return false;
	});
	*/
});