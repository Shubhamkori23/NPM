var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets')); 

app.get('/', function (req, res) {
    res.render('indexx');
});

app.get('/contact', function (req, res) {
    res.render('contacts', {qs: req.query});
});

app.get('/profile/:name', function (req, res) {
    var data = { age: 24, job: 'Software Engineer', hobbies: ['chess', 'sketching', 'travelling'] };
    res.render('profilee', { person: req.params.name, data: data });    //profilee.ejs
});

app.listen(3000);