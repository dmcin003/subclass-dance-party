$(document).ready(function() {
  window.dancers = [];
  var music = new Audio('/src/egypt.wav');

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineupButton').on('click', function () {
    music.play();
    for (var i = 0; i < window.dancers.length; ++i) {
      window.dancers[i].lineUp();
    }
  });
  var currentAngle = 0;
  var isBernieDancing = false;
  var timer;
  $('.bernieDancesAroundBlinkyButton').on('click', function () {
    currentAngle += 120;
    $('.centerDiv').css({ transform: `rotate(${currentAngle}deg)`});
    $('.bSanders').css({transform: `rotate(${currentAngle}deg)`});
  });
  $('body').on('keydown', function (e) {
    if (e.key === 'ArrowUp') {
      for (var i = 0; i < window.dancers.length; ++i) {
        window.dancers[i].setPosition(window.dancers[i].top - 10, window.dancers[i].left);
        window.dancers[i].top -= 10;
      }
    } else if (e.key === 'ArrowDown') {
      for (var i = 0; i < window.dancers.length; ++i) {
        window.dancers[i].setPosition(window.dancers[i].top + 10, window.dancers[i].left);
        window.dancers[i].top += 10;
      }
    } else if (e.key === 'ArrowLeft') {
      for (var i = 0; i < window.dancers.length; ++i) {
        window.dancers[i].setPosition(window.dancers[i].top, window.dancers[i].left - 10);
        window.dancers[i].left -= 10;
      }
    } else if (e.key === 'ArrowRight') {
      for (var i = 0; i < window.dancers.length; ++i) {
        window.dancers[i].setPosition(window.dancers[i].top, window.dancers[i].left + 10);
        window.dancers[i].left += 10;
      }
    }
  });
});