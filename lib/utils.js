var Utils = {};
Utils.addInstanceFunctions = function(instanceFunctions, instance){
  for(var key in instanceFunctions){
    if(typeof(instanceFunctions[key]) == 'function'){
      instance[key] = instanceFunctions[key];
    }
  }
};
exports.addInstanceFunctions = Utils.addInstanceFunctions;

Utils.array = function(length, fill){
  if(!fill) var fill = 0;
  return (new Array(length + 1).join(fill).split(''));
};
exports.array = Utils.array;

exports.randNormal = function(){
  //Using box-muller
  var x = 0, y = 0, radius, c;
  do{
    x = Math.random()*2 - 1;
    y = Math.random()*2 - 1;
    radius = x*x + y*y;
  }while(radius == 0 || radius > 1);

  c = Math.sqrt(-2 * Math.log(radius)/radius);

  return x*c;
};

exports.simpleRandNormal = function(){
  //Simple approximation
  var sum, absMax = 3;
  return Utils.array(absMax).reduce(function(sum, _){
    //Random number between 1 and -1
    return sum + (Math.random() * 2) - 1;
  },0);
};
