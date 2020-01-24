const chai = require("chai");
const server = require("../app.js");
const { expect } = require("chai");
const chaiHttp = require("chai-http");
const models = require("../models");

chai.should();
chai.use(chaiHttp);

const customerPayload = { name: "vrify" };
let customerId;
let addressId;
let payload;
let updatedPayload;

describe("Addresss", async () => {

  before(async () => {
    await new models.Customer().createCustomer(customerPayload);
    const [{ id }] = await new models.Customer().getCustomers();
    customerId = id
  });

  after(async () => {
    await new models.Customer().deleteAll();
  });

  describe("/POST addresses", async () => {
    it("it should not CREATE address with bad customer id", done => {
      const payload = { street_address: "1", postal_code: "1", country: "ca", customer_id: "bad id" };
      chai
        .request(server)
        .post("/addresses")
        .send(payload)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });

    it("it should CREATE an address", done => {
      payload = { street_address: "1", postal_code: "1", country: "ca", customer_id: customerId };
      chai
        .request(server)
        .post("/addresses")
        .send(payload)
        .end(async (err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  describe("/GET addresses", async () => {
    it("it should GET all the addresses", done => {
      payload = { street_address: "1", postal_code: "1", country: "ca", customer_id: customerId };
      chai
        .request(server)
        .get("/addresses")
        .end(async (err, res) => {
          const addresses = res.body;
          res.should.have.status(200);
          addressId = addresses[0].id;
          addresses.should.be.a("array");
          expect(addresses[0].street_address).to.eq(payload.street_address);
          expect(addresses[0].postal_code).to.eq(payload.postal_code);
          expect(addresses[0].country).to.eq(payload.country);
          expect(addresses[0].customer_id).to.eq(payload.customer_id);
          done()
        });
    });
  });

  describe("/PUT addresses", async () => {
    it("it should UPDATE address", done => {
      updatedPayload = { street_address: "1125", country: "us", customer_id: customerId };
      chai
        .request(server)
        .put(`/addresses/${addressId}`)
        .send(updatedPayload)
        .end((err, res) => {
          res.should.have.status(200);
          done()
        });
    });
  });

  describe("/GET address", async () => {
    it("it should GET a single address", done => {
      chai
        .request(server)
        .get(`/addresses/${addressId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("id").eq(addressId);
          res.body.should.have.property("street_address").eq(updatedPayload.street_address);
          res.body.should.have.property("country").eq(updatedPayload.country);
          done();
        });
    });
  });

  describe("/DELETE addresses", () => {
    it("it should DELETE address", done => {
      chai
        .request(server)
        .delete(`/addresses/${addressId}`)
        .end(async (err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
