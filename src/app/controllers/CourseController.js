const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongooes')

class CourseController {

    //[GET] //courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) => {
                res.render('courses/show', { course });
                // res.render('courses/show');
                // res.json(course);
            })
            .catch(next);
    }

    //[GET] //courses/create
    create(req, res, next) {
        res.render('courses/create');
        // res.send('CREATE COURSES!!')
    }

    //[POST] //courses/store  (xu li luu du lieu)
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://www.giaoxugiaohovietnam.com/ThaiBinh/ThuChinh/ThuChinh-07112014%20(24).JPG`;
        const course = new Course(formData);
        course.save()
            // .lean()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);

        // res.send('SAVE COURSES!!');
        // res.json(req.body);
    }

    //[GET] //courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .lean()
            .then((course) => {
                res.render('courses/edit', { course });
            })
            .catch(next);
        // res.render('courses/edit');
        // res.send('CREATE COURSES!!')
    }

    //[PUT] //courses/:id
    update(req, res, next) {
        // res.json(req.body)
        Course.updateOne({ _id: req.params.id }, req.body)
            .lean()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[DELETE] //courses/:id
    destroy(req, res, next) {
        // Xóa thật ở trong DB
        // Course.deleteOne({ _id: req.params.id })
        //     .lean()
        //     .then(() => res.redirect('back')) //Khi thành công thì thực thi
        //     .catch(next);

        //Soft Delete
        Course.delete({ _id: req.params.id })
            .lean()
            .then(() => res.redirect('back')) //Khi thành công thì thực thi
            .catch(next);
    }

    //[DELETE] //courses/:id/force
    forceDestroy(req, res, next) {
        // Xóa thật ở trong DB
        Course.deleteOne({ _id: req.params.id })
            .lean()
            .then(() => res.redirect('back')) //Khi thành công thì thực thi
            .catch(next);
    }

    //[PATCH] //courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .lean()
            .then(() => res.redirect('back')) //Khi thành công thì thực thi
            .catch(next);
    }

    //[POST] //courses/handle-form-action
    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'deleted':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .lean()
                    .then(() => res.redirect('back')) //Khi thành công thì thực thi
                    .catch(next);
                break;
            case 'delete-all':
                Course.deleteOne({ _id: { $in: req.body.courseIds } })
                    .lean()
                    .then(() => res.redirect('back')) //Khi thành công thì thực thi
                    .catch(next);
                break;
            case 'restore-all':
                Course.restore({ _id: { $in: req.body.courseIds } })
                    .lean()
                    .then(() => res.redirect('back')) //Khi thành công thì thực thi
                    .catch(next);
                break;
            default:
                res.json({ message: "Action is invalid!" });

        }
    }
}

module.exports = new CourseController;