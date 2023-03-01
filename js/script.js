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
