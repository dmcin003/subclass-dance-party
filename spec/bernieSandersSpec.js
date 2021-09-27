describe('bernieSanders', function() {

  var bernieSanders, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bernieSanders = new makeBernieSandersDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bernieSanders.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(bernieSanders.$node, 'toggle');
    bernieSanders.step();
    expect(bernieSanders.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bernieSanders, 'step');
      expect(bernieSanders.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bernieSanders.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bernieSanders.step.callCount).to.be.equal(2);
    });
  });

  describe('addedMethods', function () {
    xit('should return true on having neat mittens', function () {
      expect(bernieSanders.hasMittens()).to.be.true;
    });
    xit('should return brown, gray, white on having neatGloveColors', function () {
      expect(bernieSanders.neatGloveColors()).to.eql('brown, gray, white');
    });
  });
});
