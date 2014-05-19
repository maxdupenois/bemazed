var PathSegment = require('../lib/path_segment'),
    Point = require('../lib/point'),
    expect = require('chai').expect;

describe("PathSegment", function(){
  var start, finish, subject, wildPoint, pointOnLeft, pointOnRight;
  before(function(){
    start = Point.create(10, 20);
    finish = Point.create(20, 30);
    pointOnRight = Point.create(15, 20);
    pointOnLeft = Point.create(10, 25);
    wildPoint = Point.create(100, 0);
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

  describe("#isPointLeftfSegment", function(){
    describe("when the point is on the left of the segment", function(){
      it("should return true", function(){
        expect(subject.isPointLeftOfSegment(pointOnLeft)).to.be.true;
      });
    });

    describe("when the point is not on the left of the segment", function(){
      it("should return false", function(){
        expect(subject.isPointLeftOfSegment(pointOnRight)).to.be.false;
      });
    });
  });

  describe("#split", function(){
    it("should split the segment into two parts using the given point as a new finish and start", function(){
      var splitPoint = Point.create(10, 25);
      var segments = subject.split(splitPoint);
      expect(segments.length).to.eq(2);
      expect(segments[0].start).to.eq(subject.start);
      expect(segments[0].finish).to.eq(splitPoint);
      expect(segments[1].start).to.eq(splitPoint);
      expect(segments[1].finish).to.eq(subject.finish);
    });
  });

  describe("#isPointRightOfSegment", function(){
    describe("when the point is on the right of the segment", function(){
      it("should return true", function(){
        expect(subject.isPointRightOfSegment(pointOnRight)).to.be.true;
      });
    });

    describe("when the point is not on the right of the segment", function(){
      it("should return false", function(){
        expect(subject.isPointRightOfSegment(pointOnLeft)).to.be.false;
      });
    });
  });

  describe("#containsPoint", function(){
    describe("when the point is on the segment", function(){
      it("should return true", function(){
        var pointOnLine = subject.pointAt(1.5);
        expect(subject.containsPoint(pointOnLine)).to.be.true;
      });
    });

    describe("when the point not on the segment", function(){
      it("should return false", function(){
        expect(subject.containsPoint(wildPoint)).to.be.false;
      });
    });
  });

  describe("#split", function(){
  });

  describe("#pointAt", function(){
    describe("when the line is greater than or equal to 0 and less than the line length", function(){
      it("should return the point on the line the given distance from the start point", function(){
        var point = subject.pointAt(subject.length / 2);
        var midpoint = start.midpoint(finish);
        expect(point.x).to.equal(midpoint.x);
        expect(point.y).to.equal(midpoint.y);
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
