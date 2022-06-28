var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model');

var port = 8080;
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.tt98tdj.mongodb.net/example');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.send('Happy to be here');
});

//get all books from mongodb
app.get('/books', function (req, res) {
  console.log('getting all books');
  Book.find({})
    .exec(function (err, books) {
      if (err) {
        res.send('error has occured');
      } else {
        console.log(books);
        res.json(books);
      }
    })
});

//get books by id from the database
app.get('/books/:id', function (req, res) {
  console.log('getting one book');
  Book.findOne({
    _id: req.params.id
  })
    .exec(function (err, book) {
      if (err) {
        res.send('error occured');
      } else {
        console.log(book);
        res.json(book);
      }
    })
});

//add a book in the database
app.post('/book', function (req, res) {
  var newBook = new Book();

  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.category = req.body.category;

  newBook.save(function (err, book) {
    if (err) {
      res.send('errors occured');
    } else {
      console.log(book);
      res.send(book);
    }
  });
})

// another way to add a book(give some error)
// app.post('/book2', function(req, res) {
//     Book.create(req.body, function(err, book) {
//       if(err) {
//         res.send('error saving book');
//       } else {
//         console.log(book);
//         res.send(book);
//       }
//     });
//   });

//update a book in the database
app.put('/book/:id', function (req, res) {
  Book.findOneAndUpdate({
    _id: req.params.id
  },
    { $set: { title: req.body.title, author: req.body.author, category: req.body.category } },
    { upsert: true },
    function (err, newBook) {
      if (err) {
        console.log('error occured');
      } else {
        console.log(newBook);
        res.send(newBook);
      }
    });
});

//delete book by id from the database
app.delete('/book/:id', function (req, res) {
  Book.findOneAndRemove({
    _id: req.params.id
  }, function (err, book) {
    if (err) {
      res.send('error occured');
    } else {
      console.log(book);
      res.status(204);
    }
  });
});

app.listen(port, function () {
  console.log('app listening on port ' + port);
});