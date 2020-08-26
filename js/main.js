// portfolio code.................................................................//
$(window).on("load", function () {
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({
      filter: $(this).data("filter"),
    });
    aos_init();
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $(".venobox").venobox();
  });
});

// Portfolio details carousel
$(".portfolio-details-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  items: 1,
});

// Init AOS-portfolio
function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });
}
$(window).on("load", function () {
  aos_init();
});
jQuery;

// Owl-carousel -portfolio

$(".site-main .about-area .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    560: {
      items: 2,
    },
  },
});

// Testimonials carousel (uses the Owl Carousel library) client details code///
$(".testimonials-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  items: 1,
});
