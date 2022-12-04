import { Cap, break_line, Display, Form, Back} from "../../components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./ChatPage.scss"
import { MaxIndex } from "../../utils";
import {useState} from 'react';
import { useParams } from "react-router-dom";

export function ChatPage(props) {
    const params = useParams();
    let max_index = new MaxIndex(params.name);
    const [index_max, setIndex] = useState(max_index.index);
    return (
       <div id = "ChatPage">
           <Cap>
                <Back/>
                <AccountCircleIcon/>
                <div>
                    <div className="page_name">{params.name}</div>
                    <div className="small_elements_top">была 2 часа назад</div>
                </div>
                <SearchIcon/>
                <MoreVertIcon/>
                {break_line}
           </Cap>
           <Display index_max = {index_max} name = {params.name}/>
           <Form setIndex = {setIndex} name = {params.name}/>
       </div>
    );
}