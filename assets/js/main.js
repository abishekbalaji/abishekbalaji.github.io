//Go To Top Button----------------------------------------------

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Smooth Scrolling-------------------------------------------------

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   function counter(id, start, end, duration) {
//     let obj = document.getElementById(id),
//       current = start,
//       range = end - start,
//       increment = end > start ? 1 : -1,
//       step = Math.abs(Math.floor(duration / range)),
//       timer = setInterval(() => {
//         current += increment;
//         obj.textContent = current;
//         if (current == end) {
//           clearInterval(timer);
//         }
//       }, step);
//   }
//   counter("count1", 0, 145, 1000);
//   counter("count2", 0, 112, 1000);
//   counter("count3", 124800, 125000, 1000);

// });

// $(window).scroll(function () {
//   function counter(id, start, end, duration) {
//     let obj = document.getElementById(id),
//       current = start,
//       range = end - start,
//       increment = end > start ? 1 : -1,
//       step = Math.abs(Math.floor(duration / range)),
//       timer = setInterval(() => {
//         current += increment;
//         obj.textContent = current;
//         if (current == end) {
//           clearInterval(timer);
//         }
//       }, step);
//   }
//   var hT = $("#scroll-to").offset().top,
//     hH = $("#scroll-to").outerHeight(),
//     wH = $(window).height(),
//     wS = $(this).scrollTop();
//   if (wS > hT + hH - wH) {
//     counter("count1", 0, 145, 1000);
//     counter("count2", 0, 112, 1000);
//     counter("count3", 124800, 125000, 1000);
//   }
// });

//Running numbers--------------------------------------------

$(window).on("scroll", function () {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  var hT = $("#scroll-to").offset().top,
    hH = $("#scroll-to").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();

  if (wS > hT + hH - wH - 500) {
    console.log("comment box section arrived! eh");
    // After Stuff
    $(window).off("scroll");
    counter("count1", 0, 145, 2000);
    counter("count2", 0, 112, 2000);
    counter("count3", 124800, 125000, 2000);
  }
});

document.querySelector("video").addEventListener(
  "ended",
  function (e) {
    e.target.currentTime = 0;
    e.target.play();
  },
  false
);
