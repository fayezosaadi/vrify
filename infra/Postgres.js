const Pool = require('pg').Pool;
const POSTGRES_URI = "mongodb://localhost/vrify";
const POSTGRES_URI_TEST = "mongodb://localhost/vrify-test";

class Postgres {
  static async connect() {
    new Pool({
      user: 'postgres',
      host: 'localhost',
      database: process.env.NODE_ENV === "test" ? POSTGRES_URI_TEST : POSTGRES_URI,
      port: 5432,
      min:1,
      max:1
    })
  }
}

module.exports = { Postgres };
