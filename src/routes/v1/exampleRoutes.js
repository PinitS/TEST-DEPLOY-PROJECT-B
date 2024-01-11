const {
  create,
  get,
  getById,
  update,
  destroy,
} = require('@controllers/example/crud/exampleCRUDControllers');
const {
  getRedis,
  setRedis,
} = require('@controllers/example/redis/exampleRedisControllers');
const { addDataToDbAndSendMessage } = require('@controllers/example/socket');
const {
  createValid,
  getByIdValid,
  destroyValid,
  updateValid,
} = require('@validate/exampleValid');
const { Router } = require('express');
const router = Router();

router.get('/example-get-redis', getRedis);
router.post('/example-set-redis', setRedis);
router.post(
  '/example-add-data-to-db-and-send-message',
  addDataToDbAndSendMessage
);

router.post('/create', createValid, create);
router.get('/', get);
router.get('/:id', getByIdValid, getById);
router.post('/update/:id', updateValid, update);
router.delete('/delete/:id', destroyValid, destroy);

module.exports = router;
