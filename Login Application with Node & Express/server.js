var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");
var { v4: uuidv4 } = require("uuid");

var router = require("./router")

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.set('view engine', 'ejs');

//load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

app.use(session({
    secret: uuidv4(), //  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    resave: false,
    saveUninitialized: true
}))

app.use('/route', router);

//home route
app.get('/', (req, res) => {
    res.render('base', { title: "Login System" });
})

app.listen(port, () => { console.log('Listening to the server on http://localhost:3000') })