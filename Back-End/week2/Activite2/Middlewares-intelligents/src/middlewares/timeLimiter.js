module.exports = function(req, res, next) {
    const hour = new Date().getHours();

    // Si l'heure est >= 22h ou < 6h -> bloquer
    if (hour >= 22 || hour < 6) {
        return res.status(403).json({
            success: false,
            message: "Service indisponible la nuit (22h - 6h)."
        });
    }

    next();
};
