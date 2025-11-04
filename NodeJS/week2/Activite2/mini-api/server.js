require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 4000;



const apiRouter = require('./src/routes/api.routes');
const notFound = require('./src/middlewares/notFound');
const errorHandler = require('./src/middlewares/errorHandler');



// Middlewares globaux
app.use(express.json());
app.use(morgan('dev'));

// Routeur principal
app.use(apiRouter);

// Middleware 404
app.use(notFound);

// Middleware erreur
app.use(errorHandler);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
