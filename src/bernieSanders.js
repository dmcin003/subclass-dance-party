var makeBernieSandersDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);

  // this.$node.css('background-image', '(\'/src/download.png\')');
  this.$node = $('<span class="dancer"><img class="bSanders" src="/src/download.png" height="50px" width="25px" border="5px solid #639"  position="absolute" /></span>');
  // {'backgroundImage': 'url("/src/download.png")'});
  // this.step();
  this.setPosition(top, left);



  //;
};

makeBernieSandersDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeBernieSandersDancer.prototype.constructor = makeBernieSandersDancer;

makeBernieSandersDancer.prototype.hasMittens = function () {
  return true;
};

makeBernieSandersDancer.prototype.neatGloveColors = function () {
  return 'brown, gray, white';
};