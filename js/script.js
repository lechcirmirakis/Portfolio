$(document).ready(function() {

    // Smooth scroll animations for links
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    // Fade down css animation
    $('.down').each(function(){
      $(this).viewportChecker({
        classToAdd: 'show animated_2 zoomInDown',
        classToRemove: 'hide',
        offset: '10%'
      });
    });

    // Fade left css animation
    $('.left').addClass('hide').each(function(){
      $(this).viewportChecker({
        classToAdd: 'show animated fadeInLeft',
        classToRemove: 'hide',
        offset: '20%'
      });
    });

    // Fade left css animation
    $('.right').addClass('hide').each(function(){
      $(this).viewportChecker({
        classToAdd: 'show animated fadeInRight',
        classToRemove: 'hide',
        offset: '20%'
      });
    });

});
