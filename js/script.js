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

    // fade in css animations
    $('*[data-animate]').addClass('hide').each(function() {

        if ($(this).data('animate') === "zoomInDown") {
            $(this).viewportChecker({
                classToAdd: 'show animated_2 ' + $(this).data('animate'),
                classToRemove: 'hide',
                offset: '20%'
            });
        } else {
            $(this).viewportChecker({
                classToAdd: 'show animated ' + $(this).data('animate'),
                classToRemove: 'hide',
                offset: '20%'
            });
        }
    });

});
