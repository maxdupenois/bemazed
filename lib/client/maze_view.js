var Utils = require('../utils.js'),
    PathView = require('./path_view.js'),
    $ = require('jquery');

var MazeView = {};
MazeView.fn = {};

MazeView.fn.draw = function(g){
  PathView.create(this.maze.path).draw(g);
};

MazeView.create = function(maze){
  var mazeView = {};
  mazeView.maze = maze;
  Utils.addInstanceFunctions(MazeView.fn, mazeView);
  return mazeView;
};

exports.create = MazeView.create;
