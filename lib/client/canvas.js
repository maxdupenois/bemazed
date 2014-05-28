var Utils = require('../utils.js'),
    $ = require('jquery');

var Canvas = {};
Canvas.fn = {};

Canvas.create = function(containerSelector){
  console.log($(containerSelector));
};

exports.create = Canvas.create;
