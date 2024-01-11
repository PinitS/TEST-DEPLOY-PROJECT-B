const ExampleAuthor = require('@database/entities/ExampleAuthor');
const ExamplePost = require('@database/entities/ExamplePost');
const { DataSource } = require('typeorm');

const {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_PORT,
} = process.env;

exports.dataSource = new DataSource({
  type: 'postgres',
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  // entities: [ExampleAuthor, ExamplePost],
  logging: true,
  synchronize: true,
  timezone: 'Asia/Bangkok',
});
