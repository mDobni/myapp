

module.exports = [
    { 
        route: '/article/',
        callback: function(req, res) {

            res.json(artDb.articles);
        },
        method: "get",
    },

    {
        route: '/article/:id',
        callback: function(req, res){

            res.json(artDb.articles[req.params.id]);
        },
        method: "get",
    },
    
    {
        route: '/article/:id',
        callback: function(req, res) {
            var ime = req.body.name;
            delete req.body.name;
            artDb.articles[ime] = req.body;

            res.json(artDb.articles[ime]);
        },
        method: "post",
    },

    {
        route: '/article/:id',
        callback: function(req, res) {
            Object.keys(req.body)
            .forEach(function (value, index, array) {
                artDb.articles[req.params.id][value] = req.body[value];
            });

            res.json(artDb.articles[req.params.id]);
        },
        method: "put",
    },
   
    {
        route: '/article/:id',
        callback: function(req, res) {
            var izbrisan = {};
            if (!artDb.articles[req.params.id]) {
                res.json('nema');
            };

            Object.keys(artDb.articles[req.params.id])
            .forEach(function (value, index, array) {
                izbrisan[value] = artDb.articles[req.params.id][value];
            });
            delete artDb.articles[req.params.id]

            res.json(izbrisan);
        },
        method: "delete"
    },
];



