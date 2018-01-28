$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

$('.project-preview__title').on('click', function() {
  if (!$(this).hasClass('active')) {
    $('.project-preview__title.active').next().slideToggle(500);
    $('.project-preview__title').removeClass('active');
    $(this).addClass('active');
    $(this).next().slideToggle(500);
  } else if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).next().slideToggle(500);
  }
});


