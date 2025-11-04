const express = require("express");

const AppError = require("../utils/AppError");

const router = express.Router();

router.get("/test", (req, res, next) => {
    
    return next(new AppError("Cette ressource n'existe pas", 404));
});

module.exports = router;

