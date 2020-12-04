import './App.css';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from './components/productForm.jsx';
import Cards from "./components/cards"
import { Route, Switch } from "react-router-dom";
import { getProduct } from "./redux/Actions/productAction";

function App() {
  const dispath = useDispatch()
  const products = useSelector(state => state.products.products)
  useEffect(() => {
    dispath(getProduct())
},[dispath]);

  return (
    // <ProductForm />
    <div>
    <Route exact path="/" render={() => <Form />} />
    <Route  path="/products" render={() => <Cards products={products}/>} />
</div>

  )
}

export default App;
