describe('happyFeet', function() {

  var happyFeet, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    happyFeet = new makeHappyFeet(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(happyFeet.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(happyFeet.$node, 'toggle');
  //   happyFeet.step();
  //   expect(happyFeet.$node.fadeToggle.called).to.be.true;
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(happyFeet, 'step');
      expect(happyFeet.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(happyFeet.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(happyFeet.step.callCount).to.be.equal(2);
    });
  });

  describe('addedMethods', function () {
    it('should return true on asking if they waddle', function () {
      expect(happyFeet.doesWaddle()).to.eql('HECK YES I WADDLE');
    });
    it('should return the fibonacci number', function () {
      expect(happyFeet.fibo(14)).to.eql(377);
      expect(happyFeet.fibo(0)).to.eql(0);
      expect(happyFeet.fibo(3)).to.eql(2);
    });
  });
});
