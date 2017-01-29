module.exports = {
    post: {
        route: '/:id',
        callback: function(req, res) {
            var ime = req.body.name;
            delete req.body.name;
            db.users[ime] = req.body;

            res.json(db.users[ime]);
        },
    },

    get: {
        route: '/',
        callback: function(req, res) {

            res.json("Hello world!");
        },
    },

    getId: {
        route: '/:id',
        callback: function(req, res){

            res.json(db.users[req.params.id]);
        },
    },
    
    put: {
        route: '/:id',
        callback: function(req, res) {
            Object.keys(req.body)
            .forEach(function (value, index, array) {
                db.users[req.params.id][value] = req.body[value];
            });

            res.json(db.users[req.params.id]);
        },
    },
   
    delete: {
        route: '/:id',
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
    },
};

var db = {
  users: {
    miha: {
      priimek: 'Dobnikar',
      emso: "2012991500xxx",
      age: 27,
      nationality: "Slovenian",
    }
  }
};
