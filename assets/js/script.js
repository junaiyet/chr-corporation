$(document).ready(function(){
  $('.venobox').venobox(); 
});
// ///fixd menu start///////
$(window).scroll(function(){
    if($(window).scrollTop() > 80){
      $(".menu").addClass("fixd-menu")
    }else{
      $(".menu").removeClass("fixd-menu")
    }
    
  })
// ///fixd menu end///////
// ///hero-slider start///////


$('.hero-slider').slick({
  dots: false,
  arrows:true,
  prevArrow:'<i class="fas fa-chevron-left arrows  prevarrow"></i>',
  nextArrow:'<i class="fas fa-chevron-right arrows  nextarrow"></i>',
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
 

    {
      breakpoint: 768,
      settings: {
        fade:true,
        speed:500,
        arrows:false,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
// ///hero-slider end///////
// ///projects-slider start///////
$('.projects-slider').slick({
  dots: true,
  arrows:false,

  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [

    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  

  ]

});
// ///projects-slider end///////
// ///news-slider start///////

$('.news-slider').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [

    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  

  ]

});
// ///news-slider end///////
// testimonial-slider start////
$('.testimonial-slider').slick({
  dots: true,
  arrows:false,

  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,


});
// testimonial-slider end////
// testimonial-slider start////
$('.clients-slider').slick({
  dots: false,
  arrows:false,

  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});
// testimonial-slider end////

//Scroll back to top

(function($) { "use strict";

	$(document).ready(function(){"use strict";
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 