const express = require('express');
const router = express.Router();
const { filterProducts } = require('../services/dataService');

router.get('/', (req, res) => {
    console.log("Query reçue :", req.query);

    const results = filterProducts(req.query);

   
    console.log(`${results.length} produits trouvés.`);

    res.json(results);
});

module.exports = router;
