var makeHappyFeet = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.top = top;
  this.$node = $('<span class="dancer"><img src="/src/hf.png" height="50px" width="25px" position="absolute" /></span>');

  this.setPosition(top, left);
};

makeHappyFeet.prototype = Object.create(makeBlinkyDancer.prototype);
makeHappyFeet.prototype.constructor = makeHappyFeet;

// makeHappyFeet.prototype.step = function () {
//   this.timeBetweenSteps = 1000;
//   makeDancer.prototype.step.call(this);
//   this.setPosition( $('body').height() * Math.random(), $('body').width() * Math.random());
//   this.$node.fadeToggle();
// };


makeHappyFeet.prototype.doesWaddle = function () {
  return 'HECK YES I WADDLE';
};

makeHappyFeet.prototype.fibo = function (int) {
  if (int === 1 || int === 0) {
    return int;
  }
  return this.fibo(int - 1) + this.fibo(int - 2);
};

makeHappyFeet.prototype.lineUp = function () {
  var top = this.top;
  var left = $('body').width() / 2;
  this.setPosition(top, left);
};