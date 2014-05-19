var Utils = require('./utils'),
    Point = require('./point');
/*INSTANCE METHODS*/
var World = {};
World.fn = {};

World.fn.generateStartPoint = function(){
  return Point.create(0, Math.random() * this.height);
};

World.fn.generateFinishPoint = function(){
  return Point.create(this.width, Math.random() * this.height);
};

exports.create = function(width, height){
  var world = {};
  Utils.addInstanceFunctions(World.fn, world);
  world.width = width;
  world.height = height;
  world.start = world.generateStartPoint();
  world.finish = world.generateFinishPoint();
  return world;
};
