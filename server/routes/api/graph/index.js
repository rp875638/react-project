const express = require('express');
const { getGraph } = require('../../../controllers/api/graph');

const router = express.Router();

router.get('/', getGraph);
module.exports = router;