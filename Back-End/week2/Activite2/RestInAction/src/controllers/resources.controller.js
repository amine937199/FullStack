const service = require('../services/resources.service');

// GET /api/resources?page=1&limit=5
exports.getAll = (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const data = service.getAll(page, limit);

    res.status(200).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

// GET /api/resources/:id
exports.getOne = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const item = service.getOne(id);

    if (!item) {
      return res.status(404).json({ success: false, message: "Resource not found" });
    }

    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// POST /api/resources
exports.create = (req, res, next) => {
  try {
    const newItem = service.create(req.body);
    res.status(201).json({ success: true, data: newItem });
  } catch (err) {
    next(err);
  }
};

// PUT /api/resources/:id
exports.update = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const updated = service.update(id, req.body);

    if (!updated) {
      return res.status(404).json({ success: false, message: "Resource not found" });
    }

    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/resources/:id
exports.remove = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = service.remove(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Resource not found" });
    }

    // 204 = no content
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
