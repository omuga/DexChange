const express = require('express');
const router = express.Router();

const UserController = require('../controllers/User.controller');


router.get('/', UserController.getUsers);
router.post('/',UserController.loginUsuario);

module.exports = router;
