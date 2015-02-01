var Wall = require('../lib/wall'),
    Line = require('../lib/line'),
    LineSegment = require('../lib/line_segment'),
    Point = require('../lib/point'),
    expect = require('chai').expect;

describe("Point", function(){
  var point1, point2;
  before(function(){
    point1 = new Point(10, 20);
    point2 = new Point(20, 30);
    subject = new Wall({ start: point1, finish: point2, width: 10 });
  });

  it ('should bloody work', function(){
  });
});
