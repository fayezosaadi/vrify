
exports.up = async (knex) => {

  await knex.schema.createTable('customers', (table) => {
    table.increments().primary();
    table.string('name');
    table.timestamps();
  });
};


exports.down = async (knex) => knex.schema.dropTable('customers');
