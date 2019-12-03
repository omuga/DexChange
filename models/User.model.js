var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcryptjs');



var UserSchema = new mongoose.Schema({
    username: {type:String, lowercase: true, unique: true, required: [true, "el nombre de usuario no puede ser vacia"], index: true},
    email: {type:String, lowercase: true, unique: true,  required: [true, "el email debe ser valido"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    password: {type:String, required: true},
    confianza: Number,
},{timestamps: true});

UserSchema.pre('save', function(next){
    var user = this;
    bcrypt.hash(user.password,  10, function(err, hash){
        if (err){
            return next(err);
        } else{
            user.password = hash;
            next();
        }
    });
});

UserSchema.statics.authenticate = function (email, password, callback) {
    User.findOne({ email: email })
      .exec(function (err, user) {
        if (err) {
          return callback(err)
        } else if (!user) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })
      });
  }

UserSchema.plugin(uniqueValidator, {mensaje: 'Ya está en uso'});


module.exports  = mongoose.model('User', UserSchema);