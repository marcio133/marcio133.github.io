scrollTo($(".start"));


$(document).on('mousewheel ', function(e) {

    //e.preventDefault(); /** optional, you might want to try it **/



    /** elements to bounce to: **/
    var $elements = $("section[data-scrollBolock]");

    /** get the next/previous element based on the scrolling direction: **/
    var $elementToScrollTo = $elements.eq(0);
    var scrollDirection = "down";
    if (e.originalEvent.wheelDelta >= 0) {
        scrollDirection = "up";
        $elements = $($elements.get().reverse());
    }

    $elements.each(function() {

        var scrollTop = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance = (elementOffset - scrollTop);
        if (scrollDirection === "down") {
            if (distance > 0) {
                $elementToScrollTo = $(this);
                return false;
            }
        } else {
            if (distance < 0) {
                $elementToScrollTo = $(this);
                
                return false;
            }
        }
    });


    /** scrollTo $elementToScrollTo but only if the user stopped scrolling **/
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() { //user stopped scrolling
        scrollTo($elementToScrollTo);
        // $( $elementToScrollTo ).toggleClass( 'animated fadeIn', addOrRemove );
        $($elementToScrollTo).addClass('animated fadeIn');
        setTimeout(function(){ $($elementToScrollTo).removeClass('animated fadeIn'); }, 1000);

    }, 80));

});

$( "#linkedin-link" ).click(function() {
    window.open('https://www.linkedin.com/in/marcio-de-paula-monte');

  });
$( "#github-link" ).click(function() {
    window.open('https://github.com/marcio133');

  });
$( "#email-link" ).click(function() {
    window.open('mailto:marciodepaula133@gmail.com');

  });


function scrollTo($el) {
    $('html,body').animate({
        scrollTop: $($el).offset().top
    }, 500);
}