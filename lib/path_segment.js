var Utils = require('./utils'),
    Point = require('./point');

var PathSegment = {};
PathSegment.fn = {};

PathSegment.fn.split = function(){

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


exports.create = function(start, finish){
  var path_segment = {};
  Utils.addInstanceFunctions(PathSegment.fn, path_segment);
  path_segment.start = start;
  path_segment.finish = finish;
  path_segment.length = start.distance(finish);
  return path_segment;
};
