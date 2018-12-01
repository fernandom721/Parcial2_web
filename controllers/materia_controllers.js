var restful = require('node-restful');
var mongoose = restful.mongoose;

var materiaSchema = new mongoose.Schema({
    Nombre:String,
    uv:String,
    descripcio:String
});

materia.Schema.pre('save', function(next){
    next();
});


module.exports = restful.model('materia', materiaSchema);
