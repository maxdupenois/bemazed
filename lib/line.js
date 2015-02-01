var Utils = require('./utils'),
    Backbone = require('backbone'),
    Point = require('./point');

var Line = Backbone.Model.extend({
  ROUNDING_ERROR: Math.pow(10, -10),

  initialize: function(){
    this.point1 = this.attributes.p1;
    this.point2 = this.attributes.p2;
  },

  yForX: function(x){
    if (this.isHorizontal()) return this.point1.y;
    if (this.isVertical()) return null;
    return (this.gradient() * x) + this.yIntercept();
  },

  xForY: function(y){
    if (this.isHorizontal()) return null;
    if (this.isVertical()) return this.point1.x;
    return (y - this.yIntercept()) / this.gradient();
  },

  coincidentPoint: function(line){
    if (line.isHorizontal() && this.isHorizontal()) return null;
    if (line.isVertical() && this.isVertial()) return null;
    if (line.isVertical() && this.isHorizontal()){
      return new Point(line.point1.x, this.point1.y);
    }
    if (line.isHorizontal() && this.isVertical()){
      return new Point(this.point1.x, line.point1.y);
    }
    // y = m1x + c1
    // y = m2x + c2
    // m1x + c1 = m2x + c2
    // m1x - m2x = c2 - c1
    // x(m1 - m2) = c2 - c1
    // x = (c2 - c1) / (m1 - m2)
    var x, y, cDiff, mDiff;
    cDiff = line.yIntercept() - this.yIntercept();
    mDiff = this.gradient() - line.gradient();
    x = cDiff / mDiff;
    y = this.yForX(x);
    return new Point(x, y);
  },

  perpendicular: function(onPoint){
    // Assumes point is not on line for the moment
    var p1, p2, grad, yInt, p2x, p2y;
    p1 = onPoint.clone();
    if (this.isHorizontal()){
      p2 = new Point(p1.x, this.point1.y);
    } else if (this.isVertical()){
      p2 = new Point(this.point1.x, p1.y);
    } else {
      //perp equation: (yp - opy) = -1/m * (xp - opx)
      grad = (-1 / this.gradient());
      yInt = onPoint.y - (onPoint.x * grad);
      p2x = onPoint.x + 1;
      p2y = (grad * p2x) + yInt;
      p2 = new Point(p2x, p2y);
    }
    return new Line(p1, p2);
  },

  yIntercept: function(){
    if (this.isHorizontal()) return this.point1.y;
    if (this.isVertical()) return null;
    var x1, x2, y1, y2;
    x1 = this.point1.x;
    y1 = this.point1.y;
    return (y1 - (this.gradient() * x1));
  },

  isHorizontal: function(){
    var x1, x2;
    x1 = this.point1.x;
    x2 = this.point2.x;
    return ( Math.abs(x2 - x1) <= this.ROUNDING_ERROR );
  },

  isVertical: function(){
    var y1, y2;
    y1 = this.point1.y;
    y2 = this.point2.y;
    return ( Math.abs(y2 - y1) <= this.ROUNDING_ERROR );
  },

  gradient: function(){
    if(this.isVertical()) return Math.INF;
    if(this.isHorizontal()) return 0;

    var x1, x2, y1, y2;
    x1 = this.point1.x;
    x2 = this.point2.x;
    y1 = this.point1.y;
    y2 = this.point2.y;
    return (x2 - x1) / (y2 - y1);
  },

  isPointRightOfLine: function(point){
    var signOfAcuteAngle = this.point1.crossProduct(this.point2, point);
    return signOfAcuteAngle < -this.ROUNDING_ERROR;
  },

  isPointLeftOfLine: function(point){
    var signOfAcuteAngle = this.point1.crossProduct(this.point2, point);
    return signOfAcuteAngle > this.ROUNDING_ERROR;
  },

  isPointOnLine: function(point){
    var angle = this.point1.crossProduct(this.point2, point);
    return Math.abs(angle) <= this.ROUNDING_ERROR;
  }

});

module.exports = Line;
