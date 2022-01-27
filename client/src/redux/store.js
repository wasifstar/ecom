
import {createStore,combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { getProductReducer,getProductDetailsReducer } from "./reducers/productReducer";
import {cartReducer} from './reducers/cartReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
 //wasif mohammad khan
const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer,
});

//no store found so add this middleware
const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;