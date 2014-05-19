var PathSegment = require('../lib/path_segment'),
    Point = require('../lib/point'),
    expect = require('chai').expect;

describe("PathSegment", function(){
  var start, finish, subject;
  before(function(){
    start = Point.create(10, 20);
    finish = Point.create(20, 30);
    subject = PathSegment.create(start, finish);
  });

  describe("::create", function(){
    it("should create a  path segment with a given start and finish", function(){
      var segment = PathSegment.create(start, finish);
      expect(segment.start).to.equal(start);
      expect(segment.finish).to.equal(finish);
    });

    it("should set the length correctly", function(){
      var segment = PathSegment.create(start, finish);
      expect(segment.length).to.equal(start.distance(finish));
    });
  });

  describe("#pointAt", function(){
    describe("when the line is greater than or equal to 0 and less than the line length", function(){
      it("should return the point on the line the given distance from the start point", function(){
        var point = subject.pointAt(subject.length / 2);
        expect(point.x).to.equal((start.x + finish.x) / 2);
        expect(point.y).to.equal((start.y + finish.y) / 2);
      });
    });

    describe("when the line is less than 0", function(){
      it("should return null", function(){
        var point = subject.pointAt(-10);
        expect(point).to.be.null;
      });
    });

    describe("when the line is greater than the line length", function(){
      it("should return null", function(){
        var point = subject.pointAt(subject.length + 1);
        expect(point).to.be.null;
      });
    });

  });

});
