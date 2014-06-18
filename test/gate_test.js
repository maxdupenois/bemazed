var Gate = require('../lib/gate'),
    Terminal = require('../lib/terminal'),
    Point = require('../lib/point'),
    expect = require('chai').expect;

describe("Gate", function(){
  var terminal;
  before(function(){terminal = Terminal.create(Point.create(10, 10));});

  describe("::create", function(){
    it("should set the passed terminal to be its terminal", function(){
      var gate = Gate.create(terminal);
      expect(gate.terminal).to.eq(terminal);
    });
  });

});
