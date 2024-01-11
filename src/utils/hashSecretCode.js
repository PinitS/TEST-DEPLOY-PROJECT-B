const jwtDecode = require('jwt-decode');
const sign = require('jwt-encode');
const _ = require('lodash');

const { SERVER_PRIVATE_SECRET_KEY } = process.env;

exports.secretEncode = ({ jwtData }) => {
  const jwt = sign(jwtData, 'secret');
  const hash = _.replace(jwt, '.', SERVER_PRIVATE_SECRET_KEY);
  return hash;
};

exports.secretDecode = ({ jwtData }) => {
  const decode = _.replace(jwtData, SERVER_PRIVATE_SECRET_KEY, '.');
  return jwtDecode(decode);
};
