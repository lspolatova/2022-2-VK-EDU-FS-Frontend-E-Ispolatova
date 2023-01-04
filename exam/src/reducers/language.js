import { GET_LANGUAGE_FAILURE } from "../components/constants/ActionTypes"
import { GET_LANGUAGE_REQUEST } from "../components/constants/ActionTypes"
import { GET_LANGUAGE_SUCCESS } from "../components/constants/ActionTypes"

const initialState = {
    loading: false,
    language: [],
    error: '',
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_LANGUAGE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_LANGUAGE_SUCCESS:
            return{
                loading: false,
                language:[action.payload.translation],
                error: '',
            }
        case GET_LANGUAGE_FAILURE:
            return{
                loading: false,
                language:state.language,
                error: action.payload
            }
        default:
            return state
    }
}