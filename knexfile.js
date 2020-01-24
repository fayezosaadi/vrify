const POSTGRES_URI = "vrify";
const POSTGRES_URI_TEST = "vrify_test";

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: POSTGRES_URI,
      user: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'infra/migrations',
    }
  },
  testing: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: POSTGRES_URI_TEST,
      user: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'infra/migrations',
    }
  }
};
