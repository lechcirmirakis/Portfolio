$(document).ready(function() {

    // Smooth scroll animations for links
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
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

    // form validation

    // name input
    $('#name').on('blur', function() {
      var input = $(this);
      var name_length = input.val().length;
      if (name_length >= 3 && name_length <= 50) {
          input.removeClass('invalid').addClass('valid');
          input.next('.statement').text('').removeClass('error').addClass('ok');
      } else {
          input.removeClass('valid').addClass('invalid');
          input.next('.statement').text('Wprowadź poprawne imię i nazwisko.').removeClass('ok').addClass('error');
      }
  });

    // email input
    $('#email').on('blur', function() {
        var input = $(this);
        var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        var is_email = email.test(input.val());
        if (is_email) {
            input.removeClass('invalid').addClass('valid');
            input.next('.statement').text('').removeClass('error').addClass('ok');
        } else {
            input.removeClass('valid').addClass('invalid');
            input.next('.statement').text('Wprowadź prawidłowy adress email.').removeClass('ok').addClass('error');
        }
    });

    // message input
    $('#message').on('blur', function() {
        var input = $(this);
        var message = $(this).val();
        if (message) {
            input.removeClass('invalid').addClass('valid');
            input.next('.statement').text('').removeClass('error').addClass('ok');
        } else {
            input.removeClass('valid').addClass('invalid');
            input.next('.statement').text('Wiadomość nie może być pusta!').removeClass('ok').addClass('error');
        }
    });

    // submit button validation
    $('#submit').click(function() {
        var name = $('#name');
        var email = $('#email');
        var message = $('#message');
        var input = $(this);

        if (name.hasClass('valid') && email.hasClass('valid') && message.hasClass('valid')) {
            event.preventDefault();
            input.next('.statement').text('').removeClass('error').addClass('ok');
            alert('Wiadomosc zostala wyslana prawidłowo');
        } else {
            event.preventDefault();
            input.next('.statement').text('Jeśli chcesz wysłac formularz, wypełnij wszystkie pola').removeClass('ok').addClass('error');
        }
    });


});
