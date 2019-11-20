const express = require('express');
const bodyParser = require('body-parser');
let mongoose = require('mongoose');


const MTGPost = require('./routes/MTGPost.route');
const PokemonPost = require('./routes/PokemonPost.route');
//Inicializar el Servidor 
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Uso de Rutas para Cartas 

app.use('/mtgcards', MTGPost); 
app.use('/pokemoncards',PokemonPost);

mongoose.connect('mongodb://localhost/dexchange', { useNewUrlParser: true,useUnifiedTopology: true },function (err) {
   if (err){ 
       throw err;
    }
   else{
    console.log('Conexion satisfactoria con Base de Datos');
    }
});

app.listen(3000,() =>{
    console.log('Servidor inicializado en Puerto 3000');
});

app.get('/', function(req,res){
    res.send('Saludos desde express');
})