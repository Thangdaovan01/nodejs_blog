const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create);
router.post('/store', courseController.store); //luu du lieu moi create
router.post('/handle-form-action', courseController.handleFormAction);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update); //khi submit form chinh sua
router.patch('/:id/restore', courseController.restore); //khi khoi phuc khoa hoc
router.delete('/:id', courseController.destroy); //khi delete khóa học
router.delete('/:id/force', courseController.forceDestroy); //khi delete vinh vien khóa học

router.get('/:slug', courseController.show);

module.exports = router;