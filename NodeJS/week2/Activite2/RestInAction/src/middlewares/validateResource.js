module.exports = (req, res, next) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "Fields 'title' and 'description' are required"
    });
  }
  
  next();
};
