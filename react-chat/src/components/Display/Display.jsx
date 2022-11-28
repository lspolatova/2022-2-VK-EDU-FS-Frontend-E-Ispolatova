import "./Display.scss";
import "../Chat/Chat.scss";
import { Message } from "../Message";
import React, { useEffect, useRef } from 'react'

export function Display(props) {
    let index_speech = 0;
    let messages = [];
    const messagesEndRef = useRef(null)
    
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    while(index_speech <= parseInt(props.index_max)){
        messages.push(<Message key = {index_speech}
            message = {JSON.parse(localStorage.getItem(index_speech)).message}
            time_loc = {JSON.parse(localStorage.getItem(index_speech)).time_loc}
        />);
        ++index_speech;
    }
    return(
        <div className="display">
            {messages}
            <div ref={messagesEndRef} />
        </div>
    );
}
