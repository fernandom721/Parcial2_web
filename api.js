var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var materia = require('./Schemas/materia_Schema');
materia.methods(['get', 'put', 'post', 'delete']);
materia.register(router, '/register');

module.exports = router;