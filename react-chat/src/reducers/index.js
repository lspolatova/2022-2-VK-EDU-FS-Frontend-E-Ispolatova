import { combineReducers } from "redux";
import chat from "./chat";
import message from "./message";
export default combineReducers({
    chat,
    message
})