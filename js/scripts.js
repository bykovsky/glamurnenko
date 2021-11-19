$(document).ready(function () {
  $(".to-top__link").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1600);
  });


  $(window).scroll(function () {
    var top = $(document).scrollTop();
    var height = $('.hero').outerHeight();
    console.log(height);
    if (top > height) {
      $('.header').addClass('fixed-show');
    } else {
      $('.header').removeClass('fixed-show');
    }
  });

});
