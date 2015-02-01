var Utils = require('../utils.js'),
    Wall = require('../wall.js'),
    View = require('./view.js'),
    $ = require('jquery');

var WallView = View.extend({
  initialize: function(){
    this.wall = this.object;
  },

  draw: function(g){
    g.strokeStyle = "#8b8b8b";
    g.lineWidth = this.wall.width;
    g.beginPath();
    g.moveTo(this.wall.start.x, this.wall.start.y);
    g.lineTo(this.wall.finish.x, this.wall.finish.y);
    g.stroke();
  },
});
module.exports = WallView;
