$(document).ready(function() {
  window.dancers = [];
  var music = new Audio('/src/egypt.wav');

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

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
      // if (window.dancers[i] instanceof makeDancer){
      // }
      window.dancers[i].lineUp();
    }
    // for (var i = 0; i < 100; ++i) {
    //   console.log('grrr');
    //   for (var j = 0; j < window.dancers.length; ++j) {
    //     console.log(i);
    //     window.dancers[j].setPosition(i * 10 + j * 10 + 50, $('body').width());
    //   }
    // }
  });
});

