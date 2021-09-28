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
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  setPosition (top, left) {
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
