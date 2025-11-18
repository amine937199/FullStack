const express = require('express');
const router = express.Router();

const controller = require('../controllers/resources.controller');
const validateResource = require('../middlewares/validateResource');

// CRUD
router.get('/api/resources', controller.getAll);
router.get('/api/resources/:id', controller.getOne);
router.post('/api/resources', validateResource, controller.create);
router.put('/api/resources/:id', validateResource, controller.update);
router.delete('/api/resources/:id', controller.remove);

module.exports = router;
