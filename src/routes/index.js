const v1Routes = require('@routes/v1');
const { Router } = require('express');

const router = Router();

router.use('/v1', v1Routes);
module.exports = router;
