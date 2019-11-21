const YGOPostModel = require("../models/YGOPost.model");

exports.getAllYGOCards = function(req,res) {
    YGOPostModel.find({},{}).then(mtgposts =>{
        res.send(mtgposts);
    }).catch(err => console.error(err));
}

exports.createCard = function(req,res){
    var ygopost = new YGOPostModel({
        title: req.body.title,
        type: req.body.type,
        foil: req.body.foil,
        rarity: req.body.rarity,
        date: req.body.date,
        description: req.body.description,
    });

    ygopost.save(function(error){
        if (error){
            res.status(500);
        } else{
            res.send('Post de carta YGO creada satisfactoriamente');
        }
    });
};

exports.card_details = function(req,res){
    YGOPostModel.findById(req.params.id, function(err,ygocard){
        if (err) return next(err);
        res.send(ygocard);
    });
};

exports.updateCard = function(req,res){
    YGOPostModel.findByIdAndUpdate(req.params.id, {$set: req.body},
        function(err,ygocard){
            if(err) return next(err);
            res.send('Post actualizado satisfactoriamente');
        });
};

exports.deleteCard = function(req,res){
    YGOPostModel.findByIdAndDelete(req.params.id, function(err){
        if (err) return next(err);
        res.send('Post Borrado Satisfactoriamente');
    });
};