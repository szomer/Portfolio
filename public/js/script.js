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

const themeCheckBox = document.querySelector('#themebtn');
const bodyElement = document.querySelector('body');
const videoClouds = document.querySelector('.video-clouds');
const videoMoon = document.querySelector('.video-moon');

themeCheckBox.addEventListener('change', () => {
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
