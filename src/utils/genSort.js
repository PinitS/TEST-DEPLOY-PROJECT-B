const _ = require('lodash');

exports.genSort = ({ defaultOrder = {}, sortBy = '' }) => {
  const filters = _.split(sortBy, ',');
  const result = _.cloneDeep(defaultOrder);

  _.each(filters, (filter) => {
    const [key, value] = filter.split('_');
    _.set(result, key, value);
  });
  return result;
};
