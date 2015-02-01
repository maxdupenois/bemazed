var LineSegment = require('../lib/line_segment'),
    Point = require('../lib/point'),
    expect = require('chai').expect;

describe("LineSegment", function(){
  var start, finish, subject, wildPoint, pointOnLeft, pointOnRight;
  before(function(){
    start = new Point(10, 20);
    finish = new Point(20, 30);
    pointOnRight = new Point(15, 20);
    pointOnLeft = new Point(10, 25);
    wildPoint = new Point(100, 0);
    subject = new LineSegment(start, finish);
  });

  describe("::create", function(){
    it("should create a line segment with a given start and finish", function(){
      var segment = new LineSegment(start, finish);
      expect(segment.start).to.equal(start);
      expect(segment.finish).to.equal(finish);
    });

    it("should set the length correctly", function(){
      var segment = new LineSegment(start, finish);
      expect(segment.length).to.equal(start.distance(finish));
    });
  });

  describe("#closestPointTo", function(){
    var pointToCheck;
    describe('when the closest point is on the segment', function(){
      before(function() { pointToCheck = new Point(15, 23) });
      it("should return the closest point", function(){
        received = subject.closestPointTo(pointToCheck);
        expected = new Point(14, 24);
        expect(received.isEqualTo(expected)).to.be.true;
      });
    });

    describe('when the closest point is the segment start', function(){
      before(function() { pointToCheck = new Point(0, 10); });

      it("should return the segment start", function(){
        expect(subject.closestPointTo(pointToCheck)).to.equal(subject.start);
      });
    });

    describe('when the closest point is the segment finish', function(){
      before(function() { pointToCheck = new Point(30, 40); });

      it("should return the segment finish", function(){
        expect(subject.closestPointTo(pointToCheck)).to.equal(subject.finish);
      });
    });
  });

  describe("#isPointLeftfSegment", function(){
    describe("when the point is on the left of the segment", function(){
      it("should return true", function(){
        expect(subject.isPointLeftOfLine(pointOnLeft)).to.be.true;
      });
    });

  });
});
