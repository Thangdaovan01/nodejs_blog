const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongooes')

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        // res.render('me/stored-courses')

        Promise.all([Course.find({}), Course.countDocumentsWithDeleted({ deleted: true })])
            // .lean()
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', { courses: mutipleMongooseToObject(courses), deletedCount });
            })
            .catch(next);

        // Course.countDocumentsWithDeleted({ deleted: true })
        //     .lean()
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch(next);

        // Course.find({})
        //     .lean()
        //     .then((courses) => {
        //         res.render('me/stored-courses', { courses });
        //     })
        //     .catch(next);

    }

    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        // res.render('me/stored-courses')
        Course.findWithDeleted({ deleted: true })
            .lean()
            .then((courses) => {
                res.render('me/trash-courses', { courses });
            })
            .catch(next);

    }

}

module.exports = new MeController;