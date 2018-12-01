var erro = require('http-errors');
var mongoose = require('mongoose');

var materiaSchema = new mongoose.Schema({
    Nombre: string,
    uv: int,
    descripcio: string
});

