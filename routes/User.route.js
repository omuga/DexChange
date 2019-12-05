const express = require('express');
const router = express.Router();

const UserController = require('../controllers/User.controller');


router.get('/', UserController.getUsers);
router.post('/',UserController.registerUsuario);
router.post('/login', UserController.loginUser);

module.exports = router;
