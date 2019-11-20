const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

var PokemonPostSchema = new Schema({
    title: String,
    number: Number,
    type: String,
    foil: Boolean,
    rarity: String, 
    date: {type: Date , default: Date.now},
    description: String,
});


module.exports = mongoose.model('PokemonPost', PokemonPostSchema);   