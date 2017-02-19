var userRepo = require('../repository/users')();

module.exports = function () {
    return {
        get: function (id) {
            return userRepo.get(id)
        },

    }
}