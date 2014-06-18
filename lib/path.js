var Utils = require('./utils'),
    PathSegment = require('./path_segment'),
    Point = require('./point');

var Path = {};
Path.fn = {};
Path.branchRange = 50;
Path.branchChance = 0.4;

Path.fn.branch = function(opts){
  if(!opts) var opts = {};
  opts.branchRange = opts.branchRange || Path.branchRange;
  opts.branchChance = opts.branchChance || Path.branchChance;

  var newSegments = [];
  var me = this;
  this.pathSegments.forEach(function(path, index){
    var pathFinish, branch;
    newSegments.push(path);
    //Skip last
    if(index == me.pathSegments.length - 1) return;
    if(Math.random() > opts.branchChance) return;

    pathFinish = Point.create(
      path.finish.x + Utils.randNormal() * opts.branchRange,
      path.finish.y + Utils.randNormal() * opts.branchRange
    );
    branch = PathSegment.create(path.finish, pathFinish);
    newSegments.push(branch);
  });
  this.pathSegments = newSegments;
  return this;
};

Path.fn.perturb = function(){
  var newSegments = [];
  this.pathSegments.forEach(function(pathSegment){
    var newPoint = pathSegment.midpoint().perturb(20);
    var split = pathSegment.split(newPoint);
    newSegments.push(split[0]);
    newSegments.push(split[1]);
  });
  this.pathSegments = newSegments;
  return this;
};

Path.create = function(start, finish){
  var path = {};
  path.start = start;
  path.finish = finish;
  path.pathSegments = [PathSegment.create(start, finish)];
  Utils.addInstanceFunctions(Path.fn, path);
  return path;
};
exports.create = Path.create;
