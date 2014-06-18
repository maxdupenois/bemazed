var $ = require('jquery'),
    Maze = require('../maze.js'),
    MazeView = require('./maze_view.js'),
    Canvas = require('./canvas');

$(function(){
  var canvas = Canvas.create('#canvas-container');
  canvas.attach();
  var maze = Maze.create(500, 500);
  maze.mazify(5);
  var mazeView = MazeView.create(maze);
  mazeView.draw(canvas.graphics());
});
