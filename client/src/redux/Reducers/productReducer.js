import { GET_PRODUCTS, POST_PRODUCTS, DELETE_PRODUCT } from "../Actions/actionTypes";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
      case POST_PRODUCTS:
        return {
          ...state,
          products: action.payload
        }
    default: return state;
  }
}

export default productsReducer;