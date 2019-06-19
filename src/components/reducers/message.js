import  * as Message from '../constants/Message';
import * as Types from '../constants/ActionType'

const initialState=Message.MSG_WELLCOM;

const message = (state= initialState, action) =>{
	switch (action.type) {
		case Types.SHOW_MSG:
		 	return action.message
		default: return state;
	}
}

export default message;