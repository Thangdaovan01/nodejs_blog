const Course = require('../models/Course')

class MeController {

    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        // res.render('me/stored-courses')
        Course.find({})
            .lean()
            .then((courses) => {
                res.render('me/stored-courses', { courses });
            })
            .catch(next);

    }
}

module.exports = new MeController;