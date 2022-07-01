var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();

var port = process.env.PORT || 3000;

// app.use(function(req, res){
//     res.status(404);                         //If this middleware is kept here, 
//     res.send("File Not Found !!!!!!!!")      // there always will be a this error no matter what the url is.
// })

app.use(function (req, res, next) {
    console.log("Request Date: " + new Date());
    // res.send("Welcome Middleware App")
    next();
})

app.use(function (req, res, next) {
    var filepath = path.join(__dirname, "static", req.url)
    fs.stat(filepath, function (err, fileInfo) {
        if (err) {
            next();
            return
        }
        if (fileInfo.isFile()) {
            res.sendFile(filepath);
        }
        else {
            next()
        }
    })
})

app.use(function(req, res){
    res.status(404);
    res.send("File Not Found !!!!!!!!")
})

app.listen(port, () => { console.log('Listening on http://localhost:${port}') });