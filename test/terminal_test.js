var Terminal = require('../lib/terminal'),
    Point = require('../lib/point'),
    expect = require('chai').expect;

describe("Terminal", function(){
  var point;
  before(function(){point = Point.create(10, 10);});

  describe("::create", function(){
    it("should set the location as the passed point", function(){
      var terminal = Terminal.create(point);
      expect(terminal.location).to.equal(point);
    });

    it("should give the terminal a random valence if none is passed", function(){
      var terminal = Terminal.create(point);
      expect(terminal.valence).to.be.within(2, 4);
    });

    it("should generate as many gates as its valence", function(){
      var terminal = Terminal.create(point);
      expect(terminal.gates.length).to.eq(terminal.valence);
    });
  });

});
