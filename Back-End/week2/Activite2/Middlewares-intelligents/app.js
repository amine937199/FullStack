// app.js
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const auth = require("./src/middlewares/auth");
const timeLimiter = require("./src/middlewares/timeLimiter");
const privateRoutes = require("./src/routes/privateRoutes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        msg: "Bienvenue sur notre API"
    })
});



// Appliquer middlewares sur les routes privées
app.use("/api/private", auth, timeLimiter, privateRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        msg: "Erreur interne",
        error: err.message
    });
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));