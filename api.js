var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var materia = require('./controllers/materia_controllers');


materia.methods(['get', 'put', 'post', 'delete']);
materia.register(router, '/materia');

module.exports = router;