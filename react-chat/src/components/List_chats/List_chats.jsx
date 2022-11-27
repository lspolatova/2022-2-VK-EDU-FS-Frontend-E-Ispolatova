import { Chat } from "../";
import "./List_chats.scss";
import { MaxIndex } from "../../utils";


export function List_chats(props) {
    let max_index = new MaxIndex();
    let chat = [];
    let last_message;
    let last_time;
    let colvo = (parseInt(max_index.index) + 1).toString();
    if (localStorage.getItem(max_index.index)){
        last_message = JSON.parse(localStorage.getItem(max_index.index)).message;
        last_time = JSON.parse(localStorage.getItem(max_index.index)).time_loc;
    }else{
        last_message = last_time = "";
    }
    for (let i = 0; i < 20; i++) {
      chat.push(<Chat key = {i}
                      last_message = {last_message}
                      last_time = {last_time}
                      colvo = {colvo}
                      changePage = {props.changePage}
               />);
    }
    return(
        <div className="list_chats">
            {chat}
        </div>
    );
}