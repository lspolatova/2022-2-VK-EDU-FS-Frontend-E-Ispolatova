import { Cap, List_chats, edit, break_line } from "../../components";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'

export function Chat_list(props) {
    return (
       <>
           <Cap>
               <Link to={`/profile`} style={{ textDecoration: 'none' , color: 'white', zoom: '1.5', padding: '0.5rem', height: '10px'}}>
                    <MenuIcon/>
                </Link>
                <div className="page_name">Messenger</div>
                <SearchIcon/>
           </Cap>
           <List_chats/>
           {break_line}
           {edit}
       </>
    );
}