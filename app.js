var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./article');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

routes.forEach(function (x) {
    app[x["method"]](x.route, x.callback);
})


app.listen(3000);