//loader
window.addEventListener("load", function () {
  // Show the loader
  document.querySelector(".load").style.display = "block";

  // Hide the loader after 2 seconds
  setTimeout(function () {
    document.querySelector(".load").style.display = "none";
  }, 2000);
});

window.addEventListener("load", function () {
  // Show the loader
  // document.querySelector(".actual-body").style.display = "none";

  // Hide the loader after 3 seconds
  setTimeout(function () {
    document.querySelector(".body").style.display = "block";
    document.querySelector("body").style.overflow = "scroll";
    document.querySelector(".body").style.opacity = "1";
  }, 3000);
});
