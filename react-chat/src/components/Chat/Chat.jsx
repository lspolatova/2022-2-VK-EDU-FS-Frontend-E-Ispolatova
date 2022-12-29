import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { break_line } from '../';
import "./Chat.scss"
import {Link} from 'react-router-dom'
import React, { useEffect} from 'react';
import {useState} from 'react';
import { Centrifuge } from 'centrifuge';
import { Image_text_audio } from '../';

function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.autoplay = true;
}


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



function update_back_chat(setMessage, setColvo, name, id, centrifuge){   
    const sub = centrifuge.newSubscription(id.toString());
    sub.on('publication', function(ctx) {let date = new Date(ctx.data["date_create"]);
                                        setMessage({'text': ctx.data["content"], 'name': ctx.data["sender"], 'time': date.toString().substring(16, 21)});
                                        setColvo(parseInt(localStorage.getItem(name))+1);
                                        if((window.location.hash != '#/')&&(window.location.href != '')){
                                            if(window.location.href.split('_')[1]!=id.toString()){
                                                new Notification('New message '+ctx.data["sender"]+': '+ctx.data["content"]);
                                                beep();
                                            }
                                        }
    });
    sub.subscribe();
    centrifuge.connect();
}

function update_common_chat(setMessage, setColvo, name, sse){
    let date;
    let date_send;
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
                                    if(window.location.hash != '' && window.location.hash != '#/'){
                                        if(window.location.hash != '#/chat/tt-front_tt-front'){
                                            new Notification('New message '+author+': '+text);
                                            beep();
                                        }
                                    }                            
                                 }
    };
    sse.onerror = function() {
        console.log('EventSource failed.');
    };
}

function remove_connections(id, sse, centrifuge){
    if(id == "tt-front" && sse){
        sse.close();
    }else{
        if(centrifuge){
            for (let sub in centrifuge.subscriptions()){
                centrifuge.removeSubscription(centrifuge.subscriptions()[sub]);
            }
        }  
    }
}

let centrifuge = new Centrifuge('ws://127.0.0.1:8000/connection/websocket');
let sse;
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
        remove_connections(props.id, sse, centrifuge)
        Notification.requestPermission();
        fetch(props.address)
       .then(response => response.json())
       .then(data => {if(props.name == "tt-front"){
                        colvo_now = get_common_chat(data, props.name, setMessage, setColvo)
                      }else{
                        colvo_now = get_back_chat(data, props.name, setMessage, setColvo);
                      }
                    })
       .then(() =>{if(props.name == "tt-front"){
                       sse =  new EventSource('http://localhost:9000/messages-sse');
                       update_common_chat(setMessage, setColvo, props.name, sse);
                   }else{
                       update_back_chat(setMessage, setColvo, props.name, props.id, centrifuge);
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
                                <Image_text_audio message = {message['text']}/>
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