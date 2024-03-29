// Scroll position
$('#snap-wrapper').on('scroll', function () {

  // while animating, return
  if (timeout) return;

  var userPos = $('#snap-wrapper').scrollTop();
  var skillsPos = $('#skills').offset().top;
  skillsPos = skillsPos + 1700; // 1700 for top
  var difference = skillsPos - userPos;

  // on the skills section
  // difference <= 0 for top
  if (difference <= -300) {
    if (!didAnimate) {
      timeout = true;
      ($('#snap-wrapper').width() < 750) ? smallDevice = true : smallDevice = false;
      animateOn();
    }
  }
  // above the skills section
  else {
    if (!didDeAnimate && !smallDevice) {
      timeout = true;
      animateOff();
    }
  }
});

// Keeping track of states
var didAnimate = false;
var didDeAnimate = false;
var timeout = false;
// mobile users
var smallDevice = false;

// Animations
function animateOn() {
  $('#progressbar1').animate(
    {
      width: '80%',
    },
    500
  );
  $('#progressbarF1').animate(
    {
      width: '80%',
    },
    500
  );
  $('#progressbar2').animate(
    {
      width: '80%',
    },
    600
  );
  $('#progressbarF2').animate(
    {
      width: '60%',
    },
    600
  );
  $('#progressbar3').animate(
    {
      width: '80%',
    },
    700
  );
  $('#progressbarF3').animate(
    {
      width: '35%',
    },
    700
  );
  $('#progressbar4').animate(
    {
      width: '60%',
    },
    800
  );
  $('#progressbarF4').animate(
    {
      width: '30%',
    },
    800
  );
  $('#progressbar5').animate(
    {
      width: '30%',
    },
    900
  );
  $('#progressbarF5').animate(
    {
      width: '30%',
    },
    900,
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
    300
  );
  $('#progressbarF1').animate(
    {
      width: '0px',
    },
    300
  );
  $('#progressbar2').animate(
    {
      width: '0px',
    },
    300
  );
  $('#progressbarF2').animate(
    {
      width: '0px',
    },
    300
  );
  $('#progressbar3').animate(
    {
      width: '0px',
    },
    400
  );
  $('#progressbarF3').animate(
    {
      width: '0px',
    },
    400
  );
  $('#progressbar4').animate(
    {
      width: '0px',
    },
    400
  );
  $('#progressbarF4').animate(
    {
      width: '0px',
    },
    400
  );
  $('#progressbarF5').animate(
    {
      width: '0px',
    },
    400
  );
  $('#progressbar5').animate(
    {
      width: '0px',
    },
    400, function () {
      didDeAnimate = true;
      didAnimate = false;
      timeout = false;
    }
  );
}
