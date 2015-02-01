var Utils = require('./utils'),
    Backbone = require('backbone'),
    Room = require('./room');

var Maze = Backbone.Model.extend({
  wallWidth: 5,
  initialize: function(){
  },
  generateRoom: function(centre){
    var width, height;
    width = Utils.randInt(50, 100);
    height = Utils.randInt(50, 100);
    return new Room({
      centre: centre,
      width: width,
      height: height,
      wallWidth: this.wallWidth
    });
  }
});
exports.create = Maze.create;
