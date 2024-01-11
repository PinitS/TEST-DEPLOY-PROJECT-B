exports.baseResp = ({
  status = false,
  errno,
  result = null,
  page,
  limit,
  totalPage,
  totalList,
  message = '',
}) => {
  return { status, errno, result, page, limit, totalPage, totalList, message };
};
