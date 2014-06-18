var Utils = require('./utils');

var Terminal = {};
Terminal.fn = {};

Terminal.fn.hasPath = function(){
  return Utils.isPresent(this.path);
};

Terminal.create = function(terminus){
  var terminal = {
    terminus: terminus
  };
  Utils.addInstanceFunctions(Terminal.fn, terminal);
  return terminal;
};

exports.create = Terminal.create;
