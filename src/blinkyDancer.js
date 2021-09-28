class makeBlinkyDancer extends makeDancer {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="blinkydancer"></span>');
  }
  step () {
    makeDancer.prototype.step.call(this);
    this.$node.toggle();
  }
  lineUp () {
    var width = $('body').width();
    this.setPosition(this.top, width / 2);
  }
}
this.makeBlinkyDancer = makeBlinkyDancer;