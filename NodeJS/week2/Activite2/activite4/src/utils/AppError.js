class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode || 500;
        this.timestamp = new Date().toISOString();

        // Pour garder le bon stack trace
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;
