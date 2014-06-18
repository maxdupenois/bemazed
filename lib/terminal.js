var Utils = require('./utils'),
    Gate = require('./gate'),
    Point = require('./point');

var Terminal = {};
Terminal.fn = {};

var randomValence = function(){
  return Utils.randInt(2, 4);
};

var generateGates = function(){
  this.gates = [];
  for(var i = 0; i < this.valence; i++){
    this.gates.push(Gate.create(this));
  }
};

Terminal.create = function(point, valence){
  var terminal = {
    location: point
  };
  if(!valence) var valence = randomValence.call(terminal);
  terminal.valence = valence;
  generateGates.call(terminal);
  Utils.addInstanceFunctions(Terminal.fn, terminal);
  return terminal;
};

exports.create = Terminal.create;
