$('.btn-primary').on('click', function () {
	('.btn-success').removeClass('btn-success');
	$(this).removeClass('btn-primary');
	$(this).addClass('.btn-success');
});