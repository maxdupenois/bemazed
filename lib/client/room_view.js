var Utils = require('../utils.js'),
    View = require('./view.js'),
    Room = require('../room.js'),
    WallView = require('./wall_view.js'),
    $ = require('jquery');

var RoomView = View.extend({
  initialize: function(){
    this.room = this.object;
  },

  drawFloor: function(g){
    g.fillStyle = '#337ab7';
    g.fillRect(
      this.room.topLeft().x, this.room.topLeft().y,
      this.room.width, this.room.height
      );
  },

  draw: function(g){
    this.drawFloor(g);
    this.room.walls().forEach(function(wall, _){
      new WallView(wall).draw(g);
    });
  }
});
module.exports = RoomView;
