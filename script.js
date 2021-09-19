$(document).ready(function() {

	/* Adding Sticky Navigation */
	$(".js--login-section").waypoint(function(direction) {
		if(direction=="down") {
			$("nav").addClass('sticky-nav');
		}
		else {
			$("nav").removeClass('sticky-nav');
		}
	}); 

	




});