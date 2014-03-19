exports.addInstanceFunctions = function(instanceFunctions, instance){
  for(var key in instanceFunctions){
    if(typeof(instanceFunctions[key]) == 'function'){
      instance[key] = instanceFunctions[key];
    }
  }
};
