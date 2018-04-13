$(document).ready(function() {
    $("body, .sidebar").niceScroll({
    	horizrailenabled: false
    });
});

$(window).ready(function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

$(".mnu-btn").click(function() {

	$(".sandwich").toggleClass("active");
	$(".sidebar").toggleClass("active");

});


$(document).ready(function() {

	$(".filter-label").click(function() {
		$(".filter-label").removeClass("active");
		var filter = $(this).addClass("active").data("filter");
		wall.filter(filter);
		setTimeout(function() {
			$(window).resize();
			wall.fitWidth();
		}, 400);
	});

	var wall = new freewall(".gallery");
	wall.reset({
		selector: "a",
		animate: true,
		cellW: 200,
		cellH: "auto",
		gutterX : 5,
		gutterY : 5,
		onResize: function() {
			wall.fitWidth();
		}
	});

	wall.fitWidth();

	var images = wall.container.find("a");
	images.find("img").load(function() {
		wall.fitWidth();
	});

	$("#callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
			}, 1000);
		});
		return false;
	});


});