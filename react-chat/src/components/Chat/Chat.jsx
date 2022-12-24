import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { break_line } from '../';
import "./Chat.scss"
import {Link} from 'react-router-dom'
import React, { useEffect} from 'react';
import {useState} from 'react';
import { Centrifuge } from 'centrifuge';

function get_back_chat(data, name, setMessage, setColvo){
    let date = new Date(data.at(0).date_create)
    setMessage({'text': data.at(0).content, 'name': data.at(0).sender, 'time': date.toString().substring(16, 21)});
    setColvo(data.length)
    return data.length
}

function get_common_chat(data, name, setMessage, setColvo){
    let date = new Date(data.at(-1).timestamp)
    setMessage({'text': data.at(-1).text, 'name': data.at(-1).author, 'time': date.toString().substring(16, 21)});
    setColvo(data.length)
    return data.length
}

function update_back_chat(setMessage, setColvo, name, id){
    const centrifuge = new Centrifuge('ws://127.0.0.1:8000/connection/websocket');
    const sub = centrifuge.newSubscription(id.toString());

    sub.on('publication', function(ctx) {let date = new Date(ctx.data["date_create"]);
                                        setMessage({'text': ctx.data["content"], 'name': ctx.data["sender"], 'time': date.toString().substring(16, 21)});
                                        setColvo(parseInt(localStorage.getItem(name))+1);
    });
    sub.subscribe();
    centrifuge.connect();
}

function update_common_chat(setMessage, setColvo, name){
    let date;
    let date_send;
    var sse; 
    sse = new EventSource('http://localhost:9000/messages-sse');
    sse.onopen = function() {date = new Date();
                             date.setHours(date.getHours() - 3);
                             date.setMilliseconds(0);
                             date = date.getTime();};
    sse.onmessage = function(e) {let opType;
                                 let author;
                                 let text;
                                 let time;
                                 try {
                                    const msg = JSON.parse(e.data);
                                    opType = msg.operationType;
                                    author = msg.author;
                                    text = msg.text;
                                    time = msg.timestamp;
                                    date_send = new Date( Date.parse(time.substr(0, time.length-1)) );
                                    date_send.setMilliseconds(0);
                                    date_send = date_send.getTime();
                                } catch {
                                    console.log(e.data)
                                    opType = null
                                 }
                                 if ((!opType || opType === 'insert') && ((date < date_send)|| (date == date_send))) {
                                    setMessage({'text': text, 'name': author, 'time': time.substr(11, 5)});
                                    setColvo(parseInt(localStorage.getItem(name))+1);                              
                                 }
    };
    sse.onerror = function() {
        console.log('EventSource failed.');
    };
}

export function Chat(props) {
    const [message, setMessage] = useState({});
    const [colvo, setColvo] = useState('');
    let colvo_now;
    useEffect(()=>{
        if (colvo !== ''){
            localStorage.setItem(props.name, colvo);
        }
    }, [colvo]);
    useEffect(() => {
        fetch(props.address)
       .then(response => response.json())
       .then(data => {if(props.name == "tt-front"){
                        colvo_now = get_common_chat(data, props.name, setMessage, setColvo)
                      }else{
                        colvo_now = get_back_chat(data, props.name, setMessage, setColvo);
                      }
                    })
       .then(() =>{if(props.name == "tt-front"){
                       update_common_chat(setMessage, setColvo, props.name, colvo_now);
                   }else{
                       update_back_chat(setMessage, setColvo, props.name, props.id, colvo_now);
                   }
            })
    }, []); 
    return (
        <>
            <Link to={`/chat/${props.name}_${props.id}`} style={{ textDecoration: 'none' , color: 'black', width: '100%'}}>
                <article className="chat" onClick={props.changePage}>
                    <AccountCircleIcon/>
                    <div className='info_chat'>
                        <div>
                            <div>{props.name}</div>
                            {break_line}
                            <div className='small_message'>
                                {message['text']}
                            </div>
                        </div>
                        <div className='indicators'>
                            <div className='small_message'>
                                {message['time']}
                            </div>
                            {break_line}
                            <div className='not_read'>
                                {colvo}
                            </div>
                        </div>
                    </div>
                </article>
                {break_line}
            </Link>
        </>
    );
}