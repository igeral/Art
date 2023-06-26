const carouselItems = document.querySelectorAll(".ws-journal-item");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = carouselItems.length - 1;

carouselItems.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

function showPrevSlide() {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  carouselItems.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
  updateButtonVisibility();
}

function showNextSlide() {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  carouselItems.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
  updateButtonVisibility();
}

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

function updateButtonVisibility() {
  if (curSlide === 0) {
    prevButton.style.display = "none";
    nextButton.style.display = "block";
  } else if (curSlide === carouselItems.length - 1) {
    prevButton.style.display = "block";
    nextButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
    nextButton.style.display = "block";
  }
}
