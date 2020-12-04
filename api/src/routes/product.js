const server = require("express").Router();
const { Product, Category } = require("../db.js");


server.get("/", (res, req) => {
  Product.finAll()
    .then(res => {
      console.log(res)
    })
})

module.exports = server;
