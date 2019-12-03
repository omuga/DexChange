var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
    username: {type:String, lowercase: true, unique: true, required: [true, "el nombre de usuario no puede ser vacia"], index: true},
    email: {type:String, lowercase: true, unique: true,  required: [true, "el email debe ser valido"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    password: String,
    confianza: Number,
},{timestamps: true});

UserSchema.plugin(uniqueValidator, {mensaje: 'Ya está en uso'});


module.exports  = mongoose.model('User', UserSchema);