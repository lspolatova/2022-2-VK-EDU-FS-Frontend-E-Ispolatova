import { combineReducers } from "redux";
import language from "./language";
import translation from "./translation";
export default combineReducers({
    language,
    translation
})