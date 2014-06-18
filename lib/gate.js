var Utils = require('./utils');

var Gate = {};
Gate.fn = {};

Gate.fn.hasPath = function(){
  return Utils.isPresent(this.path);
};

Gate.create = function(terminal){
  var gate = {
    terminal: terminal
  };
  Utils.addInstanceFunctions(Gate.fn, gate);
  return gate;
};

exports.create = Gate.create;
