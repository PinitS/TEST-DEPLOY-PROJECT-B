const { baseResp } = require('@utils/baseResp');

const { SERVER_API_KEY } = process.env;

exports.verifyApiKey = (req, res, next) => {
  if (req.headers['x-key'] === SERVER_API_KEY) {
    next();
  } else {
    return res.status(401).json(
      baseResp({
        message: 'api-key incorrect',
      })
    );
  }
};
