const _ = require('lodash');

exports.handleErrorToMessage = ({ obj, msg }) => {
  const valueToMatch = _.get(msg.match(/Duplicate entry '(.+?)' for key/), [1]);
  const key = _.findKey(obj, (value) => value === valueToMatch);
  return `${key} has already exists`;
};
