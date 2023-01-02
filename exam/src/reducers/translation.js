import { GET_TRANSLATION_FAILURE } from "../components/constants/ActionTypes"
import { GET_TRANSLATION_REQUEST } from "../components/constants/ActionTypes"
import { GET_TRANSLATION_SUCCESS } from "../components/constants/ActionTypes"

const initialState = {
    loading: false,
    translation: '',
    error: '',
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_TRANSLATION_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_TRANSLATION_SUCCESS:
            return{
                loading: false,
                translation:action.payload,
                error: '',
            }
        case GET_TRANSLATION_FAILURE:
            return{
                loading: false,
                translation:state.translation,
                error: action.payload
            }
        default:
            return state
    }
}