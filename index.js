const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
let mongoose = require('mongoose');




const MTGPost = require('./routes/MTGPost.route');
const PokemonPost = require('./routes/PokemonPost.route');
const User = require("./routes/User.route");
//Inicializar el Servidor 
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
    secret: "DexChange",
    resave: true,
    saveUninitialized: false
}))

// Uso de Rutas para Cartas 
app.use('/users', User);
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