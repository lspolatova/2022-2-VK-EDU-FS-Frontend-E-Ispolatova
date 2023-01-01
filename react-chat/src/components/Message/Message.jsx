import { break_line } from '../';
import "./Message.scss"

export function Image_text_audio(props){
    let src = '';
    if (props.message){
        if (props.message.indexOf("image:true") >= 0){
            src = props.message.split(' ')[1];
            return(
                <img src={src} alt={src} width="100" height="100"></img>
        );}
        if (props.message.indexOf("audio:true") >= 0){
            src = props.message.split(' ')[1];
            return(
                <audio controls src={src} style ={{width: 210}}></audio>
        );}
    }
    return props.message;
}

export function Message(props) {
    return (
        <>
            <div className="speech">
                <p className="message">
                    <Image_text_audio message = {props.message}/>
                </p>
                <p className="small_message">
                    {props.time_loc}
                </p>
                <span className="tip"/>
            </div>
            {break_line}
        </>
    );
}