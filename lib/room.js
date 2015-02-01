var Utils = require('./utils'),
    Backbone = require('backbone'),
    LineSegment = require('./line_segment'),
    Wall = require('./wall'),
    Point = require('./point');

var Room = Backbone.Model.extend({
  initialize: function(){
    this.centre = this.attributes.centre;
    this.width = this.attributes.width;
    this.height = this.attributes.height;
    this.hallways = [];
    this.wallWidth = this.attributes.wallWidth || 5;
  },

  northWall: function(){
    return new Wall({
      start: this.topLeft(),
      finish: this.topRight(),
      width: this.wallWidth
    });
  },

  eastWall: function(){
    return new Wall({
      start: this.topRight(),
      finish: this.bottomRight(),
      width: this.wallWidth
    });
  },

  westWall: function(){
    return new Wall({
      start: this.topLeft(),
      finish: this.bottomLeft(),
      width: this.wallWidth
    });
  },

  southWall: function(){
    return new Wall({
      start: this.bottomLeft(),
      finish: this.bottomRight(),
      width: this.wallWidth
    });
  },

  boundingBox: function(){
    var centreX, centreY, halfWidth, halfHeight, corners;
    centreX = this.centre.x;
    centreY = this.centre.x;
    halfWidth = this.width / 2.0;
    halfHeight = this.height / 2.0;
    corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(function(modifiers){
      var x, y;
      x = centreX + (modifiers[0] * halfWidth);
      y = centreY + (modifiers[1] * halfHeight);
      return new Point(x, y);
    });
    return {
      topLeft: corners[0],
      topRight: corners[1],
      bottomRight: corners[2],
      bottomLeft: corners[3]
    }
  },

  walls: function(){
    return [
      this.northWall(), this.eastWall(),
      this.southWall(), this.westWall()
    ];
  },

  bottomLeft: function(){
    return this.boundingBox().bottomLeft;
  },

  bottomRight: function(){
    return this.boundingBox().bottomRight;
  },

  topRight: function(){
    return this.boundingBox().topRight;
  },

  topLeft: function(){
    return this.boundingBox().topLeft;
  }
});

module.exports = Room;
