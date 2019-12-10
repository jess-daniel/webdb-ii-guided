const express = require("express");
const helmet = require("helmet");

const fruitsRouter = require("../fruits/fruits-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/fruits", fruitsRouter);

module.exports = server;

/*
Notes
    install knex cli 'npm i -g knex' 
    1. 'knex init' -- creates knexfile.js
    2. Update knexfile to connect to DB
    3. 'knex migrate:make "migrationName"' -- Create migration file
    4. 'knex migrate: latest' --
    
    seeding DB
    knex seed:make "name"
    knex seed:run

    .truncate() resets id of seeds

*/
