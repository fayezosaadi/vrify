const express = require("express");
const router = express.Router();
const {
  getAddresses,
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
} = require("../queries/customerAddresses");

/**
 * list all addresses
 */
router.get("/", async (req, res) => {
  try {
    const addresses = await getAddresses();
    res.status(200).send(addresses);
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

/**
 * get single address
 */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const address = await getAddress({ id });
    res.status(200).send(address);
  } catch({ message }) {
    res.status(404).send(message);
  }
});

/**
 * create address
 */
router.post("/", async (req, res) => {
  try {
    await createAddress({ params: req.body });
    res.status(201).send();
  } catch ({ message }) {
    return res.status(400).send(message);
  }
});

/**
 * update address
 */
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await updateAddress({ params: { id, ...req.body } });
    return res.status(200).send();
  } catch ({ message }) {
    return res.status(400).send(message);
  }
});

/**
 * delete address
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteAddress({ id });
    res.status(200).send();
  } catch ({ message }) {
    res.status(400).send(message);
  }
});

module.exports = router;
