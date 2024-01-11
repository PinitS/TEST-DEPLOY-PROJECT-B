require('dotenv').config();
require('module-alias/register');
const { SERVER_PORT } = process.env;
const { dataSource } = require('@database/data-source');
const { verifyApiKey } = require('@middleware/verifyApiKey');
const appRoutes = require('@routes');
const io = require('@socket/index');
const { baseResp } = require('@utils/baseResp');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.io = io;

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization: >>>>', err);
  });

app.get('/api/versions', async (req, res) => {
  res.status(200).json(
    baseResp({
      status: true,
      message: 'TEMPLATE EXPRESS JS API IN VERSIONS 1.0.1',
    })
  );
});

app.use('/api', verifyApiKey, appRoutes);

app.listen(SERVER_PORT, () => {
  console.log('server is running is PORT :>> ', SERVER_PORT);
});
