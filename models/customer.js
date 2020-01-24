const bookshelf = require('../infra/bookshelf');
require("./customer_addresses");

const Customer = bookshelf.Model.extend({
  tableName: 'customers',
  hasTimestamps: true,

  async customerAddresses() {
    return this.hasOne('Customer_Addresses');
  },

  // DB queries
  async getCustomers() {
    return this.fetchAll();
  },

  async getCustomer(id) {
    return this.where({ id }).fetch({ withRelated: ['customerAddresses'] });
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

});

module.exports = bookshelf.model('Customer', Customer);
