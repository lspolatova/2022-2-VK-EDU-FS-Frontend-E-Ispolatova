import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { break_line } from '../';
import "./Chat.scss"
import {Link} from 'react-router-dom'
import React, { useEffect} from 'react';
import { Centrifuge } from 'centrifuge';
import { Image_text_audio } from '../';
import {connect} from 'react-redux';
import { getMessage } from '../../actions';

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
let message={};
let colvo={};
export function Chat(props) {
    useEffect(() => {
        remove_connections(props.id, sse, centrifuge, colvo);
        message[props.name] = {'text': '', 'name': '', 'time': ''};
        colvo[props.name] = 0;
        if(props.id != "tt-front"){
            props.getMessage(props.address, props.name, props.id, centrifuge);
        }else{
            sse =  new EventSource('http://localhost:9000/messages-sse');
            props.getMessage(props.address, props.name, props.id, sse);
        }
    }, []); 
    if(props.message['chat'] == props.name && !props.loading){
        if(props.name == "tt-front"){
            let date = new Date(props.message['content'].at(-1).timestamp)
            message[props.name] = {'text': props.message['content'].at(-1).text, 'name': props.message['content'].at(-1).author, 'time': date.toString().substring(16, 21)};
        }else{
            let date = new Date(props.message['content'].at(0).date_create)
            message[props.name] = {'text': props.message['content'].at(0).content, 'name': props.message['content'].at(0).sender, 'time': date.toString().substring(16, 21)};
        }
        if(!colvo[props.name]){
            colvo[props.name] = props.message['content'].length;
        }else{
            colvo[props.name] = colvo[props.name]+1;
        }
    }
    if(!message[props.name]){
        message[props.name] = {'text': '', 'name': '', 'time': ''};
        colvo[props.name] = 0;
    }
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
                                <Image_text_audio message = {message[props.name]['text']}/>
                            </div>
                        </div>
                        <div className='indicators'>
                            <div className='small_message'>
                                {message[props.name]['time']}
                            </div>
                            {break_line}
                            <div className='not_read'>
                                {colvo[props.name]}
                            </div>
                        </div>
                    </div>
                </article>
                {break_line}
            </Link>
        </>
    );
}
const mapStateProps = (state) => ({
    message: state.message.message,
    loading: state.message.loading
})

let ChatConnect = connect(mapStateProps, {getMessage})(Chat);
export default ChatConnect;