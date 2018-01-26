$(function() {
	$("#my-menu").mmenu({
		extensions: [ 'widescreen', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: 'Main menu'
		},
		offCanvas: {
			position: 'right'
		}
	});
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	margin: 30,
  	dots: false,
  	nav: true,
  	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  	responsive: {
  		992: {
  			items:3
  		},
  		768: {
  			items:2
  		},
  		0: {
  			items:1
  		}
  	}
  });
});

$(document).ready(function(){
  $(".client-carousel").owlCarousel({
    margin: 60,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      992: {
        items: 6
      },
      500: {
        items: 3
      },
      321: {
        items: 2
      },
      320: {
        items: 1
      }
    }
  });
});

$(function(){
  new WOW().init(); 
});