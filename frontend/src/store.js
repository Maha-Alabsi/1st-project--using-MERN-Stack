import { createStore, combineReducers, applyMiddleware } from 'redux';
// middelware
import thunk from 'redux-thunk';
// to use redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducer';

const reducer = combineReducers({
  products: productListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
