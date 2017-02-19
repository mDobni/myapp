var db = require('../db.js')

module.exports = function () {
    return {
        get: function (id) {
            return !id 
                ? knex('users')
                : knex('users').where({ id: id });
        },
        
    }
}