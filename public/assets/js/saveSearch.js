var itemID;

$('#saveItem').find('button').on("click", function(){

	//Get the value of the item ID for posting
	itemID = $(this).attr('id');

	var contentObj = {
		item_id: itemID
	};

	//This will require validation
	$.post("../item/save/", contentObj, function(){
	});

});

$('.removeItem').find('button').on("click", function(){

	//Get the value of the item ID for posting
	itemID = $(this).attr('id');

	var contentObj = {
		item_id: itemID
	};

	//This will require validation
	$.post("../item/remove/", contentObj, function(){
	});

});