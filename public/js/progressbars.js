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

// Keeping track of states
var didAnimate = false;
var didDeAnimate = false;
var timeout = false;

// Animations
function animateOn() {
  $('#progressbar1').animate(
    {
      width: '70%',
    },
    500
  );
  $('#progressbarF1').animate(
    {
      width: '20%',
    },
    500
  );
  $('#progressbar2').animate(
    {
      width: '20%',
    },
    600
  );
  $('#progressbarF2').animate(
    {
      width: '90%',
    },
    600
  );
  $('#progressbar3').animate(
    {
      width: '50%',
    },
    700
  );
  $('#progressbarF3').animate(
    {
      width: '60%',
    },
    700
  );
  $('#progressbar4').animate(
    {
      width: '50%',
    },
    800
  );
  $('#progressbarF4').animate(
    {
      width: '10%',
    },
    800
  );
  $('#progressbar5').animate(
    {
      width: '90%',
    },
    900
  );
  $('#progressbarF5').animate(
    {
      width: '30%',
    },
    900
  );
  $('#progressbar6').animate(
    {
      width: '30%',
    },
    1000
  );
  $('#progressbarF6').animate(
    {
      width: '80%',
    },
    1000,
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
    400
  );
  $('#progressbar6').animate(
    {
      width: '0px',
    },
    500
  );
  $('#progressbarF6').animate(
    {
      width: '0px',
    },
    500,
    function () {
      didDeAnimate = true;
      didAnimate = false;
      timeout = false;
    }
  );
}
