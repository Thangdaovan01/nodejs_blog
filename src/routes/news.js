const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController')



router.get('/:slug', newsController.show);

//router.get('/', (req, res) => {    res.render('news');})
router.get('/', newsController.index);

module.exports = router;