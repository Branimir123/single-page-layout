//Offset of top
var offsetOfTop = 50;
var offsetOfDiv = 50;
var bottomOfDiv = $("#go-to-first").position().top;
//Hide the nav-bar
//$('.navbar-inverse').hide();
//Lock the scroll until window is loaded
$('html, body').removeClass('unlock-scroll').addClass('lock-scroll');
//When all contents are loaded
$(window).ready(function() {

    $('html, body').removeClass('lock-scroll').addClass('unlock-scroll');
    $('#loading').hide();
    $('.navbar-inverse').show();
    $(".navbar-inverse").addClass('nav-top');

});
//When document is ready attach behaviour
$(document).ready(function() {
    //Attach scroll to window
    $(window).scroll(function() {
        //If we scroll past the end of the slit-slider
        if ($(window).scrollTop() > bottomOfDiv - offsetOfDiv) {
            $(".navbar-inverse").removeClass('nav-top nav-middle').addClass('nav-bottom');
            $('#return-to-top').fadeIn(400);
            //If we are at the middle
        } else if ($(window).scrollTop() > offsetOfTop) {
            $(".navbar-inverse").removeClass('nav-top nav-bottom').addClass('nav-middle');
            $('#return-to-top').fadeOut(150);
            //If we are at the top offsetOfTop pixels
        } else if ($(window).scrollTop() < offsetOfTop) {
            $(".navbar-inverse").removeClass('nav-bottom nav-middle').addClass('nav-top');
            $('#return-to-top').fadeOut(150);
        }
    });
    // When up-arrow is clicked, scroll to top of body
    $('#return-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});
