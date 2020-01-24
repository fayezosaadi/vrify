
exports.up = async (knex) => {

  await knex.schema.createTable('customer_addresses', (table) => {
    table.increments().primary();
    table.string('street_address');
    table.string('postal_code');
    table.string('country');
    table.integer('customer_id')
      .unsigned()
      .references('id')
      .inTable('customers')
      .index()
      .notNullable()
      .onDelete('CASCADE');
    table.timestamps();
  });
};


exports.down = async (knex) => knex.schema.dropTable('customer_addresses');
