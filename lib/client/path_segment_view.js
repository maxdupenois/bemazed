var Utils = require('../utils.js'),
    $ = require('jquery');

var PathSegmentView = {};
PathSegmentView.fn = {};

PathSegmentView.fn.draw = function(g){
  var originalStrokeStyle = g.strokeStyle;
  var originalLineWidth = g.lineWidth;
  g.strokeStyle = "#000";
  g.beginPath();
  g.moveTo(this.pathSegment.start.x, this.pathSegment.start.y);
  g.lineTo(this.pathSegment.finish.x, this.pathSegment.finish.y);
  g.stroke();
  g.closePath();
  g.strokeStyle = originalStrokeStyle;
  g.lineWidth = originalLineWidth;
};

PathSegmentView.create = function(pathSegment){
  var pathSegmentView = {};
  pathSegmentView.pathSegment = pathSegment;
  Utils.addInstanceFunctions(PathSegmentView.fn, pathSegmentView);
  return pathSegmentView;
};

exports.create = PathSegmentView.create;
