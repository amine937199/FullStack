const express = require('express');
require('dotenv').config();
const app = express();

const productsRoute = require('./src/routes/products');


app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});


app.use('/api/products', productsRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port", process.env.PORT || 3000);
});
