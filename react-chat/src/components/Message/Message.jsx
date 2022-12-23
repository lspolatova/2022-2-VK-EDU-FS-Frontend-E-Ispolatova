import { break_line } from '../';
import "./Message.scss"
export function Message(props) {
    return (
        <>
            <div className="speech">
                <p className="message">
                    {props.message}
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