
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

});
// ///hero-slider end///////
$('.projects-slider').slick({
  dots: true,
  arrows:false,
  prevArrow:'<i class="fas fa-chevron-left arrows  prevarrow"></i>',
  nextArrow:'<i class="fas fa-chevron-right arrows  nextarrow"></i>',
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,

});