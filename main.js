// to make sure elements are loaded before
$(document).ready( function(){ 
	console.log('in ready');
	var picBtn = $('#change-pic-btn');

	// Event Handler to change the src of image
	picBtn.on('click', function(){
		$('#img').attr('src', 'cat.png');
	});
});