var Utils = {};
Utils.addInstanceFunctions = function(instanceFunctions, instance){
  for(var key in instanceFunctions){
    if(typeof(instanceFunctions[key]) == 'function'){
      instance[key] = instanceFunctions[key];
    }
  }
};
exports.addInstanceFunctions = Utils.addInstanceFunctions;

Utils.isPresent = function(obj){
  return typeof(obj) != 'undefined' && obj != null;
};
exports.isPresent = Utils.isPresent;

Utils.array = function(length, fill){
  if(!fill) var fill = 0;
  return (new Array(length + 1).join(fill).split(''));
};
exports.array = Utils.array;

Utils.removeElement = function(element, array){
  var index = array.indexOf(element);
  return array.splice(index, 1);
};

Utils.shuffle = function(array){
  var index, element,
    newArray = [], 
    array = array.slice(0);
  while(array.length > 0){
    index = Utils.randInt(array.length - 1);
    element = array.splice(index, 1)[0];
    newArray.push(element);
  }
  return newArray;
};
exports.shuffle = Utils.shuffle;

Utils.randInt = function(){
  var max, min;
  if(arguments.length == 0){
    return (Math.random() >= 0.5 ? 1 : 0);
  }else if(arguments.length == 1){
    max = arguments[0];
    return Math.round((Math.random() * max));
  }else{
    min = arguments[0];
    max = arguments[1];
    return Math.round((Math.random() * (max - min)) + min);
  }
};
exports.randInt = Utils.randInt;

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

