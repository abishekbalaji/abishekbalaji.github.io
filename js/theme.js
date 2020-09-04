(function ($) {
  "use strict";

  /*----------------------------------------------------*/
  /*  Clients Slider
    /*----------------------------------------------------*/
  function clients_slider() {
    if ($(".clients_slider").length) {
      $(".clients_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 5,
        nav: false,
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 2,
          },
          575: {
            items: 3,
          },
          768: {
            items: 4,
          },
          992: {
            items: 5,
          },
        },
      });
    }
  }
  clients_slider();
  /*----------------------------------------------------*/
})(jQuery);
