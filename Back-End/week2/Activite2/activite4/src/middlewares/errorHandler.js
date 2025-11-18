
module.exports = (err, req, res, next) => {
    const status = err.statusCode || 500;

    res.status(status).json({
        success: false,
        message: err.message || "Erreur interne du serveur",
        statusCode: status,
        timestamp: err.timestamp || new Date().toISOString(),
    });
};
