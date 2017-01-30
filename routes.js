module.exports = [
     {
        route: '/:id',
        callback: function(req, res) {
            var ime = req.body.name;
            delete req.body.name;
            db.users[ime] = req.body;

            res.json(db.users[ime]);
        },
        method: "POST",
    },

     {
        route: '/',
        callback: function(req, res) {

            res.json(db.users);
        },
        method: "GET",
    },

     {
        route: '/:id',
        callback: function(req, res){

            res.json(db.users[req.params.id]);
        },
        method: "GET",
    },
    
     {
        route: '/:id',
        callback: function(req, res) {
            Object.keys(req.body)
            .forEach(function (value, index, array) {
                db.users[req.params.id][value] = req.body[value];
            });

            res.json(db.users[req.params.id]);
        },
        method: "PUT",
    },
   
     {
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
        method: "DELETE"
    },
];

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
