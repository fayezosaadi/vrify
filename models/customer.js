const bookshelf = require('../infra/bookshelf');
require("./customer_address");

const Customer = bookshelf.Model.extend({
  tableName: 'customers',
  hasTimestamps: true,

  customerAddress() {
    return this.hasOne('CustomerAddress');
  },

  // DB queries
  async getCustomers() {
    return this.fetchAll();
  },

  async getCustomer(id) {
    return this.where({ id }).fetch({ withRelated: ['customerAddress'] });
  },

  async createCustomer(customer) {
    return this.save(customer);
  },

  async updateCustomer(customer) {
    return this.save(customer, { patch: true });
  },

  async deleteCustomer(id) {
    return this.where({ id }).destroy();
  },

  async deleteAll() {
    return this.where('id', '!=', '0').destroy()
  }
});

module.exports = bookshelf.model('Customer', Customer);
