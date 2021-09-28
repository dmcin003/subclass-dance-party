// Creates and returns a new dancer object that can step
class makeDancer {
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node = $('<span class="dancer"></span>');
    this.step();
    this.setPosition(top, left);

  }
  step () {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  setPosition (top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
  }
  lineUp () {
    console.log('this is the line up functuion');
    var width = $('body').width();
    this.setPosition(this.top, width / 2);
  }

}


class makeBlinkyDancer extends makeDancer {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="blinkydancer"></span>');
    // makeDancer.call(this, top, left, timeBetweenSteps);
  }
  step () {
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapp  ed html tag.
    this.$node.toggle();
  }
  lineUp () {
    // var dancers = document.getElementById('root').dancers;
    // for (var i = 0; i < dancers.length; ++i) {

    // }
    var width = $('body').width();
    this.setPosition(this.top, width / 2);
  }
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
}
