const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongooes')

class CourseController {

    //[GET] //courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) => {
                res.render("courses/show", { course });
                // res.render('courses/show');
                // res.json(course);
            })
            .catch(next);
    }
}

module.exports = new CourseController;