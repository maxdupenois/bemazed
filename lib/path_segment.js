var Utils = require('./utils'),
    Point = require('./point');

var PathSegment = {};
PathSegment.fn = {};
PathSegment.ROUNDING_ERROR = Math.pow(10, -10);

PathSegment.fn.containsPoint = function(point){
  if (!isPointInBounds.call(this, point)) return false;
  var signOfAcuteAngle = this.start.crossProduct(this.finish, point);
  return Math.abs(signOfAcuteAngle) < PathSegment.ROUNDING_ERROR;
};

var isPointInBounds = function(point){
  return(
    point.x >= Math.min(this.start.x, this.finish.x) &&
    point.y >= Math.min(this.start.y, this.finish.y) &&
    point.x <= Math.max(this.start.x, this.finish.x) &&
    point.y <= Math.max(this.start.y, this.finish.y)
    );
};

PathSegment.fn.isPointRightOfSegment = function(point){
  var signOfAcuteAngle = this.start.crossProduct(this.finish, point);
  return signOfAcuteAngle < -PathSegment.ROUNDING_ERROR;
};

PathSegment.fn.isPointLeftOfSegment = function(point){
  var signOfAcuteAngle = this.start.crossProduct(this.finish, point);
  return signOfAcuteAngle > PathSegment.ROUNDING_ERROR;
};

PathSegment.fn.midpoint = function(){
  return this.start.midpoint(this.finish);
};

PathSegment.fn.split = function(point){
  return [
    create(this.start, point),
    create(point, this.finish)
  ];
};

PathSegment.fn.pointAt = function(length){
  if(length > this.length) return null;
  if(length < 0) return null;
  var pointX, pointY,
    xDiff = this.finish.x - this.start.x,
    yDiff = this.finish.y - this.start.y,
    proportion = length / this.length;
  pointX = this.start.x + (proportion * xDiff);
  pointY = this.start.y + (proportion * yDiff);
  return Point.create(pointX, pointY);
};


var create = function(start, finish){
  var path_segment = {};
  Utils.addInstanceFunctions(PathSegment.fn, path_segment);
  path_segment.start = start;
  path_segment.finish = finish;
  path_segment.length = start.distance(finish);
  return path_segment;
};
exports.create = create;
