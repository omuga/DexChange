const PokemonPostModel = require('../models/PokemonPost.model');

exports.getAllPokemonCards = function(req,res){
    PokemonPostModel.find({},{}).then(pokemonposts => {
        res.send(pokemonposts);
    }).catch(err => console.error(err));
}

exports.createNewPokemonCard = function(req,res){
    var pokemonPost = new PokemonPost({
        title: req.body.title,
        number: req.body.number,
        type: req.body.type,
        foil: req.body.foil,
        rarity: req.body.rarity,
        date: req.body.date,
        description: req.body.description
    });

    pokemonPost.save(function(error){
        if(error){
            res.status(500);        
        } else{
            res.send("Carta Pokemon Creada Satisfactoriamente");
        }
    
})}

exports.card_details = function(req,res){
    PokemonPostModel.findById(req.params.id, function(err,pokemoncard){
        if (err) return next(err);
        res.send(pokemoncard);
    })
}

exports.updateCard = function(req,res){
    PokemonPostModel.findByIdAndUpdate(req.params.id, {$set: req.body},
        function(err,pokemoncard){
            if(err) return next(err);
            res.send('Post actualizado satisfactoriamente');
        });
};

exports.deleteCard = function(req,res){
    PokemonPostModel.findByIdAndDelete(req.params.id, function(err){
        if (err) return next(err);
        res.send('Post Borrado Satisfactoriamente');
    });
};
