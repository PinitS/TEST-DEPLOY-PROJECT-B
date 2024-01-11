const { setCache } = require('@redis/redisCache');
const client = require('@redis/redisConnect');
const { baseResp } = require('@utils/baseResp');
const _ = require('lodash');

const REDIS_KEY = 'example';

exports.getRedis = async (req, res) => {
  console.log('getRedis :>> ');
  console.log('getRedis :>> ');
  console.log('getRedis :>> ');
  console.log('getRedis :>> ');
  console.log('getRedis :>> ');
  console.log('getRedis :>> ');
  console.log('getRedis :>> ');
  console.log('getRedis :>> ');
  console.log('getRedis :>> ');
  console.log('getRedis :>> ');

  try {
    const resp = await client
      .getAsync(REDIS_KEY)
      .then((data) => {
        return JSON.parse(data);
      })
      .then(async (result) => {
        if (_.isEmpty(result)) {
          const cacheData = [{ redisExample: 'tent-official' }];
          await client.setAsync(REDIS_KEY, JSON.stringify(cacheData));
          return cacheData;
        }
        return result;
      });
    res.status(200).json(
      baseResp({
        status: true,
        result: resp,
        message: `example get redis`,
      })
    );
  } catch (error) {
    console.log('error :>> ', error);
    res.status(500).json(
      baseResp({
        message: _.get(error, ['message']),
      })
    );
  }
};

exports.setRedis = async (req, res) => {
  try {
    const { redisExample, isLimit = false } = req.body;
    await setCache({ isLimit, key: REDIS_KEY, data: redisExample });
    res.status(200).json(
      baseResp({
        status: true,
        result: redisExample,
        message: `example set redis`,
      })
    );
  } catch (error) {
    console.log('error :>> ', error);
    res.status(500).json(
      baseResp({
        message: _.get(error, ['message']),
      })
    );
  }
};
