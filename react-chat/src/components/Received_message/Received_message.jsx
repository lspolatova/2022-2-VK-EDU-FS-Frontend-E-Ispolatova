import { break_line } from '..';
import "./Received_message.scss"
import { Image_text_audio } from '..';
export function Received_message(props) {
    return (
        <>
            <div className="speech_receive">
                <p className="message_receive">
                    <Image_text_audio message = {props.message}/>
                </p>
                <p className="small_message">
                    {props.time_author}
                </p>
            </div>
            {break_line}
        </>
    );
}