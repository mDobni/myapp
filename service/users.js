var userRepo = require('../repository/users')();

module.exports = function () {
    return {
        get: function (id) {
            return userRepo.get(id);
        },
        create: function (body) {
            return userRepo.create(body);
        },
        update: function (id, body) {
            return userRepo.get(id)
            .then(function (result) {
                if (result.length > 0) 
                    return userRepo.update(id, body);
            })
            .then(function (result) {
                if (result === 1) {
                    return userRepo.get(id)
                } else if (result === undefined) {
                    return new Error('no user with this id')
                }
            })
        },
        delete: function (id, body) {
            return userRepo.get(id)
            .then(function (result) {
                if (result.length > 0)
                    return userRepo.delete(id, body);
                    //tukaj pride se response?? 
            })
                
        }
    };
};