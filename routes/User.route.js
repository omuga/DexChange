const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config.js');

const UserController = require('../controllers/User.controller');

router.use((req,res,next) => {
    const token = req.headers['access-token'];
    if (token){
        jwt.verify(token, config.secret,(err, decoded) =>{
            if (err){
                return res.json({mensaje: ' Token Inválido'});
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(401).json({mensaje:'Token No Proveido'});    
    }
});


router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserDetails);
router.delete('/:id', UserController.deleteUser);


module.exports = router;