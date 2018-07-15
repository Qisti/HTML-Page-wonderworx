$(document).ready(function() {
  $(".designer-button").click(function() {
    $('html, body').animate({
      scrollTop: $("#designer").offset().top
    }, 2000);
  })

  $(".client-button").click(function() {
    $('html, body').animate({
      scrollTop: $("#client").offset().top
    }, 2000);
  })

  $(".arrow").click(function() {
    $('html, body').animate({
      scrollTop: $(".float").offset().top
    }, 2000);
  })

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).scroll(function() {
    $('#box-2').each(function() {
      if (isScrolledIntoView($('#box-2')) === true) {
        $(".float").addClass('fadeInLeft');
      }
    });
  });

});
