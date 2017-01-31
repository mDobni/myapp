module.exports = [
    { 
        route: '/',
        callback: function(req, res) {

            res.json(artDb.articles);
        },
        method: "get",
    },

    {

    },

    {

    },

    {

    },
];

var artDb = { 
    articles: {
        articleOne: {
            author: "John Doe",
            title: "Origins of leprechaun fairies",
            ID: 462,
        },
    },
};