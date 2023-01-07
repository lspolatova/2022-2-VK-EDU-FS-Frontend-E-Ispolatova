import { Cap, edit, break_line } from "../../components";
import List_chatConnect from "../../components/List_chats/List_chats";
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
           <List_chatConnect/>
           {break_line}
           {edit}
       </>
    );
}