var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
    username: {type:String, lowercase: true, unique: true, required: [true, "el nombre de usuario no puede ser vacia"], index: true},
    email: {type:String, lowercase: true, unique: true,  required: [true, "el email debe ser valido"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    image: String,
    password: String,
},{timestamps: true});

UserSchema.plugin(uniqueValidator, {mensaje: 'Ya está en uso'});


mongoose.model('User', UserSchema);