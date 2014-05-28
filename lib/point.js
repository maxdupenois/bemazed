var Utils = require('./utils');

var Point = {};
Point.fn = {};

Point.fn.perturb = function(){
  var newx, newy;
  newx = Utils.randNormal() + this.x;
  newy = Utils.randNormal() + this.y;
  return Point.create(newx, newy);
};

Point.fn.manhattanDistance = function(point2){
  return Math.abs(point2.x - this.x) + Math.abs(point2.y - this.y);
};

Point.fn.distance = function(point2){
  return Math.sqrt(
    Math.pow(this.x - point2.x, 2) + Math.pow(this.y - point2.y, 2)
  );
};

Point.fn.toString = function(){
  return "("+this.x+", "+this.y+")";
};

Point.fn.midpoint = function(point2){
  return Point.create(
      (this.x + point2.x) / 2.0,
      (this.y + point2.y) / 2.0
      );
};

Point.fn.magnitude = function(){
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
};

Point.fn.angleTo = function(point2){
  //Using the dot product
  //A.B = ||A||*||B||cos(theta)
  var magintudes = this.magnitude() * point2.magnitude(),
      cos_theta = this.dotProduct(point2) / magnitudes;
  return Math.acos(cos_theta);
};

Point.fn.dotProduct = function(point2){
  return this.x * point2.x + this.y * point2.y;
};

Point.fn.crossProduct = function(point2, point3){
  //Techincally not really a cross product as it gives a scalar result
  return (point2.x - this.x) * (point3.y - this.y) -
          (point3.x - this.x) * (point2.y - this.y);
};

Point.create = function(x, y){
  var point = {};
  Utils.addInstanceFunctions(Point.fn, point);
  point.x = x;
  point.y = y;
  return point;
};
exports.create = Point.create;
