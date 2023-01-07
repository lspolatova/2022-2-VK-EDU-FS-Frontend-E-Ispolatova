import {GET_MESSAGE_FAILURE} from "../components/constants/ActionTypes"
import {GET_MESSAGE_REQUEST} from "../components/constants/ActionTypes"
import {GET_MESSAGE_SUCCESS} from "../components/constants/ActionTypes"

const initialState = {
    loading: false,
    message: {
        'chat':'',
        'content':[]},
    error: '',
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_MESSAGE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_MESSAGE_SUCCESS:
            return{
                loading: false,
                message:action.payload,
                error: '',
            }
        case GET_MESSAGE_FAILURE:
            return{
                loading: false,
                message:state.message,
                error: action.payload
            }
        default:
            return state
    }
}