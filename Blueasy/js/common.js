$(".sandwich").click(function() {
	$(".sandwich").toggleClass("sandwich-active");
	$(".navigation").slideToggle(500);
});

$(function() {
	if ($(window).width() < 768) {
		$(".navigation").click(function() {
			$(".sandwich").toggleClass("sandwich-active");
			$(".navigation").slideToggle(500);
		})	
	}
});


$(function() {
	$(".portfolio-item").not(":first").hide();
	$(".tabs-wrapper .tab").click(function() {
		$(".tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".portfolio-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
});

$(document).ready(function(){
	$(document).on('click', '.navigation-list__link, .footer-list__link', function(event){
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});
});

$(window).ready(function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});