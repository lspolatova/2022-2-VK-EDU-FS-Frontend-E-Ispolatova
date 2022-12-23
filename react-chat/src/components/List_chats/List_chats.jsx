import { Chat } from "../";
import "./List_chats.scss";
import React, { useEffect, useRef } from 'react';
import {useState} from 'react';

export function List_chats(props) {
    const [chat, setTheArray] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:7000/chats/list_add/')
            .then(response => response.json())
            .then(data => {
                for (let get_chat in data){
                    setTheArray(chat => [...chat, <Chat key = {data[get_chat].title}
                                                        name = {data[get_chat].title}
                                                        address = {`${"http://127.0.0.1:7000/chats/message_list_add/?id_chat="}${data[get_chat].id}`}
                                                        id = {data[get_chat].id}
                    />]);
                }
                setTheArray(chat => [...chat, <Chat key = {'tt-front'}
                    name = {'tt-front'}
                    address = {'https://tt-front.vercel.app/messages'}
                    id = {'tt-front'}
                />]);      
            })
    }, []); 
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