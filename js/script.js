
jQuery(document).ready(function($) {
//модальное окно
    var delay_popup = 5000;
    setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);

 //Плавный скроллинг к элементу
    $("#bs-example-navbar-collapse-1").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });



    /*$('.carousel').carousel({
     interval: 2000,
     pause: 'hover',
     wrap: true
     });*/

    //Carousel
//thred slider
    $('.slider1').bxSlider({
        slideWidth: 200,
        minSlides: 2,
        maxSlides: 6,
        slideMargin: 10,
        pager: false
    });
//second slider
    var carousel = $("#carousel").featureCarousel({
        // include options like this:
        // (use quotes only for string values, and no trailing comma after last option)
        // option: value,
        // option: value
    });

    $("#but_prev").click(function () {
        carousel.prev();
    });
    $("#but_pause").click(function () {
        carousel.pause();
    });
    $("#but_start").click(function () {
        carousel.start();
    });
    $("#but_next").click(function () {
        carousel.next();
    });

    //navbar
    $(".dropdown-toggle").mouseover(function(){
        $(".dropdown-toggle i").css("visibility", "visible");
        $(".dropdown-toggle").mouseout(function(){
            $(".dropdown-toggle i").css("visibility", "hidden");
        });
    });

    //preloader
    var $window = $(window);
    var $body = $('body');
    $body.css('overflow', 'hidden').append('<div id="preloader"></div>');
    $window.load(function() {
        $('#preloader').fadeOut();
        $body.css('overflow', '');
    });

    // Why Carousel:

    //$('#carousel').featureCarousel({
    //    largeFeatureWidth: 570,
    //    largeFeatureHeight: 360,
    //    smallFeatureWidth: 370,
    //    smallFeatureHeight: 260,
    //    topPadding: 0,
    //    sidePadding: 0
    //});
});

