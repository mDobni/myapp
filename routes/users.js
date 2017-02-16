var knex = require('../db.js');

module.exports = [
     {
        route: '/users',
        callback: function(req, res) {
            knex('users').insert(req.body)
            .then(function (result) {
                res.json(result);
            }).catch(function (err) {
                res.json(err);
            });
        },
        method: "post",
    },

     {
        route: '/users',
        callback: function(req, res) {
            knex('users').select().then(function (result) {
                res.json(result);
            });
        },
        method: "get",
    },

     {
        route: '/users/:id',
        callback: function(req, res) {
            knex('users').where(req.body).select('id');
            res.json();
        },
        method: "get",
    },
    
     {
        route: '/users/:id',
        callback: function(req, res) {
            Object.keys(req.body)
            .forEach(function (value, index, array) {
                db.users[req.params.id][value] = req.body[value];
            });

            res.json(db.users[req.params.id]);
        },
        method: "put",
    },
   
     {
        route: '/users/:id',
        callback: function(req, res) {
            var izbrisan = {};
            if (!db.users[req.params.id]) {
                res.json('nema');
            };

            Object.keys(db.users[req.params.id])
            .forEach(function (value, index, array) {
                izbrisan[value] = db.users[req.params.id][value];
            });
            delete db.users[req.params.id]

            res.json(izbrisan);
        },
        method: "delete"
    },
];


