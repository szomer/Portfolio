$('#snap-wrapper').on('scroll', function () {
  // while animating, return
  if (timeout) return;

  var userPos = $('#snap-wrapper').scrollTop();
  var skillsPos = $('#skills').offset().top;
  skillsPos = skillsPos + 1700; // 1700 for top
  var difference = skillsPos - userPos;

  // on the skills section
  // difference <= 0 for top
  if (difference <= -500) {
    if (!didAnimate) {
      timeout = true;
      animateOn();
    }
  }
  // above the skills section
  else {
    if (!didDeAnimate) {
      timeout = true;
      animateOff();
    }
  }
});

var didAnimate = false;
var didDeAnimate = false;
var timeout = false;

function animateOn() {
  $('#progressbar1').animate(
    {
      width: '700px',
    },
    700
  );
  $('#progressbar2').animate(
    {
      width: '200px',
    },
    700
  );
  $('#progressbar3').animate(
    {
      width: '600px',
    },
    700
  );
  $('#progressbar4').animate(
    {
      width: '400px',
    },
    700,
    function () {
      didAnimate = true;
      didDeAnimate = false;
      timeout = false;
    }
  );
}

function animateOff() {
  $('#progressbar1').animate(
    {
      width: '0px',
    },
    700
  );
  $('#progressbar2').animate(
    {
      width: '0px',
    },
    700
  );
  $('#progressbar3').animate(
    {
      width: '0px',
    },
    700
  );
  $('#progressbar4').animate(
    {
      width: '0px',
    },
    700,
    function () {
      didDeAnimate = true;
      didAnimate = false;
      timeout = false;
    }
  );
}
