# Vrify

A simple application based on RESTful architecture, built with Nodejs and Express Framework

## Technical Approach & Objectives

The backend is built with Node, Express and Postgres database and allows users 
to perform CRUD operations on customers and addresses endpoints. The server 
is an Http RESTful api that will response with JSON objects.

## Getting started

### Requirements

- NodeJS v10.7.0+ (https://nodejs.org)
- Postgres
  - If using Docker, run `docker run --name vrify-postgres -p 5432:5432 -d postgres`

### Getting the source code and downloading the dependencies (node modules)

1.  Clone the repo
2.  Install dependencies: `npm install` or `npm i` for short

### DB (Postgres) set up

- Access the docker container:

```docker
docker exec -it vrify-postgres psql -U postgres
```

- Create the following databases: `vrify` and `vrify_test`

```postgres-psql
create database vrify;
create database vrify_test;
```
 
 - Exit postgres using `\q`
 
 - Run `npm run db:migrate`, This will create all the tables in Postgres.
 - Run `npm run db:migrate:test`, This will create all the tables in Postgres for the test environment.

### Commands:

- `npm run start`: Starts app in production mode;
- `npm run start:dev`: Starts app in development mode;

**You can curl or use any http client app such as `Postman` to query the desired endpoints**

- Create customer
`POST http://localhost:3000/customers`
- Read all customers
`GET http://localhost:3000/customers`
- Read single customer details
`GET http://localhost:3000/customers/1`
- Update customer
`PUT http://localhost:3000/customers/1`
- Delete customer
`DELETE http://localhost:3000/customers/1`
- Create address
`POST http://localhost:3000/addresses`
- Read all addresses
`GET http://localhost:3000/addresses`
- Read single address
`GET http://localhost:3000/addresses/1`
- Update address
`PUT http://localhost:3000/addresses/1`
- Delete address
`DELETE http://localhost:3000/addresses/1`

### Running Tests:

Tests are written to verify that the api endpoints are functioning as expected, 
they are written using Mocha framework and Chai assertion library

- **npm run test**
