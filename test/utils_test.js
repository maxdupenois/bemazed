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

//  it("should produce a 0, 1 and 2", function(){
//    var val, seen0 = false, seen1 = false, seen2 = false;
//    for(var i= 0; i < 100; i++){
//      val = Utils.randInt(2)
//      seen0 = (seen0 || val == 0);
//      seen1 = (seen1 || val == 1);
//      seen2 = (seen2 || val == 2);
//    }
//    expect(seen0).to.be.true;
//    expect(seen1).to.be.true;
//    expect(seen2).to.be.true;
//  });

  describe("#shuffle", function(){
    it("should shuffle the passed array", function(){
      var arr = [ 'a', 'b', 'c', 'd' ];
      var shuffled = Utils.shuffle(arr);
      expect(arr.length).to.eq(shuffled.length);
      expect(arr).to.not.eq(shuffled);
    });
  });

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

  describe("#randomInt", function(){
    describe("with no arguments", function(){
      if("should return 0 or 1", function(){
        var random = Utils.array(100).map(function(_){ return Utils.randInt();})
        var has0 = false, has1 = false, hasOther = false;
        random.forEach(function(num){
          has0 = has0 || num == 0;
          has1 = has1 || num == 1;
          hasOther = hasOther || (num != 0 && num != 1);
        });
        expect(has0).to.be.true;
        expect(has1).to.be.true;
        expect(hasOther).to.be.false;
      });
    });

    describe("with one argument", function(){
      it("should return a number between 0 and the given number inclusive", function(){
        var random = Utils.array(100).map(function(_){ return Utils.randInt(5);})
        var lowerThan0 = false, higherThan5 = false;
        random.forEach(function(num){
          lowerThan0 = lowerThan0 || num < 0;
          higherThan5 = higherThan5 || num > 5;
        });
        expect(lowerThan0).to.be.false;
        expect(higherThan5).to.be.false;
      });
    });

    describe("with two arguments", function(){
      it("should return a number between the first num and the second number inclusive", function(){
        var random = Utils.array(100).map(function(_){ return Utils.randInt(5, 10);})
        var lowerThan5 = false, higherThan10 = false;
        random.forEach(function(num){
          lowerThan5 = lowerThan5 || num < 5;
          higherThan10 = higherThan10 || num > 10;
        });
        expect(lowerThan5).to.be.false;
        expect(higherThan10).to.be.false;
      });
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

