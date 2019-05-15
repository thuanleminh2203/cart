import * as types from './../constant/ActionType';
import * as message from './../constant/Message';

export const actAddToCart = (product,quantity) =>{
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMess = (mess) => {
    return {
        type: types.CHANGE_MESS,
        mess
    }
}
export const actDeleteProduct = (product) => {
    return {
        type: types.DELETE_PRODUCT,
        product
    }
}

export const actMessDeleteProduct = mess => {
    return {
        type: message.MESS_DELETE_SUCCESS,
        mess 
    
    
    }
}
export const actUpdateQuantityProduct= (product,quantity)=>{
    return {
        type: types.UPDATE_PRODUCT_INT_CART,
        product,
        quantity

    }
}