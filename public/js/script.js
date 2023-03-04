//--------
// hanlde forest image size
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

//---------
// theme
const themeCheckBox = document.querySelector('#themebtn');
const bodyElement = document.querySelector('body');
const videoClouds = document.querySelector('.video-clouds');
const videoMoon = document.querySelector('.video-moon');
const loader = document.querySelector('#transition');
const loaderText = document.querySelector('#transition-text');

themeCheckBox.addEventListener('change', () => {
  // loading animation
  load();

  // set theme
  if (themeCheckBox.checked) {
    bodyElement.classList.add('theme-light');
    videoMoon.classList.remove('hidden');
    videoClouds.classList.add('hidden');
  } else {
    bodyElement.classList.remove('theme-light');
    videoClouds.classList.remove('hidden');
    videoMoon.classList.add('hidden');
  }
});

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
