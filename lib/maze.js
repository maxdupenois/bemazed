var Utils = require('./utils'),
    PathSegment = require('./path_segment'),
    Path = require('./path'),
    Point = require('./point');

var Maze = {};
Maze.fn = {};

Maze.fn.mazify = function(numberOfActions){
  if(!numberOfActions) var numberOfActions = 10;
  for(var i = 0; i < numberOfActions; i++){
    this.path.perturb().branch();
  }
  return this;
};

var generateEndPoints = function(){
  //Imagine a grid overlaying the
  //maze of 9 grids, the start must appear at least 3
  //grids away from the finish
  // 0,0 0,1 0,2
  // 1,0 1,1 1,2
  // 2,0 2,1 2,2

  var x, y, startCell, finishCell, manhattanDistance;
  do{
    x = Utils.randInt(2);
    y = Utils.randInt(2);
  }while(x == 1 || y == 1);
  startCell = Point.create(x, y);

  do{
    x = Utils.randInt(2);
    y = Utils.randInt(2);
    finishCell = Point.create(x, y);
    manhattanDistance = startCell.manhattanDistance(finishCell);
  }while(manhattanDistance < 3);

  this.start = getPointFromCell.call(this, startCell);
  this.finish = getPointFromCell.call(this, finishCell);
};

var getPointFromCell = function(cell){
  var minX, maxX, minY, maxY, cellWidth, cellHeight;
  cellWidth = this.width / 3.0;
  cellHeight = this.height / 3.0;

  minX = cell.x * cellWidth;
  maxX = minX + cellWidth;
  minY = cell.y * cellHeight;
  maxY = minY + cellHeight;

  return Point.create(
    Utils.randInt(Math.floor(minX), Math.ceil(maxX)),
    Utils.randInt(Math.floor(minY), Math.ceil(maxY))
  );
};

Maze.create = function(width, height){
  var maze = {
    width: width,
    height: height
  };
  generateEndPoints.call(maze);
  maze.path = Path.create(maze.start, maze.finish);
  Utils.addInstanceFunctions(Maze.fn, maze);
  return maze;
};
exports.create = Maze.create;
