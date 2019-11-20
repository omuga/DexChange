const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

var MTGPostSchema = new Schema({
    title: String,
    type: String,
    colour: String,
    rarity: String, 
    date: {type: Date , default: Date.now},
    description: String,
},{
    versionKey: false
});


module.exports = mongoose.model('MTGPost', MTGPostSchema);   