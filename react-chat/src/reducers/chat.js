import { GET_CHAT_FAILURE } from "../components/constants/ActionTypes"
import { GET_CHAT_REQUEST } from "../components/constants/ActionTypes"
import { GET_CHAT_SUCCESS } from "../components/constants/ActionTypes"

const initialState = {
    loading: false,
    chat: [],
    error: '',
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_CHAT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_CHAT_SUCCESS:
            return{
                loading: false,
                chat:action.payload,
                error: '',
            }
        case GET_CHAT_FAILURE:
            return{
                loading: false,
                chat:state.chat,
                error: action.payload
            }
        default:
            return state
    }
}


