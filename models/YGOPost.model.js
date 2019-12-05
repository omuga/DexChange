const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

var YGOPostSchema = new Schema({
    title: String,
    type: String,
    foil: Boolean,
    rarity: String, 
    date: {type: Date , default: Date.now},
    description: String,
},{
    versionKey: false,
});


module.exports = mongoose.model('YGOPost', YGOPostSchema);   