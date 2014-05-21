var Utils = require('../lib/utils'),
    expect = require('chai').expect;

describe("Utils", function(){

  describe("#array", function(){
    var subject, length;
    before(function(){
      length = 10;
      fill = 'a';
      subject = Utils.array(length, fill);
    });

    it("should fill with the given value", function(){
      subject.forEach(function(element){
        expect(element).to.equal(fill);
      });
    });

    it("should create an array of the given length", function(){
      expect(subject.length).to.equal(length);
    });
  });

  var sum = function(arrOfNums){
    return arrOfNums.reduce(function(sum, num){ return sum + num;}, 0);
  };

  var mean = function(arrOfNums){
    return sum(arrOfNums) / parseFloat(arrOfNums.length);
  };

  var variance = function(arrOfNums){
    var meanOfNums = mean(arrOfNums);
    return arrOfNums.reduce(function(variance, num){
      return variance + Math.pow((num - meanOfNums), 2);
    }, 0) / arrOfNums.length;
  };

  var sd = function(arrOfNums){
    return Math.sqrt(variance(arrOfNums));
  };

  describe("#randNormal", function(){
    var randomNumbers, tolerance;
    before(function(){
      tolerance = 0.1;
      randomNumbers = Utils.array(1000).map(function(_){
        return Utils.randNormal();
      });
    });

    it("should produce random numbers with a mean of 0", function(){
      expect(mean(randomNumbers)).to.be.closeTo(0, tolerance);
    });

    it("should have a standard deviation of 1", function(){
      expect(sd(randomNumbers)).to.be.closeTo(1, tolerance);
    });

  });

  describe("#simpleRandNormal", function(){
    var randomNumbers, tolerance;
    before(function(){
      tolerance = 0.25;
      randomNumbers = Utils.array(1000).map(function(_){
        return Utils.simpleRandNormal();
      });
    });

    it("should produce random numbers with a mean of 0", function(){
      expect(mean(randomNumbers)).to.be.closeTo(0, tolerance);
    });

    it("should have a standard deviation of 1", function(){
      expect(sd(randomNumbers)).to.be.closeTo(1, tolerance);
    });

  });
});

