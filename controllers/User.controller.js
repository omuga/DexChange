const UserModel = require('../models/User.model');
const bcrypt = require('bcryptjs');

exports.registerUsuario = function(req,res) {
    var userModel = new UserModel({
        username : req.body.username,
        email : req.body.email,
        confianza : 0,
        password : req.body.password
    });

    userModel.save(function(error){
        if (error){
            res.status(500);
        } else{
            res.send('Usuario creado satisfactoriamente');
        }
    });
}

exports.getUsers = function(req,res) {
    UserModel.find({},{}).then(users =>{
        res.send(users);
    }).catch(err => console.error(err));
}

exports.loginUser = function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    UserModel.findOne({ email: email })
      .exec(function (err, user) {
        if (err) {
            res.status(500);
        } else if (!user) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            res.send('Login Satisfactorio');
          } else {
            res.send('Credenciales Incorrectos');
          }
        })
      });
}