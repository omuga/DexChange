const express = require('express');
const router = express.Router();

const PokemonPost_controller = require('../controllers/PokemonPost.controller');

router.get('/',PokemonPost_controller.getAllPokemonCards);

router.get('/:id', PokemonPost_controller.card_details);

router.post('/',PokemonPost_controller.createNewPokemonCard);

router.put('/:id', PokemonPost_controller.updateCard);

module.exports = router;