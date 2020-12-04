import { createStore, applyMiddleware, compose, combineReducers  } from "redux";
import thunk from "redux-thunk";
import productsReducer from "../Reducers/productReducer";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
  }),
  composeEnhancer(applyMiddleware(thunk))
);
export default store;