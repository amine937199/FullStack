exports.getProjectInfo = () => {
  return {
    project: process.env.PROJECT_NAME || 'unknown',
    version: process.env.VERSION || '1.0.0',
    date: new Date().toISOString()
  };
};

exports.getApi = () => {
  return 'Welcome to the API';
};