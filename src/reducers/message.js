import * as types from './../constant/ActionType';
import * as mess from './../constant/Message';

const messInitialState = mess.MES_WELLCOME;
const message = (state = messInitialState, action) => {
    switch (action.type) {
      
        default:
            return state
    }
}

export default message;