var World = require('../lib/world'),
    expect = require('chai').expect;


describe("World", function(){
  describe("::create", function(){
    var world;
    before(function(){
      world = World.create(100, 200);
    });

    it("should return an object that has a height and width", function(){
      expect(world.width).to.equal(100);
      expect(world.height).to.equal(200);
    });

    it("Should have a start and finish point", function(){
      expect(world.start).to.have.property('x').that.equals(0);
      expect(world.start).to.have.property('y').that.is.at.most(world.height);
      expect(world.start).to.have.property('y').that.is.at.least(0);

      expect(world.finish).to.have.property('x').that.equals(world.width);
      expect(world.finish).to.have.property('y').that.is.at.most(world.height);
      expect(world.finish).to.have.property('y').that.is.at.least(0);
    });
  });
});
