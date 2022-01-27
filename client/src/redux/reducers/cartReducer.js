
import * as actionType from '../constants/cartConstant';
//wasif mohammad khan

export const cartReducer = (state = {cartItems: []}, action ) => {
    switch(action.type){
        
        case actionType.ADD_TO_CARD:

        const item = action.payload;

        const exist = state.cartItems.find(product => product.id === item.id)//conditin check for exist item

        if(exist)return;
       
        return{...state,cartItems:[...state.cartItems,item]}

        case actionType.REMOVE_FROM_CART:
        
        return{...state,cartItems: state.cartItems.filter(product => product.id !== action.payload)};

        default:
        return state;
    }  
}