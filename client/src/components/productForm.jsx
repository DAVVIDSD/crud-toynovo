import React from 'react';
import ReactDOM from 'react-dom';
import {Formik, Field, Form} from 'formik';
import "./productForm.scss";
import { Link } from "react-router-dom";
import Axios from 'axios';
import { postProduct , getProduct} from "../redux/Actions/productAction";
import {useDispatch, useSelector  } from "react-redux";
const ProductForm = () => {
  const dispatch = useDispatch()
  // const reload = () => {
  //   window.location.reload("/products");
  // } 
  return (
   <div className="body"> 
    <div className="container">
       
      <h1>Product Form</h1>

      <Formik
        initialValues={{
          title: '',
          price: '',
          img: '',
          description: '',
        }}

        onSubmit={(values,{resetForm}) => {
          dispatch(postProduct(values))
          return resetForm()
        }}
      >
        <Form className="form">
          <Field className="input" id="title" name="title" placeholder="title" />
          <Field className="input" id="price" name="price" placeholder="price" />
          <Field className="input" id="img" name="img" placeholder="image url" />
          <Field
            className="textarea"
            as="textarea"
            id="description"
            name="description"
            placeholder="Descripcion..."
          />
          <div className="button-container">
            <button className="btn" type="submit">Add Product</button>
            <button className="btn" onClick={() => window.location.replace("/products")}>Your Products</button>
          </div>
        </Form>
      </Formik>
    </div>
    </div>
  )
}

export default ProductForm;
