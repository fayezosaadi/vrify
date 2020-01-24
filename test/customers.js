const chai = require("chai");
const server = require("../app.js");
const { expect } = require("chai");
const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

const payload = { name: "vrify" };
const payloadUpdate = { name: "vrify-update" };
let customerId;

describe("Customers", () => {
  describe("/POST customers", () => {
    it("it should CREATE an customer", done => {
      chai
        .request(server)
        .post("/customers")
        .send(payload)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  describe("/GET customers", () => {
    it("it should GET all the customers", done => {
      chai
        .request(server)
        .get("/customers")
        .end((err, res) => {
          const customers = res.body;
          customerId = customers[0].id;
          res.should.have.status(200);
          customers.should.be.a("array");
          expect(customers[0].name).to.eq(payload.name);
          done();
        });
    });
  });

  describe("/PUT customers", () => {
    it("it should UPDATE an customer", done => {
      chai
        .request(server)
        .put(`/customers/${customerId}`)
        .send(payloadUpdate)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("/GET customer", () => {
    it("it should GET a single customer", done => {
      chai
        .request(server)
        .get(`/customers/${customerId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name").eq(payloadUpdate.name);
          done();
        });
    });
  });

  describe("/DELETE customers", () => {
    it("it should DELETE customer", done => {
      chai
        .request(server)
        .delete(`/customers/${customerId}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

});
