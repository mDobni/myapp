var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/routes.js');
var db = require('./db')

var port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

routes.forEach(function (x) {
    app[x["method"]](x.route, x.callback);
})


app.listen(port);