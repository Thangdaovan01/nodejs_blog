const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
//import { handlebars } from 'express-handlebars';
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))
// app.use(morgan('combined'));
app.use(express.urlencoded({
    extended: true
})); //middleware xu li form
app.use(express.json());

//Tempalte engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs' //Thay đổi định dạng đuôi .handlebars
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//console.log('PATH', path.join(__dirname, 'resources\\views'));
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.post('/search', (req, res) => {
    console.log(req.body);
    res.send("Hello World!");

});


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})