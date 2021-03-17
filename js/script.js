$(function () {
    //preloader js
    $(window).on('load', function () {
        $('.preloader').delay(3000).fadeOut(800);
    })

    // back to top js
    let btn = $('#button');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    // sticky menu js
    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();
        if (scrolling > 0) {
            $('.nav').addClass('fixed');
        }
        else {
            $('.nav').removeClass('fixed');
        }
    });

    //animation scroll js
    let html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });


})

