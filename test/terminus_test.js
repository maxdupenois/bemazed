var Terminus = require('../lib/terminus'),
    Point = require('../lib/point'),
    expect = require('chai').expect;

describe("Terminus", function(){
  var point;
  before(function(){point = Point.create(10, 10);});

  describe("::create", function(){
    it("should set the location as the passed point", function(){
      var terminus = Terminus.create(point);
      expect(terminus.location).to.equal(point);
    });

    it("should give the terminus a random valence if none is passed", function(){
      var terminus = Terminus.create(point);
      expect(terminus.valence).to.be.within(2, 4);
    });

    it("should generate as many terminals as its valence", function(){
      var terminus = Terminus.create(point);
      expect(terminus.terminals.length).to.eq(terminus.valence);
    });
  });

});
