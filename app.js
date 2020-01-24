const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Postgres } = require("./infra/Postgres");

// Initialize postgres
Postgres.connect();

const customersRouter = require('./routes/customers');
const addressesRouter = require('./routes/addresses');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Initialize routes
app.use('/customers', customersRouter);
app.use('/addresses', addressesRouter);

module.exports = app;
