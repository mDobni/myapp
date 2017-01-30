var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

routes.forEach(function (x) {
    app[x["method"].toLowerCase()](x.route, x.callback);
})


app.listen(3000);