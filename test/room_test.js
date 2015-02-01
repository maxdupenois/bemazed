var Room = require('../lib/room'),
    Point = require('../lib/point'),
    _ = require('underscore'),
    expect = require('chai').expect;

describe("Room", function(){
  var room, centre, width, height;

  before(function(){
    centre = new Point(10, 10);
    width = 20;
    height = 20;
    room = new Room({
      centre: centre,
      width: width,
      height: height
    }); 
  });

  describe("#boundingBox", function(){
    it("should return 4 points", function(){
      expect(_.keys(room.boundingBox()).length).to.equal(4);
    });

    it('should have keys for all corners', function(){
      var keys = _.keys(room.boundingBox());
      expect(keys).to.include('topLeft');
      expect(keys).to.include('topRight');
      expect(keys).to.include('bottomLeft');
      expect(keys).to.include('bottomRight');
    });
  });

  describe('#topLeft', function(){
    it('should be correct', function(){
      var expectedTopLeft = new Point(
        centre.x - (width / 2.0),
        centre.y - (height / 2.0)
      );
      expect(room.topLeft().x).to.eq(expectedTopLeft.x);
      expect(room.topLeft().y).to.eq(expectedTopLeft.y);
    });
  });

  describe('#topRight', function(){
    it('should be correct', function(){
      var expected = new Point(
        centre.x + (width / 2.0),
        centre.y - (height / 2.0)
      );
      expect(room.topRight().x).to.eq(expected.x);
      expect(room.topRight().y).to.eq(expected.y);
    });
  });

  describe('#bottomRight', function(){
    it('should be correct', function(){
      var expected = new Point(
        centre.x + (width / 2.0),
        centre.y + (height / 2.0)
      );
      expect(room.bottomRight().x).to.eq(expected.x);
      expect(room.bottomRight().y).to.eq(expected.y);
    });
  });

  describe('#bottomLeft', function(){
    it('should be correct', function(){
      var expected = new Point(
        centre.x - (width / 2.0),
        centre.y + (height / 2.0)
      );
      expect(room.bottomLeft().x).to.eq(expected.x);
      expect(room.bottomLeft().y).to.eq(expected.y);
    });
  });
});
