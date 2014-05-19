var Utils = require('./utils');

var Point = {};
Point.fn = {};

Point.fn.distance = function(point2){
  return Math.sqrt(
    Math.pow(this.x - point2.x, 2) + Math.pow(this.y - point2.y, 2)
  );
};

Point.fn.midpoint = function(point2){
  return Point.create(
      (this.x + point2.x) / 2.0,
      (this.y + point2.y) / 2.0
      );
};

Point.create = function(x, y){
  var point = {};
  Utils.addInstanceFunctions(Point.fn, point);
  point.x = x;
  point.y = y;
  return point;
};
exports.create = Point.create;
