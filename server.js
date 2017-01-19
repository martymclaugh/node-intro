
// dependencies
var express = require('express');
var app = express();
var port = 8080;

// start server

app.listen(port, function(){
  console.log('app started')
})

// route

app.get('/', function(req, res){
  res.send('hello! world  asdfasdf')
})

app.get('/about', function(req, res){
  res.send('about page')
})

app.get('/contact', function(req, res){
  res.send('about page')
})
