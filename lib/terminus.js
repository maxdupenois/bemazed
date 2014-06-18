var Utils = require('./utils'),
    Terminal = require('./terminal'),
    Point = require('./point');

var Terminus = {};
Terminus.fn = {};

var randomValence = function(){
  return Utils.randInt(2, 4);
};

var generateTerminals = function(){
  this.terminals = [];
  for(var i = 0; i < this.valence; i++){
    this.terminals.push(Terminal.create(this));
  }
};

Terminus.create = function(point, valence){
  var terminus = {
    location: point
  };
  if(!valence) var valence = randomValence.call(terminus);
  terminus.valence = valence;
  generateTerminals.call(terminus);
  Utils.addInstanceFunctions(Terminus.fn, terminus);
  return terminus;
};

exports.create = Terminus.create;
