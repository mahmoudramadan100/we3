$(function () {
    $(".fa-search").click(function(){
        $("input").fadeToggle()
    });
    // open video
    $(".js-video-button").modalVideo({
			youtube:{
				controls:0,
				nocookie: true
			}
        });
        
       $(".fa-angle-down").click(function () {
           $('html, body').animate({
               scrollTop: $("#slide").offset().top
           }, 800);
       });

   
    $('.home').ripples({
        resolution:312,
        dropRadius: 20,
        perturbance: 0.01,
        interactive: true,  
    });

   
        $('#fullpage').fullpage({
            //options here
            autoScrolling: true,
            scrollHorizontally: true
        });

});