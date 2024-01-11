const _ = require('lodash');

exports.pagination = ({ reqPage = 1, reqLimit = 20 }) => {
  const MIN_LIMIT = 20;
  const MAX_LIMIT = 100;
  const pageNumber = _.toInteger(reqPage);
  const pageLimit = _.toInteger(reqLimit);

  const page = pageNumber > 0 ? pageNumber : reqPage;
  const limit =
    pageLimit <= 0 ? MIN_LIMIT : pageLimit > MAX_LIMIT ? MAX_LIMIT : pageLimit;
  return { page, limit };
};

exports.calTotalPage = ({ total, limit }) => {
  return _.ceil(total / limit);
};
