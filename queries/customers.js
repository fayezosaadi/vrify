const models = require("../models");

const getCustomers = async () => new models.Customer().getCustomers();
const getCustomer = async ({ id }) =>  new models.Customer().getCustomer(id);
const createCustomer = async ({ params }) => new models.Customer().createCustomer(params);
const updateCustomer = async ({ params }) => new models.Customer().updateCustomer(params);
const deleteCustomer = async ({ id }) => new models.Customer().deleteCustomer(id);

module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
