var Path = require('../lib/path'),
    PathSegment = require('../lib/path_segment'),
    Point = require('../lib/point'),
    Utils = require('../lib/utils'),
    expect = require('chai').expect;

describe("Path", function(){
  var start, finish, subject;
  beforeEach(function(){
    start = Point.create(0, 0);
    finish = Point.create(20, 20);
    subject = Path.create(start, finish);
  });

  describe("::create", function(){
    it("should have the correct start and finish", function(){
      var path = Path.create(start, finish);
      expect(path.start).to.equal(start);
      expect(path.finish).to.equal(finish);
    });

    it("should initialize the path segments with a first one", function(){
      var path = Path.create(start, finish);
      expect(path.pathSegments.length).to.equal(1);
      var pathSegment = path.pathSegments[0];
      expect(pathSegment.start).to.equal(start);
      expect(pathSegment.finish).to.equal(finish);
    });
  });

  describe("#branch", function(){
    describe("when there is only one path", function(){
      it("should not create any branches", function(){
        var pathCount = subject.pathSegments.length;
        subject.branch();
        expect(subject.pathSegments.length).to.equal(pathCount);
      });
    });

    it("should return itself so that it can run repeatedly", function(){
      expect(subject.branch()).itself.to.respondTo('branch');
    });

    describe("when there is two or more paths", function(){
      beforeEach(function(){
        subject.perturb();
      });

      it("should add a random branch", function(){
        var pathCount = subject.pathSegments.length;
        subject.branch({branchChance: 1});
        expect(subject.pathSegments.length).to.equal(pathCount + 1);
      });

      it("should be able to be run multiple times", function(){
        var pathCount = subject.pathSegments.length;
        Utils.array(10).reduce(function(path, _){
          return path.branch({branchChance: 0.8});
        }, subject);
        expect(subject.pathSegments.length).to.be.above(pathCount);
      });

    });
  });

  describe("#perturb", function(){
    it("should increase the number of path segments", function(){
      var before = subject.pathSegments.length;
      subject.perturb();
      var after = subject.pathSegments.length;
      expect(after).to.be.above(before);
    });

    it("should return itself so that it can run repeatedly", function(){
      expect(subject.perturb()).itself.to.respondTo('perturb');
    });

    it("should be able to be run multiple times", function(){
      Utils.array(10).reduce(function(path, _){
        return path.perturb();
      }, subject);
      expect(subject.pathSegments.length).to.equal(Math.pow(2, 10));
    });
  });

});
