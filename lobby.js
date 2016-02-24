//myMoto script


$(document).ready(function() {
	$("#panels").hide();
	$("#motos").click(function(){
		$("#panels").slideDown('slow');
	});
	$('button').click(function(){
		$("#panels").slideUp('slow');
	});
})
