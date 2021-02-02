// Scroll for anchors
$(document).ready(function () {
  $("#navigation").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 750);
  });

  $("#hero").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 750);
  });
});

// Scroll for button
$(function() {
  $('.button-scrollup').click(function() {
    $("html, body").animate({scrollTop: 0}, 750);
  })
})

// Scrollup vision
$(window).scroll(function() {
  if ($(this).scrollTop()>200) {
    $('.button-scrollup').fadeIn();
  }
  else {
    $('.button-scrollup').fadeOut();
  }
});