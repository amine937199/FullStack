const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const PORT = 3000;
const app = express();

const someRoutes = require("./src/routes/someRoutes");
const errorHandler = require("./src/middlewares/errorHandler");
const AppError = require("./src/utils/AppError");



app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", someRoutes);

// Pour toute route inconnue → 404
// 404 handler
app.use((req, res, next) => {
    next(new AppError(`Route introuvable : ${req.originalUrl}`, 404));
});


// Middleware centralisé pour toutes les erreurs
app.use(errorHandler);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


