var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var modules = require('./routes');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get(modules.getUsers.route, modules.getUsers.callback);

app.get(modules.getUser.route, modules.getUser.callback);

app.post(modules.createUser.route, modules.createUser.callback);

app.put(modules.modifyUser.route, modules.modifyUser.callback);

app.delete(modules.deleteUser.route, modules.deleteUser.callback);


app.listen(3000);