var config = require('./knexfile.js');
var env = 'development';
var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./mydb.sqlite"
    }
});