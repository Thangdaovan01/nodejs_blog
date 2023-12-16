const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {

    // app.get('/courses', (req, res) => {  res.render('courses'); });
    app.use('/courses', coursesRouter);
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

}

module.exports = route;