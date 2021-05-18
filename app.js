var express = require('express');
var app = express();
var db = require('./db');
global.__root   = __dirname + '/'; 

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

var UserController = require(__root + 'home/HomeController');
app.use('/api/home', UserController);

var AuthController = require(__root + 'experiences/ExperiencesController');
app.use('/api/experiences', AuthController);

module.exports = app;