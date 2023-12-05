const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController')



router.use('/:slug', newsController.show);

//router.use('/', (req, res) => {    res.render('news');})
router.use('/', newsController.index);

module.exports = router;