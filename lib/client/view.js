var Utils = require('../utils.js'),
    Backbone = require('backbone'),
    $ = require('jquery');
var View = Backbone.Model.extend({
  constructor: function(object){
    this.object = object;
    Backbone.Model.apply(this, arguments);
  },

  drawView: function(g){
    var originalStrokeStyle = g.strokeStyle;
    var originalLineWidth = g.lineWidth;
    var originalFillStyle = g.fillStyle;
    this.draw(g);
    g.strokeStyle = originalStrokeStyle;
    g.lineWidth = originalLineWidth;
    g.fillStyle = originalFillStyle;
  }
});
module.exports = View;
