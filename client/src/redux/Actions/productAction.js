import Axios  from "axios";
import { GET_PRODUCTS, POST_PRODUCTS, DELETE_PRODUCT  } from "./actionTypes";

const url = "http://localhost:5000";

export const getProduct = () => (dispatch) => {
  Axios.get(`${url}/products/`)
    .then(product => {
      dispatch({
        type: GET_PRODUCTS,
        payload: product.data,
      })
    })
    .catch(error => {
      console.log(error)
      return 'fail!'
    })
};

export const postProduct = (data) => (dispatch) => {
  console.log(data)
  Axios.post(`${url}/products/`,data)
  .then(res => {
    dispatch({
      type: POST_PRODUCTS,
      payload: res.data
    })
  })
}
export const deleteProduct = (id) => (dispatch) => {
 
  Axios.put(`${url}/products/`, id)
  .then(res => {
    dispatch({
      type: DELETE_PRODUCT
    })
    return alert("Delete Product")
  })
}