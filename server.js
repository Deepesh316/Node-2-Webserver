const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hi There</h1>');
    res.render('home.hbs', {pageTitle: 'Hooome'});
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {heading: 'Aboutt Page'});
});

app.listen(3000, () => {
    console.log('Server Started');
});