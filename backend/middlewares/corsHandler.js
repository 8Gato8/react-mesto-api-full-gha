const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

const allowedCors = ['http://localhost:3000'];

const settings = {
  'Access-Control-Allow-Credentials': true,
};

module.exports = (req, res) => {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    settings['Access-Control-Allow-Origin'] = origin;
  }

  const { method } = req;

  if (method === 'OPTIONS') {
    settings['Access-Control-Allow-Headers'] = req.headers['access-control-request-headers'];
    settings['Access-Control-Allow-Methods'] = DEFAULT_ALLOWED_METHODS;
  }

  res.set(settings).end();
};
