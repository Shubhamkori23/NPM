var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Index.html');
});
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/Contact.html');
});

app.get('/profile/:name', function (req, res) {
    var data = { age: 24, job: 'Software Engineer', hobbies: ['chess', 'sketching', 'travelling'] };
    res.render('profile', { person: req.params.name, data: data });
});

app.listen(3000);