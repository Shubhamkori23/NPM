var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model');


var port = 8080;
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.tt98tdj.mongodb.net/example');

app.get('/', function(req, res) {
  res.send('Happy to be here');
});

app.get('/books', function(req, res) {
  console.log('getting all books');
  Book.find({})
    .exec(function(err, books) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(books);
        res.json(books);
      }
    });
});

app.listen(port, function () {
  console.log('app listening on port ' + port);
});