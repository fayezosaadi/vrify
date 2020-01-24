const knex = require('knex');
const config = require("../knexfile");

class Postgres {
  static async connect() {
    await knex(config.development)
  }
}

module.exports = { Postgres, knex: knex(config.development) };
