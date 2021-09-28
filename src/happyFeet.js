class makeHappyFeet extends makeBlinkyDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.left = left;
    this.top = top;
    this.$node = $('<span class="dancer"><img src="/src/hf.png" height="100px" width="50px" position="absolute" /></span>');

    this.setPosition(top, left);
  }
  fibo (int) {
    if (int === 1 || int === 0) {
      return int;
    }
    return this.fibo(int - 1) + this.fibo(int - 2);
  }
  doesWaddle () {
    return 'HECK YES I WADDLE';
  }
}

this.makeHappyFeet = makeHappyFeet;