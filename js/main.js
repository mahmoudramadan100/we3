$(function () {
    // open video
    $(".js-video-button").modalVideo({
        youtube: {
            controls: 0,
            nocookie: true
        }
    });
    // scroll icons
    $(".scroll span").click(function () {
        $('html, body').animate({
            scrollTop: $(".slide").offset().top
        }, 700);
    });

    $(".fa-angle-down").click(function () {
        $('html, body').animate({
            scrollTop: $(".slide").offset().top
        }, 700);
    });
    

    // ripples water 
    $('.home').ripples({
        resolution: 312,
        dropRadius: 20,
        perturbance: 0.01,
        interactive: true,
    });

    // scroll
    $('#fullpage').fullpage();

});