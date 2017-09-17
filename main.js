// to make sure elements are loaded before
$document.ready( function(){ 
	var pic = $('#img');
	var picBtn = $('#change-pic-btn');

	// Event Handler to change the src of image
	picBtn.click(function(){
		pic.src = 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg';
	});
});