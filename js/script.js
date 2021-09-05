$(document).ready(function(){
//counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


$(document).ready(function(){
//wow 
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
});

// parallax

$(document).ready(function(){
    // parallax
    $('#example').parallax();

    //aos
    AOS.init();

    // ISOTOPE
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    $('.filter button').on("click", function(){
        var value = $(this).attr('data-name');
        console.log('value', value);
    $grid.isotope({
        filter: value
    });
    });

});


$(function(){
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 1000, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 400, // Animation in speed (ms)
      animationOutSpeed: 400, // Animation out speed (ms)
      scrollText: 'Scroll to top', // Text for element
      activeOverlay:false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
  });