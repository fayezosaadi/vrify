const { knex } = require('./Postgres');
const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
