import ChatConnect from "../Chat/Chat";
import "./List_chats.scss";
import React, { useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import { getChat } from '../../actions';

export function List_chats(props) {
    let chat = [];
    useEffect(() => {
        Notification.requestPermission();
        props.getChat()   
    }, []); 
    for (let get_chat in props.chat){
        chat.push(<ChatConnect key = {props.chat[get_chat].title}
                        name = {props.chat[get_chat].title}
                        address = {`${"http://127.0.0.1:7000/chats/message_list_add/?id_chat="}${props.chat[get_chat].id}`}
                        id = {props.chat[get_chat].id}
                />)
    }
    chat.push(<ChatConnect key = {'tt-front'}
                    name = {'tt-front'}
                    address = {'https://tt-front.vercel.app/messages'}
                    id = {'tt-front'}
            />)     
    const chatEndRef = useRef(null);
    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        scrollToBottom()
    }, [chat]);
    return(
        <div className="list_chats">
            {chat}
            <div ref={chatEndRef} />
        </div>
    );
}

const mapStateProps = (state) => ({
    chat: state.chat.chat,
    loading: state.chat.loading
})

let List_chatConnect = connect(mapStateProps, {getChat})(List_chats);
export default List_chatConnect;
