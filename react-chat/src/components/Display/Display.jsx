import "./Display.scss";
import "../Chat/Chat.scss";
import { Message } from "../Message";
import { Received_message } from "../";
import React, { useEffect, useRef } from 'react';
import {useState} from 'react';
import { Centrifuge } from 'centrifuge';

function get_back_chat(data, setTheArray, messages){
    for(var i = data.length-1; i >= 0; i--){
        let date = new Date(data.at(i).date_create);
        let text = data.at(i).content;
        let author = data.at(i).sender;
        let key = i.toString();
        if(author == 'Avotalopsi'){
            setTheArray(messages => [...messages, <Message key = {key}
                                                           message = {text}
                                                           time_loc = {`${date.toString().substring(16, 21)}`}
                                                  />]);
        }
        else{
            setTheArray(messages => [...messages, <Received_message key = {key}
                                                                    message = {text}
                                                                    time_author = {`${author} ${date.toString().substring(16, 21)}`}
                                                  />]);
        }
    }
}

function get_common_chat(data, setTheArray, messages){
    for(var i = 0; i < data.length; i++){
        let date = new Date(data.at(i).timestamp);
        let text = data.at(i).text;
        let author = data.at(i).author;
        let key = i.toString();
        if(author == 'Avotalopsi'){
            setTheArray(messages => [...messages, <Message key = {key}
                                                           message = {text}
                                                           time_loc = {`${date.toString().substring(16, 21)}`}
                                                  />]);
        }
        else{
            setTheArray(messages => [...messages, <Received_message key = {key}
                                                                    message = {text}
                                                                    time_author = {`${author} ${date.toString().substring(16, 21)}`}
                                                  />]);
        }
    }
}

function update_back_chat(id, setTheArray, messages){
    const centrifuge = new Centrifuge('ws://127.0.0.1:8000/connection/websocket');
    const sub = centrifuge.newSubscription(id);

    sub.on('publication', function(ctx) {
        let date = new Date(ctx.data["date_create"]);
        let text = ctx.data["content"];
        let author = ctx.data["sender"];
        let key = ctx.data["date_create"];
        if(author == 'Avotalopsi'){
            setTheArray(messages => [...messages, <Message key = {key}
                                                           message = {text}
                                                           time_loc = {`${date.toString().substring(16, 21)}`}
                                    />]);
        }
        else{
                setTheArray(messages => [...messages, <Received_message key = {key}
                                                                        message = {text}
                                                                        time_author = {`${author} ${date.toString().substring(16, 21)}`}
                                        />]);
        }
        });
        sub.subscribe();
        centrifuge.connect();
}

function update_common_chat(setTheArray, messages){
    var sse; 
    let date;
    let date_send;
    sse = new EventSource('http://localhost:9000/messages-sse');
    sse.onopen = function() { date = new Date();
                              date.setHours(date.getHours() - 3);
                              date.setMilliseconds(0);
                              date = date.getTime();};
    sse.onmessage = function(e) {
        let opType;
        let author;
        let text;
        let time;
        try {const msg = JSON.parse(e.data);
             opType = msg.operationType;
             author = msg.author;
             text = msg.text;
             time = msg.timestamp;
             date_send = new Date( Date.parse(time.substr(0, time.length-1)) );
             date_send.setMilliseconds(0);
             date_send = date_send.getTime();
        } catch {
             console.log(e.data)
             opType = null}
        if ((!opType || opType === 'insert') && (date <= date_send)) {
                if(author == 'Avotalopsi'){
                    setTheArray(messages => [...messages, <Message key = {time}
                                                                   message = {text}
                                                                   time_loc = {`${time.substr(11, 5)}`}
                                            />]);
                }
                else{
                    setTheArray(messages => [...messages, <Received_message key = {time}
                                                                            message = {text}
                                                                            time_author = {`${author} ${time.substr(11, 5)}`}
                                            />]);
                }                                                                                            
        }
    };
    sse.onerror = function() {
        console.log('EventSource failed.');
    };
}

export function Display(props) {
    const [messages, setTheArray] = useState([]);
    let adress = (props.id == "tt-front") ? "https://tt-front.vercel.app/messages" : `http://127.0.0.1:7000/chats/message_list_add/?id_chat=${props.id}`;
    
    useEffect(() => {
        fetch(adress)
        .then(response => response.json())
        .then(data => {if(props.id == "tt-front"){
                        get_common_chat(data, setTheArray, messages);
                      }else{
                        get_back_chat(data, setTheArray, messages);
                      }
            })
        .then(() =>{if(props.id == "tt-front"){
                        update_common_chat(setTheArray, messages);
                    }else{
                        update_back_chat(props.id, setTheArray, messages);
                    }
            })
    }, []);
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return(
        <div className="display">
            {messages}
            <div ref={messagesEndRef} />
        </div>
    );
}
