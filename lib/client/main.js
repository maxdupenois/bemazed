var $ = require('jquery'),
    Room = require('../room.js'),
    Point = require('../point.js'),
    Backbone = require('backbone'),
    RoomView = require('./room_view.js'),
    Canvas = require('./canvas');

$(function(){
  var canvas = Canvas.create('#canvas-container');
  canvas.attach();
  var room = new Room({
    centre: new Point(100, 100),
    width: 50,
    height: 50,
    wallWidth: 5
  });
  var roomView = new RoomView(room);
  roomView.drawView(canvas.graphics());
});
