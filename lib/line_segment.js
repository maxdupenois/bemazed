var Utils = require('./utils'),
    Backbone = require('backbone'),
    Line = require('./line'),
    Point = require('./point');

var LineSegment = Line.extend({
  initialize: function(){
    this.start = this.attributes.start;
    this.finish = this.attributes.finish;
    this.point1 = this.start;
    this.point2 = this.finish;
    this.length = this.start.distance(this.finish);
  },

  isPointInBounds: function(point){
    return(
      point.x >= Math.min(this.start.x, this.finish.x) &&
      point.y >= Math.min(this.start.y, this.finish.y) &&
      point.x <= Math.max(this.start.x, this.finish.x) &&
      point.y <= Math.max(this.start.y, this.finish.y)
      );
  },

  isPointOnSegment: function(point){
    return (this.isPointInBounds(point) && this.isPointOnLine(point));
  },

  closestPointTo: function(point){
    if(this.isPointOnSegment(point)) return point;
    // line from point running perpendicular to line
    // if it crosses segment then where it crosses is closest
    // if not it is either end point
    // ax + by - c
    var perpLine, coincidentPoint, distStart, distFinish
    distStart = this.start.distanceSq(point);
    distFinish = this.finish.distanceSq(point);
    if(this.isPointOnLine(point)){
      return ((distStart <= distFinish) ? this.start : this.finish);
    }
    perpLine = this.perpendicular(point);
    coincidentPoint = this.coincidentPoint(perpLine);
    // shouldn't happen because of on line check
    // if (coincidentPoint == null) return null;
    if (this.isPointOnSegment(coincidentPoint)) return coincidentPoint;
    return ((distStart <= distFinish) ? this.start : this.finish);
  },

  shortestDistanceToPoint: function(point){ 
    if (this.isPointOnSegment()) return 0.0;
    var closestPoint = this.closestPointTo(point);
    return closestPoint.distance(point);
  },

  midpoint: function(){
    return this.start.midpoint(this.finish);
  },

  split: function(point){
    return [
      new LineSegment(this.start, point),
      new LineSegment(point, this.finish)
    ];
  },

  pointAt: function(length){
    if(length > this.length) return null;
    if(length < 0) return null;
    var pointX, pointY,
      xDiff = this.finish.x - this.start.x,
      yDiff = this.finish.y - this.start.y,
      proportion = length / this.length;
    pointX = this.start.x + (proportion * xDiff);
    pointY = this.start.y + (proportion * yDiff);
    return new Point(pointX, pointY);
  }
});

module.exports = LineSegment;
