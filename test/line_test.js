var Line = require('../lib/line'),
    Point = require('../lib/point'),
    expect = require('chai').expect;

describe("Line", function(){
  var point1, point2, subject, wildPoint, pointOnLeft, pointOnRight;
  before(function(){
    point1 = new Point(10, 20);
    point2 = new Point(20, 30);
    pointOnRight = new Point(15, 20);
    pointOnLeft = new Point(10, 25);
    wildPoint = new Point(100, 0);
    subject = new Line(point1, point2);
  });

  describe("#coincidentPoint", function(){
    var lineToCheck;

    describe('When neither line is horizontal or vertical', function(){
      before(function() { 
        var p1, p2;
        p1 = new Point(20, 20);
        p2 = new Point(10, 30);
        lineToCheck = new Line(p1, p2);
      });

      it ('should return the coincident point', function(){
        var x = 15, y = 25;
        var received = subject.coincidentPoint(lineToCheck);
        expect(received.x).to.equal(x);
        expect(received.y).to.equal(y);
      });
    });
  });

  describe("#perpendicular", function(){
    var onPoint;

    describe('When the line is not horizontal or vertical', function(){
      before(function() { onPoint = new Point(15, 25); });

      it('should return the perpendicular line', function(){
        var received = subject.perpendicular(onPoint);
        expect(subject.gradient() * received.gradient()).to.equal(-1);
      });
    });
  });

  describe("#isPointLeftfLine", function(){
    describe("when the point is on the left of the segment", function(){
      it("should return true", function(){
        expect(subject.isPointLeftOfLine(pointOnLeft)).to.be.true;
      });
    });

    describe("when the point is on the right of the segment", function(){
      it("should return false", function(){
        expect(subject.isPointLeftOfLine(pointOnRight)).to.be.false;
      });
    });
  });
  describe("#isPointRightfLine", function(){
    describe("when the point is on the right of the segment", function(){
      it("should return true", function(){
        expect(subject.isPointRightOfLine(pointOnRight)).to.be.true;
      });
    });

    describe("when the point is on the left of the segment", function(){
      it("should return false", function(){
        expect(subject.isPointRightOfLine(pointOnLeft)).to.be.false;
      });
    });
  });
});
