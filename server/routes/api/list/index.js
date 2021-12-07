const epxress = require('express');
const { getList } = require('../../../controllers/api/list');
const router = epxress.Router();


router.get('/', getList)

module.exports = router;