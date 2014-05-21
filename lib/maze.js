var Utils = require('./utils'),
    PathSegment = require('./path_segment'),
    Path = require('./path'),
    Point = require('./point');

var Maze = {};
Maze.fn = {};

Maze.create = function(){
  var maze = {};
  Utils.addInstanceFunctions(Maze.fn, maze);
  return maze;
};
