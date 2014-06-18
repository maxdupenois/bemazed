var Utils = require('../utils.js'),
    $ = require('jquery');

var Canvas = {};
Canvas.fn = {};

Canvas.fn.attach = function(){
  this.$container.empty();
  this.$container.append(this.$canvas);
};

Canvas.fn.graphics = function(){
  return this.$canvas[0].getContext("2d");
};

Canvas.create = function(containerSelector){
  var canvas = {};
  canvas.$container = $(containerSelector);
  canvas.$canvas = $('<canvas/>').attr({
    width: 500,
    height: 500
  });
  Utils.addInstanceFunctions(Canvas.fn, canvas);
  return canvas;
};

exports.create = Canvas.create;
