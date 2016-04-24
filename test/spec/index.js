var expect = require('chai').expect;

describe('random-minute: ', function () {

  var randomMinute = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {
      expect(randomMinute()).to.be.within(0, 59);
    }
  });
});
