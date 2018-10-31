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
    
    // lighte slider
    $('#light-slider').lightSlider({
        item: 1,
        loop: false,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        slideMargin: 10,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });
    
    // lighte slider
    $('#light').lightSlider({
        item: 1,
        loop: false,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        slideMargin: 10,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });
    // Open About page
    $(".about").click(function(){
        $(".about-page").css("display","block");
        $(".body").css("display", "none");
    });
    $(".close-about").click(function () {
        $(".about-page").css("display", "none");
        $(".body").css("display", "block");
    });
    

    // smooth scroll
    var scroll = new SmoothScroll('a[href*="#1"]',{
        speed: 900
    });
    var scroll = new SmoothScroll('a[href*="#2"]', {
        speed: 900
    });
    var scroll = new SmoothScroll('a[href*="#3"]', {
        speed: 900
    });

});
