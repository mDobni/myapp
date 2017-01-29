var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var modules = require('./modules');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get(modules.get.route, modules.get.callback);

app.get(modules.getId.route, modules.getId.callback);

app.post(modules.post.route, modules.post.callback);

app.put(modules.put.route, modules.put.callback);

app.delete(modules.delete.route, modules.delete.callback);


app.listen(3000);