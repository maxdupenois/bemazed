var Maze = require('../lib/maze'),
    expect = require('chai').expect;

describe("Maze", function(){
  var width, height, subject;
  before(function(){
    width = 200;
    height = 200;
  });

  beforeEach(function(){
    subject = Maze.create(width, height);
  });


  describe("::create", function(){
    it("should generate a path", function(){
      var maze = Maze.create(width, height);
      expect(maze.path).to.be.ok;
    });
  });

  describe("#mazify", function(){
    it("should return itself, so that it can be called multiple times", function(){
      expect(subject.mazify(1)).itself.to.respondTo('mazify');
    });

    it("should screw up the path", function(){
      subject.mazify(5);
      expect(subject.path.pathSegments.length).to.be.above(1);
    });
  });
});
