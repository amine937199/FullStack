const express = require('express');
const app = express();
const fs = require('fs');

// Middleware pour enregistrer chaque requête qui arrive au serveur
app.use((req, res , next) => {
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
      next();
});

// Middleware pour mesurer la durée de traitement d’une requête
app.use((req, res, next) => {
   req.startTime = Date.now();
   next();
});

//Rendre le dossier "public" accessible (fichiers statiques)
app.use(express.static('public'));

//Route principale
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur Express!');
});


//Endpoint qui retourne une petite liste de produits
app.get('/api/products', (req, res) => {
    res.json([{id:1, name: 'Laptop'}, {id:2, name: 'Smartphone'}]);
});

//Endpoint qui retourne un produit selon son ID (via l’URL)
app.get('/api/products/:id', (req, res) => {
    res.json({message: `Produit ${req.params.id}`});
});


//Endpoint pour tester la rapidité du serveur (Ping)
app.get('/ping', (req, res) => {
    const duration  = Date.now() - req.startTime;
    res.json({message: 'pong' , duration:`${duration}ms` });
});

//Endpoint qui génère volontairement une erreur pour tester le système d’erreurs
app.get('/api/crash', (req, res, next) => {
       const err = new Error('Erreur simulée');
       next(err);
       
});

//Lecture d’un fichier JSON et retour de son contenu
app.get('/api/products-fils', (req, res) => {
    const data = fs.readFileSync('./data/products.json', 'utf-8');
    const products = JSON.parse(data);
    res.json(products);
});



//Middleware de gestion d’erreurs (appelé lorsque next(err) est utilisé)
app.use((err, req, res, next) => {
    console.error('Erreur détectée:', err.message);
    res.status(500).json({error: err.message})
});


//Lancement du serveur sur le port 3000
app.listen(3000, () => {
    console.log('le serveur écoute sur le port 3000');
});