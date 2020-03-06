const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

var PokemonPostSchema = new Schema({
    title: String,
    type: String,
    foil: Boolean,
    rarity: String, 
    date: {type: Date , default: Date.now},
    description: String,
},{
    versionKey: false,
});


module.exports = mongoose.model('PokemonPost', PokemonPostSchema); 