const { dataSource } = require('@database/data-source');
const { baseResp } = require('@utils/baseResp');
const _ = require('lodash');

exports.addDataToDbAndSendMessage = async (req, res) => {
  try {
    const io = req.app.locals.io;
    const { name } = req.body;
    const data = {
      name,
    };
    const exampleAuthor = await dataSource
      .getRepository('ExampleAuthor')
      .save(data);
    io.emit('example_event', {
      message: 'Hello from createToDbAndSendMessage',
    });

    res.status(200).json(
      baseResp({
        status: true,
        result: exampleAuthor,
        message: `example create Author`,
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
