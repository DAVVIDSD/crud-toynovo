import React from "react";
import './Card.scss';
import {Link} from "react-router-dom";
import { deleteProduct } from "../redux/Actions/productAction";
import { useDispatch } from "react-redux";

export default function Card({ product }) {
  const dispatch = useDispatch()
  const onClick = (id) => {
    const obj = {
      id
    }
    dispatch(deleteProduct(obj))
    window.location.replace("/products")
  }
  return (
    <div className="card">
      <div className="title">
        {product.title}
    </div>
      <div className="img-container">
        <img className="img" src={product.img} />
      </div>
  <div className="price">${product.price}</div>
      <div className="button-container">
        <button onClick={ () => onClick(product.id)} className="btn">DELETE<span className="bg"></span></button>

        <Link to="/">
        <button className="btn">Add Products<span className="bg"></span></button>
        </Link>
      </div>
    </div>
  )
};