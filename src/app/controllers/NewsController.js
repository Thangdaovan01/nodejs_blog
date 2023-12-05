
class NewsController {

    //[GET] /news app.get('/news', (req, res) => { res.render('news'); });
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug (bIến động gọi chung là :slug)
    show(req, res) {
        res.send('NEWS DETAIL');
    }
}

module.exports = new NewsController;