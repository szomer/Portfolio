// Transition Screen-------------------------------------------------
const transition = document.querySelector('#transition');
setTimeout(() => {
  transition.classList.add('hidden');
}, 2500);

// Apple hide navbars---------------------------------------------------
window.scrollTo(0, 1);

// Handle Forest Banner-------------------------------------------------
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
$(window).resize(function () {
  setHomeForestWidth();
});
function setHomeForestWidth() {
  var div = $('.home-forest');
  var width = div.width();
  var height = '80%';
  if (width < 1000) {
    height = '60%';
  } else if (width < 1200) {
    height = '70%';
  }
  div.css('height', height);
}
setHomeForestWidth();

// Theme ---------------------------------------------------------
const themeCheckBox = document.querySelector('#themebtn');
const bodyElement = document.querySelector('body');
const videoClouds = document.querySelector('.video-clouds');
const videoMoon = document.querySelector('.video-moon');
const loader = document.querySelector('#transition');
const loaderText = document.querySelector('#transition-text');
updateVideo();
themeCheckBox.addEventListener('change', () => {
  // loading animation
  load();
  // device size
  updateVideo();
  // set theme
  if (themeCheckBox.checked) {
    bodyElement.classList.add('theme-light');
    videoMoon.classList.remove('hidden');
    $('.video-moon').get(0).play();
    videoClouds.classList.add('hidden');
    $('.video-clouds').get(0).pause();
  } else {
    bodyElement.classList.remove('theme-light');
    videoClouds.classList.remove('hidden');
    $('.video-clouds').get(0).play();
    videoMoon.classList.add('hidden');
    $('.video-moon').get(0).pause();
  }
});
function updateVideo() {
  if ($('#home').width() < 800) {
    // change to mobile version
    $('.video-clouds').attr('src', './videos/clouds3_mobile.mp4');
    $('.video-moon').attr('src', './videos/moon_mobile.mp4');
    $(".video-clouds")[0].load();
    $(".video-moon")[0].load();
  } else {
    // change to desktop version
    $('.video-clouds').attr('src', './videos/clouds3.mp4');
    $('.video-moon').attr('src', './videos/moon.mp4');
    $(".video-clouds")[0].load();
    $(".video-moon")[0].load();
  }
}
// function for loading screen
function load() {
  loaderText.classList.remove('hidden');
  loader.classList.remove('hidden');
  loader.classList.add('animate-loader');
  setTimeout(() => {
    loader.classList.add('hidden');
    loaderText.classList.add('hidden');
    loader.classList.remove('animate-loader');
  }, 2000);
}

// Projects Slider-------------------------------------------------
const cards = document.getElementsByClassName('card');
for (let card of cards) {
  card.addEventListener('click', () => {
    if (!card.classList.contains('active')) {
      for (let c of cards) {
        c.classList.remove('active');
        card.classList.add('active');
      }
    }
  });
}