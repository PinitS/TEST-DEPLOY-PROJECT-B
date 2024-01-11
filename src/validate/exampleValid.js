const { baseResp } = require('@utils/baseResp');
const { check, validationResult } = require('express-validator');

exports.createValid = [
  check('name').exists().isString(),
  check('posts').optional().isArray(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(
        baseResp({
          message: errors.array({ onlyFirstError: true }),
        })
      );
    }
    next();
  },
];

exports.getByIdValid = [
  check('id').exists().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(
        baseResp({
          message: errors.array({ onlyFirstError: true }),
        })
      );
    }
    next();
  },
];

exports.updateValid = [
  check('id').exists().isString(),
  check('name').exists().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(
        baseResp({
          message: errors.array({ onlyFirstError: true }),
        })
      );
    }
    next();
  },
];

exports.destroyValid = [
  check('id').exists().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(
        baseResp({
          message: errors.array({ onlyFirstError: true }),
        })
      );
    }
    next();
  },
];
