import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { break_line } from '../';
import "./Chat.scss"
import {Link} from 'react-router-dom'
export function Chat(props) {
    return (
        <>
            <Link to={`/chat/${props.name}`} style={{ textDecoration: 'none' , color: 'black', width: '100%'}}>
                <article className="chat" onClick={props.changePage}>
                    <AccountCircleIcon/>
                    <div className='info_chat'>
                        <div>
                            <div>{props.name}</div>
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
                {break_line}
            </Link>
        </>
    );
}