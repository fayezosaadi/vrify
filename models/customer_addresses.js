const bookshelf = require('../infra/bookshelf');

const CustomerAddresses = bookshelf.Model.extend({
  tableName: 'customer_addresses',
  hasTimestamps: true,

  // DB queries
  async getAddresses() {
    return this.fetchAll();
  },

  async getAddress(id) {
    return this.where({ id }).fetch();
  },

  async createAddress(address) {
    return this.save(address);
  },

  async updateAddress(address) {
    return this.save(address, { patch: true });
  },

  async deleteAddress(id) {
    return this.where({ id }).destroy();
  },

});

module.exports = bookshelf.model('Customer_Addresses', CustomerAddresses);
