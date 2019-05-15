import * as types from './../constant/ActionType';
import * as mess from './../constant/Message';

const messInitialState = mess.MES_WELLCOME;
const message = (state = messInitialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESS:
                return mess.MESS_ADD_TO_CART_SUCCSESS
        case mess.MESS_DELETE_SUCCESS :
                return mess.MESS_DELETE_SUCCESS;
        default:
            return state
    }
}

export default message;