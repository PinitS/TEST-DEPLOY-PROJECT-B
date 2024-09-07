require('dotenv').config();
require('module-alias/register');
const { SERVER_PORT } = process.env;
const { baseResp } = require('@utils/baseResp');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/versions', async (req, res) => {
 return res.status(200).json(
    baseResp({
      status: true,
      message: 'PROJECT A IN VERSIONS 1.0.0',
    })
  );
});

app.listen(SERVER_PORT, () => {
  console.log('server is running is PORT :>> ', SERVER_PORT);
});
