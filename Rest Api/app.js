const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const routes = require('./routes/api');

//setup express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb+srv://<UserName>:<Password>@cluster0.tt98tdj.mongodb.net/user');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

//listen for request
app.listen(process.env.port || 3000, function(){
    console.log('now listening for requests');
});
