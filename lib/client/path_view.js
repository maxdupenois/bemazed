var Utils = require('../utils.js'),
    PathSegmentView = require('./path_segment_view.js'),
    $ = require('jquery');

var PathView = {};
PathView.fn = {};

PathView.fn.draw = function(g){
  this.path.pathSegments.forEach(function(pathSegment, index){
    PathSegmentView.create(pathSegment).draw(g);
  });
};

PathView.create = function(path){
  var pathView = {};
  pathView.path = path;
  Utils.addInstanceFunctions(PathView.fn, pathView);
  return pathView;
};

exports.create = PathView.create;
