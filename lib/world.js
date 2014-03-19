var Utils = require('./utils');
/*INSTANCE METHODS*/
var World = {};
World.fn = {};

World.fn.generateStartPoint = function(){
  return {x: 0, y: Math.random() * this.height};
};

World.fn.generateFinishPoint = function(){
  return {x: this.width, y: Math.random() * this.height};
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
