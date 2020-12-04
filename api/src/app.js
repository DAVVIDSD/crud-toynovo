// app crud
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");
const cors = require('cors')
require("./db.js");

const server = express();
server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));

server.use(cors({origin: 'http://localhost:3000', credentials: true}));


server.use("/", routes);

module.exports = server;
