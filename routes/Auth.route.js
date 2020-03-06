const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config.js');

const UserController = require('../controllers/User.controller');

router.post('/authenticate', UserController.authenticate);
router.post('/register', UserController.registerUsuario);

module.exports = router;
