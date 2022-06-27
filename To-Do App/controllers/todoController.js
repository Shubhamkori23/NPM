var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect To The Database
mongoose.connect('mongodb+srv://Shubh:6668@cluster0.tt98tdj.mongodb.net/todo');

//Create a Schema - This is like a blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

//Create a Model
var Todo = mongoose.model('Todo', todoSchema);
var itemOne = Todo({ item: 'Buy Flowers' }).save(function (err) {
    if (err) throw err;
    console.log('Item Saved');
})

var data = [{ item: 'Get Dairy' }, { item: 'Hit the Gym' }, { item: 'Do some Coding' }];
var urlencodedParser = bodyParser.urlencoded({ extended: false }); //middleware

module.exports = function (app) {
    app.get('/todo', function (req, res) {
        res.render('todo', { todos: data });
    });

    app.post('/todo', urlencodedParser, function (req, res) {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function (req, res) {
        data = data.filter(function (todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });
};