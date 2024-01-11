const { dataSource } = require('@database/data-source');
const { baseResp } = require('@utils/baseResp');
const { pagination, calTotalPage } = require('@utils/pagination');
const _ = require('lodash');

exports.create = async (req, res) => {
  try {
    const { name, posts } = req.body;
    const data = {
      name,
      posts,
    };
    const exampleAuthor = await dataSource
      .getRepository('ExampleAuthor')
      .save(data);

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

exports.get = async (req, res) => {
  try {
    const { page, limit } = pagination({
      reqPage: req.query.page,
      reqLimit: req.query.limit,
    });

    const [dataList, total] = await dataSource
      .getRepository('ExampleAuthor')
      // .find({ relations: { posts: true }, where: { posts: { id: 2 } } });
      .findAndCount({
        relations: { posts: true },
        take: limit,
        skip: (page - 1) * limit,
        cache: true,
      });

    res.status(200).json(
      baseResp({
        status: true,
        result: dataList,
        page,
        limit,
        totalPage: calTotalPage({ total, limit }),
        message: `example get with relations`,
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

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('id :>> ', id);
    const data = await dataSource.getRepository('ExampleAuthor').findOne({
      relations: { posts: true },
      where: { id },
    });
    res.status(200).json(
      baseResp({
        status: true,
        result: data,
        message: `example get by id success with relations`,
      })
    );
  } catch (error) {
    res.status(500).json(
      baseResp({
        message: _.get(error, ['message']),
      })
    );
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const author = await dataSource
      .getRepository('ExampleAuthor')
      .findOne({ where: { id } });

    dataSource.getRepository('ExampleAuthor').merge(author, { name });
    const data = await dataSource.getRepository('ExampleAuthor').save(author);

    res.status(200).json(
      baseResp({
        status: true,
        result: data,
        message: `example update author success`,
      })
    );
  } catch (error) {
    res.status(500).json(
      baseResp({
        message: _.get(error, ['message']),
      })
    );
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;

    await dataSource.getRepository('ExampleAuthor').delete(id);
    res.status(200).json(
      baseResp({
        status: true,
        result: { id },
        message: ``,
      })
    );
  } catch (error) {
    res.status(500).json(
      baseResp({
        message: _.get(error, ['message']),
      })
    );
  }
};
