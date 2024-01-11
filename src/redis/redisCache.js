const client = require('@redis/redisConnect');
const _ = require('lodash');

const { REDIS_EXPIRE_TIME_MINUTE } = process.env;

exports.deleteCache = async ({ key }) => {
  await client.delAsync(_.isNull(key) ? ' ' : key);
};

exports.setCache = async ({ isLimit = true, key, data }) => {
  if (isLimit) {
    await client.setexAsync(
      key,
      REDIS_EXPIRE_TIME_MINUTE * 60,
      JSON.stringify(data)
    );
  } else {
    await client.setAsync(key, JSON.stringify(data));
  }
};
