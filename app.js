var default_port = 5000;
var express = require('express')
  , url = require('url')
  , fs = require("fs")
  , app = express()
  , server = require('http').createServer(app)
  , io = require('engine.io').attach(server)
  , logfmt = require('logfmt')
  ;


app.configure(function(){
});

app.use(logfmt.requestLogger());

app.use(function(req, res, next){  
  // DEBUG CODE GOES HERE
  // console.log('%s %s', req.method, req.url);
  next();
});


app.get('/', function(req, res, next){
  res.send('hello there');
});


server.listen(process.env.PORT || default_port, function(){
  console.log('\033[90mlistening on localhost:'+default_port+' \033[39m');
});

