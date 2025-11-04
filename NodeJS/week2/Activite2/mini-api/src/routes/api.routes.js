const express = require('express');
const router = express.Router();

const infoController = require('../controllers/info.controller');

// /api/info
router.get('/info', infoController.getInfo);
router.get('/api', infoController.getAccueil);
module.exports = router;
