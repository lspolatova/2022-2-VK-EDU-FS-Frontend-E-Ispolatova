import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { break_line } from '../';
import "./Chat.scss"
export function Chat(props) {
    return (
        <article className="chat" onClick={props.changePage}>
            <AccountCircleIcon/>
            <div className='info_chat'>
                <div>
                    <div>Дженнифер</div>
                    {break_line}
                    <div className='small_message'>
                        {props.last_message}
                    </div>
                </div>
                <div className='indicators'>
                    <div className='small_message'>
                        {props.last_time}
                    </div>
                    {break_line}
                    <div className='not_read'>
                        {props.colvo}
                    </div>
                </div>
            </div>
        </article>
    );
}