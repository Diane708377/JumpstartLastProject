$(document).ready(function(){
  /* This the carousel code */
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    arrows: false,
    draggable: false,
    pauseOnSelect: false,
    pauseOnHover: false
  });
  /* This the hiding navbar code */
  var userScrollingDistance = 0;
  $(window).scroll(function() {
    var scrollFromTopValue = $(this).scrollTop();
    if (scrollFromTopValue - userScrollingDistance > 50) {
      var navbarHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navbarHeight}, 150);
      userScrollingDistance = scrollFromTopValue;
    }
    else if (userScrollingDistance - scrollFromTopValue > 50){
      $('.navbar').animate({top: 0}, 150);
      userScrollingDistance = scrollFromTopValue;
    }
  });
});
