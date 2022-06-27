var bodyParser = require('body-parser');

var data = [{item: 'Get Dairy'}, {item: 'Hit the Gym'}, {item: 'Do some Coding'}];
var urlencodedParser = bodyParser.urlencoded({extended: false}); //middleware

module.exports = function (app) {
    app.get('/todo', function (req, res) {
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function (req, res) {
        data.push(req.body);
        res.json({todos: data});
    });

    app.delete('/todo', function (req, res) {
    });
};