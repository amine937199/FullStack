const infoService = require('../services/info.service');

exports.getInfo = (req, res, next) => {
  try {
    const data = infoService.getProjectInfo();
    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
};

exports.getAccueil = (req, res, next) => {
  try {
    const message = infoService.getApi();
    res.status(200).send(message);

  } catch (err) {
    next(err);
  }
  
}
