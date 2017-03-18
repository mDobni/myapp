var knex = require('../db.js')

module.exports = function () {
    return {
        get: function (id) {
            return !id 
                ? knex('users')
                : knex('users').where({ id: id });
        },
        create: function(body) {
            return knex('users').insert(body);
        },
        update: function(id, body) {
            return knex('users').where({ id: id }).update(body);
        },
    }
}