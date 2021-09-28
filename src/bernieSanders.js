class makeBernieSandersDancer extends makeBlinkyDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="dancer"><img class="bSanders" src="/src/download.png" height="100px" width="50px" border="5px solid #639"  position="absolute" /></span>');
    this.setPosition(top, left);
  }

  hasMittens () {
    return true;
  }

  neatGloveColors () {
    return 'brown, gray, white';
  }
}

this.makeBernieSandersDancer = makeBernieSandersDancer;