var Utils = require('./utils'),
    Backbone = require('backbone'),
    LineSegment = require('./line_segment'),
    Point = require('./point');

var Wall = LineSegment.extend({
  initialize: function(){
    this.start = this.attributes.start;
    this.finish = this.attributes.finish;
    this.point1 = this.start;
    this.point2 = this.finish;
    this.length = this.start.distance(this.finish);
    this.width = this.attributes.width;
  },

  isPointInWall: function(point){
    if(!this.isPointInBounds(point)) return false;
    // Wall is centered on line
    var dist = this.shortestDistanceToPoint(point);
    return dist <= ( width / 2.0 );
  }
});

module.exports = Wall;
