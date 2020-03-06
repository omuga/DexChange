const express = require('express');
const router = express.Router();

const MTGPost_controller = require('../controllers/MTGPost.controller');

router.get('/', MTGPost_controller.get_all_mtgcards);

router.get('/users/:idUser', MTGPost_controller.findCardByUser);

router.post('/', MTGPost_controller.create_mtgcard);

router.get('/:id', MTGPost_controller.card_details);

router.put('/:id', MTGPost_controller.updateCard);

router.delete('/:id', MTGPost_controller.deleteCard);


module.exports = router;