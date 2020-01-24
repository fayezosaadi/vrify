const knex = require('knex');
const config = require("../knexfile");

class Postgres {
  static async connect() {
    process.env.NODE_ENV === "test" ? await knex(config.testing) : await knex(config.development)
  }
}

module.exports = { Postgres, knex: process.env.NODE_ENV === "test" ? knex(config.testing) : knex(config.development) };
