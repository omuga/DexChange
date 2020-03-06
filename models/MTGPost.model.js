const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

var MTGPostSchema = new Schema({
    title: String,
    idUser: String,
    type: String,
    colour: String,
    rarity: String, 
    date: {type: Date , default: Date.now},
    description: String,
    imageUrl: String
},{
    versionKey: false
});


module.exports = mongoose.model('MTGPost', MTGPostSchema);   