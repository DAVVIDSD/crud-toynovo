const server = require("express").Router();
const { Product, Category } = require("../db.js");

server.get("/", (req, res) => {
 Product.findAll() 
 .then(p => {
   return res.json(p)
 })
})

server.post("/", (req, res) => {
  const {title, description, price, img} = req.body;
  Product.create({
    title: title,
    description:description,
    price: price,
    img: img
  })
  .then(p => {
   return res.json(p)
  })
})

server.put("/", (req, res) => {
  const {id} = req.body
  console.log(id)
  Product.destroy({
    where: {
      id: id
    }
  })
  .then(() => {
    return res.json({message: "Delete"})
  })
  console.log(req.body)
})
module.exports = server;
