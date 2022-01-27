
import axios from "axios";

import * as actionTypes from '../constants/cartConstant';

//wasif mohammad khan

//const url = 'http://localhost:8000';
const url = '';



export const addToCart = (id) => async(dispatch) =>{
    try{
       const {data} = await axios.get(`/product/${id}`);

       dispatch({type: actionTypes.ADD_TO_CARD, payload: data});

    }catch(error){
        console.log('Error while calling add to cart api');
    }
    
}
export const removeFromCart = (id) => (dispatch) => {
    dispatch({type: actionTypes.REMOVE_FROM_CART,payload: id})
}