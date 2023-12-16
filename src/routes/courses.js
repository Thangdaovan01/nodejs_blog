const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create);
router.post('/store', courseController.store); //luu du lieu moi create
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update); //khi submit form chinh sua

router.get('/:slug', courseController.show);

module.exports = router;