const express = require('express');
const router = express.Router();

const YGOPost_controller = require('../controllers/YGOPost.controller');

router.get('/',YGOPost_controller.getAllYGOCards);

router.get('/:id', YGOPost_controller.card_details);

router.post('/',YGOPost_controller.createCard);

router.put('/:id', YGOPost_controller.updateCard);

module.exports = router;