$(document).ready(function(){
    //SCROLL
    $('.scroll').click(function () { 
        $('html, body').animate({
            scrollTop: $('#propos').offset().top,
        },0
        );
    });
    /* Portfolio
  -------------------------------------------------------*/
  var $portfolio = $('#project-grid');
  $portfolio.imagesLoaded( function() {
    $portfolio.isotope({
      itemSelector: '.project',
      layoutMode: 'fitRows',
      percentPosition: true
    });
  });
})