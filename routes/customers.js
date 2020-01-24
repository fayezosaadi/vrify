const express = require("express");
const router = express.Router();
const {
  getCustomer,
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer
} = require("../queries/customers");

/**
 * list all customers
 */
router.get("/", async (req, res) => {
  try {
    const customers = await getCustomers();
    res.status(200).send(customers);
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

/**
 * get single customer
 */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await getCustomer({ id });
    res.status(200).send(customer);
  } catch({ message }) {
    res.status(404).send(message);
  }
});

/**
 * create customer
 */
router.post("/", async (req, res) => {
  try {
    await createCustomer({ params: req.body });
    res.status(201).send();
  } catch ({ message }) {
    return res.status(400).send(message);
  }
});

/**
 * update customer
 */
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await updateCustomer({ params: { id, ...req.body } });
    return res.status(200).send();
  } catch ({ message }) {
    return res.status(400).send(message);
  }
});

/**
 * delete customer
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteCustomer({ id });
    res.status(200).send();
  } catch ({ message }) {
    res.status(400).send(message);
  }
});

module.exports = router;
