var Utils = require('./utils'),
    Backbone = require('backbone');

var Point = Backbone.Model.extend({
  ROUNDING_ERROR: Math.pow(10, -10),

  constructor: function(x, y){
    this.x = x;
    this.y = y;
    Backbone.Model.apply(this, arguments);
  },

  clone: function(){
    return new Point(this.x, this.y);
  },

  manhattanDistance: function(point2){
    return Math.abs(point2.x - this.x) + Math.abs(point2.y - this.y);
  },

  distance: function(point2){
    return Math.sqrt(this.distanceSq(point2));
  },

  distanceSq: function(point2){
    return Math.pow(this.x - point2.x, 2) + Math.pow(this.y - point2.y, 2)
  },
  toString: function(){
    return "("+this.x+", "+this.y+")";
  },

  midpoint: function(point2){
    return new Point(
        (this.x + point2.x) / 2.0,
        (this.y + point2.y) / 2.0
        );
  },

  magnitude: function(){
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  },

  angleTo: function(point2){
    //Using the dot product
    //A.B = ||A||*||B||cos(theta)
    var magintudes = this.magnitude() * point2.magnitude(),
        cos_theta = this.dotProduct(point2) / magnitudes;
    return Math.acos(cos_theta);
  },

  dotProduct: function(point2){
    return this.x * point2.x + this.y * point2.y;
  },

  crossProduct: function(point2, point3){
    //Techincally not really a cross product as it gives a scalar result
    return (point2.x - this.x) * (point3.y - this.y) -
            (point3.x - this.x) * (point2.y - this.y);
  },

  perturb: function(multiplier){
    if(!multiplier) var multiplier = 1;
    var newx, newy;
    newx = (Utils.randNormal() * multiplier) + this.x;
    newy = (Utils.randNormal() * multiplier) + this.y;
    return new Point(newx, newy);
  },

  isEqualTo: function(point2, roundingError){
    if(!roundingError) var roundingError = this.ROUNDING_ERROR;
    if(Math.abs(this.x - point2.x) > roundingError) return false;
    return Math.abs(this.y - point2.y) <= roundingError;
  },
});

module.exports = Point;
