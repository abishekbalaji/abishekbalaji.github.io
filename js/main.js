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

// client scroll logo//
$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// Top Subtitle text changing effect

(function () {
  var words = [
      "Speed like no other",
      "Fastest growing company",
      "Demolition with safety",
    ],
    i = 0;
  setInterval(function () {
    $("#changingword").fadeOut(function () {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 2700);
})();
