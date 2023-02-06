// Importation d'Express
const express = require('express');
// Importation de Morgan (logger HTTP)
const morgan = require('morgan');

// Création de l'application Express
const app = express();

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