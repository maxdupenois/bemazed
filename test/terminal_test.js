var Terminal = require('../lib/terminal'),
    Terminus = require('../lib/terminal'),
    Point = require('../lib/point'),
    expect = require('chai').expect;

describe("Terminal", function(){
  var terminus;
  before(function(){terminus = Terminus.create(Point.create(10, 10));});

  describe("::create", function(){
    it("should set the passed terminus to be its terminus", function(){
      var terminal = Terminal.create(terminus);
      expect(terminal.terminus).to.eq(terminus);
    });
  });

});
