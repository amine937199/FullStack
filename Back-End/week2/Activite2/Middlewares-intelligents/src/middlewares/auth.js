// middlewares/auth.js

module.exports = function(req, res, next) {
    const token = req.headers.authorization;

    if (token === "1234") {
        return next();
    }

    return res.status(401).json({
        success: false,
        message: "Accès refusé : token invalide."
    });
};
