var Point = require('../lib/point'),
    expect = require('chai').expect;

describe("Point", function(){

  var point;
  before(function(){ point = Point.create(0, 0); });

  describe("#distance", function(){
    it("should calculate the distance between two points", function(){
      var point2 = Point.create(3, 4);
      expect(point.distance(point2)).to.equal(5);
    });
  });

  describe("#midpoint", function(){
    it("should return the midpoint of two points", function(){
      var point2 = Point.create(10, 20);
      var midpoint = point.midpoint(point2);
      expect(midpoint.x).to.equal(5);
      expect(midpoint.y).to.equal(10);
    });
  });
});
