const UserModel = require('../models/User.model');

exports.loginUsuario = function(req,res) {
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