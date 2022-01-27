import axios from "axios";
import * as action from '../constants/productsConstants';//all file contant import

//const url = 'http://localhost:8000';
const url = '';
//middleware thunk use as (async(dispatch) =>)
//wasif mohammad khan
export const getProducts = ()=> async(dispatch) =>{
    try{
        
        const {data} =  await axios.get(`/products`);
        dispatch({type: action.GET_PRODUCT_SUCCESS, payload: data});//match a value to rducer

    }catch(error){
        dispatch({type: action.GET_PRODUCT_FAIL, payload: error.response});//match a value to rducer
    }
} 

export const getProductDetails = (id) => async(dispatch) => {
    try{
        
        const {data} =  await axios.get(`/product/${id}`);
        dispatch({type: action.GET_PRODUCT_DETAIL_SUCCESS, payload: data});//match a value to rducer
    }catch(error){
        dispatch({type: action.GET_PRODUCT_DETAIL_FAIL, payload: error.response});//match a value to rducer

    }

}

