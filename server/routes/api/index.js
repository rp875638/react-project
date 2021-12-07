const express = require('express');

const router = express.Router();

router.use('/user', require('./user'));
router.use('/list', require('./list'));
router.use('/graph', require('./graph'))
module.exports = router;