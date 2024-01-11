const exampleRoutes = require('@routes/v1/exampleRoutes');
const { Router } = require('express');
const router = Router();

router.use('/example', exampleRoutes);
module.exports = router;
