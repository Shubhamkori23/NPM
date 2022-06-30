var express = require('express');
var app = express();

var port = process.env.PORT||3000;

app.set('view engine', 'ejs');

//home route
app.get('/', (req, res) =>{
    res.render('base', { title : "Login System"});
})

app.listen(port, ()=>{console.log('Listening to the server on http://localhost:3000')})