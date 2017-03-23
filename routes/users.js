var knex = require('../db.js');
var userService = require('../service/users')();

module.exports = [
    {
        route: '/users',
        method: "post",
        callback: function (req, res) {
            return userService.create(req.body)
                .then(function (result) {
                    res.json(result);
                }).catch(function (err) {
                    res.json(err);
                });
        },
    },

    {
        route: '/users',
        method: "get",
        callback: function (req, res) {
            return userService.get()
                .then(function (result) {
                    res.json(result);
                });
        },
    },

    {
        route: '/users/:id',
        method: "get",
        callback: function (req, res) {
            return userService.get(req.params.id)
                .then(function (result) {
                    res.json(result);
                });
        },
    },

    {
        route: '/users/:id',
        method: "put",
        callback: function (req, res) {
            return userService.update(req.params.id, req.body)
            .then(function (result) {
                res.json(result);
            });
        },
    },

    {
        route: '/users/:id',
        method: "delete",
        callback: function (req, res) {
            return userService.delete(req.params.id, req.body)
            .then(function (result) {
                res.json(result);
            });                       
        },
    },
];


