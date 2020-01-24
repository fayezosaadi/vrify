const models = require("../models");

const getAddresses = async () => new models.CustomerAddresses().getAddresses();
const getAddress = async ({ id }) =>  new models.CustomerAddresses().getAddress(id);
const createAddress = async ({ params }) => new models.CustomerAddresses().createAddress(params);
const updateAddress = async ({ params }) => new models.CustomerAddresses().updateAddress(params);
const deleteAddress = async ({ id }) => new models.CustomerAddresses().deleteAddress(id);

module.exports = {
  getAddresses,
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
};
