const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

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

app.listen(port, () => {
    console.log(`Server Started ${port}`);
});