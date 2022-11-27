import { Cap, List_chats, edit, break_line } from "../../components";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export function Chat_list(props) {
    return (
       <>
           <Cap>
                <MenuIcon/>
                <div className="page_name">Messenger</div>
                <SearchIcon/>
           </Cap>
           <List_chats changePage = {props.changePage}/>
           {break_line}
           {edit}
       </>
    );
}