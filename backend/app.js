// Importation d'Express
const express = require('express');
// Importation de Morgan (logger HTTP)
const morgan = require('morgan');
// Importation de Mongoose (interface avec la base de données MongoDB)
const mongoose = require('mongoose');
// Importation dotenv pour les variables d'environnement
const dotenv = require('dotenv');
dotenv.config();

// Création de l'application Express
const app = express();

// Connexion de l'app avec la base de données MongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASS}@${process.env.CLUSTER_NAME}.mongodb.net/?retryWrites=true&w=majority`,
{ useNewUrlParser: true,
useUnifiedTopology: true})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

// Log des requests et des responses
app.use(morgan('dev'));

// Accès au corps de la requête
app.use(express.json());

// Gestion des erreurs de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Middleware de test
app.use((req, res) => {
    res.json({message : "Votre requête a bien été reçue !"});
});

module.exports = app;