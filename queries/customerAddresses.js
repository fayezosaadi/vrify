const models = require("../models");

const getAddresses = async () => new models.CustomerAddress().getAddresses();
const getAddress = async ({ id }) =>  new models.CustomerAddress().getAddress(id);
const createAddress = async ({ params }) => new models.CustomerAddress().createAddress(params);
const updateAddress = async ({ params }) => new models.CustomerAddress().updateAddress(params);
const deleteAddress = async ({ id }) => new models.CustomerAddress().deleteAddress(id);

module.exports = {
  getAddresses,
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
};
