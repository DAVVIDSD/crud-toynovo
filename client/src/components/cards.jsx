import React from "react";
import Card from "./productCard";

const Cards = ({products}) => {
  
  return (
    <div>
      {
        products.map(product => (
          <Card 
          key={product.id}
          product={product}
          />
        ))
      }
    </div>
  )
}
export default Cards