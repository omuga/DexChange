const UserModel = require('../models/User.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

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

exports.getUserDetails = function(req,res){
  UserModel.findById(req.params.id, function(err, user){
      if (err) return next(err);
      res.send(user);   
  });
}



exports.authenticate = function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    UserModel.findOne({ email: email })
      .exec(function (err, user) {
        if (err) {
            res.status(500);
        } else if (!user) {
          return res.status(400).json({
            mensaje: "El Usuario no existe"
        });
      }
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            const payload = {
              userId: user.id,
              userName: user.username,
            };
            const token = jwt.sign(payload,config.secret, {
              expiresIn:1440,
            });
            res.json({
              mensaje: 'Autenticacion correcta',
              token: token,
              userId: user.id,
            });
          } else {
            res.status(400).json({mensaje:'Credenciales Incorrectas'});
          }
        })
      });
}

exports.deleteUser = function(req,res){
  UserModel.findByIdAndDelete(req.params.id, function(err){
      if (err) return next(err);
      res.send('User Borrado Satisfactoriamente');
  });
};