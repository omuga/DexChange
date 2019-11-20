const MTGPost = require('../models/MTGPost.model');


exports.get_all_mtgcards = function(req,res) {
    MTGPost.find({},{}).then(mtgposts =>{
        res.send(mtgposts);
    }).catch(err => console.error(err));
}

exports.create_mtgcard = function(req,res){
    var mtgpost = new MTGPost({
        title: req.body.title,
        type: req.body.type,
        colour: req.body.colour,
        rarity: req.body.rarity,
        date: req.body.date,
        description: req.body.description,
    });

    mtgpost.save(function(error){
        if (error){
            res.status(500);
        } else{
            res.send('Post de carta MTG creado satisfactoriamente');
        }
    });
};

exports.card_details = function(req,res){
    MTGPost.findById(req.params.id, function(err,mtgcard){
        if (err) return next(err);
        res.send(mtgcard);
    });
};

exports.updateCard = function(req,res){
    MTGPost.findByIdAndUpdate(req.params.id, {$set: req.body},
        function(err,mtgcard){
            if(err) return next(err);
            res.send('Post actualizado satisfactoriamente');
        });
};

exports.deleteCard = function(req,res){
    MTGPost.findByIdAndDelete(req.params.id, function(err){
        if (err) return next(err);
        res.send('Post Borrado Satisfactoriamente');
    });
};