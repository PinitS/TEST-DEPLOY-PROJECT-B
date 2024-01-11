const bluebird = require('bluebird');
const _ = require('lodash');
const redis = require('redis');
bluebird.promisifyAll(redis);

const { REDIS_HOST, REDIS_PORT } = process.env;

const client = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
});

client.on('connect', () => {
  console.error('connecting to Redis:');
});

client.on('error', (err) => {
  console.error('Error connecting to Redis:', err);
});

module.exports = client;
