$(function() {
	new WOW().init();
});

$(window).ready(function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

$(function() {
	$(".slick-carousel").slick({
		infinite: true,
		dots: true,
		autoplay: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		speed: 800,
		autoplaySpeed: 2500
	});
});

$(function() {
	$(".features-carousel").slick({
		infinite: true,
		dots: true,
		responsive: [
			{
				breakpoint: 2500,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{

				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},

		]
	});
});

$(function() {
	if($(window).width() < 768) {
		$(".toggle-menu").click(function() {
			$(".sandwich").toggleClass("active");
		});

		$(".navigation").click(function() {
			$(".navigation").fadeOut(600);
			$(".sandwich").toggleClass("active");
		});

		$(".toggle-menu").click(function() {
			if ($(".navigation").is(":visible")) {
				$(".navigation").fadeOut(600);
			} else {
				$(".navigation:hidden").fadeIn(600);
			}
		})
	}
});

$(function() {
	$(".tab-item").not(":first").hide();
	$(".tab-wrapper .tab").click(function() {
		$(".tab-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

});

$(document).ready(function(){
  $(".tab-item__link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    closeOnBgClick: true,
    fixedContentPos: false,
    mainClass: "mfp-fade"
  });
});

$(function() {
	$(".team-carousel").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 2500,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					dots: false
				}
			},
			{

				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					dots: true
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			},

		]
	});
});

$(document).ready(function(){
	$(document).on('click', '.navigation-list__link', function(event){
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});
});

$(function(){
  $.scrollUp({
  	scrollText: '<i class="fas fa-arrow-up"></i>'
  });
});

/* ---------- Fixing the main-nav block script ---------- */

$(document).ready(function() {
	toplogo_pos = $('.header').offset().top; // определяем его первоначальное положение
	$(window).scroll(function(){

	   if ($(window).scrollTop() > toplogo_pos){ // Если страницу прокрутили дальше, чем находится наш блок
			$('.header').css({'background-color': 'rgba(6, 32, 51, 0.8)'}); // То мы этот блок фиксируем и отображаем сверху.
	
	   }else{  // Если же позиция скрола меньше (выше), чем наш блок
			$('.header').css({'background-color': 'rgba(6, 32, 51, 0.2)'}); // то возвращаем все назад
	   }
	});
});