document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      triggerAnimation();
    });
  });
  
  function triggerAnimation() {
    var aboutUsSection = document.getElementById("about-us");
    if (isInViewport(aboutUsSection)) {
      aboutUsSection.classList.add("visible");
    } else {
      aboutUsSection.classList.remove("visible");
    }
  }
  
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  