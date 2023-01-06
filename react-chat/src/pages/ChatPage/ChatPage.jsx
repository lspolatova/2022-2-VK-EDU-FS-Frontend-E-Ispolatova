import { Cap, break_line, Display, Form, Back} from "../../components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./ChatPage.scss"
import {useState} from 'react';
import { useParams } from "react-router-dom";
import DisplayConnect from "../../components/Display/Display";

export function ChatPage(props) {
    const params = useParams();
    let remark = ((params.name == 'tt_chat') ? 'Общий чат' : 'была 2 часа назад');
    return (
       <div id = "ChatPage">
           <Cap>
                <Back/>
                <AccountCircleIcon/>
                <div>
                    <div className="page_name">{params.name.split('_')[0]}</div>
                    <div className="small_elements_top">{remark}</div>
                </div>
                <SearchIcon/>
                <MoreVertIcon/>
                {break_line}
           </Cap>
           <DisplayConnect name = {params.name} id = {params.name.split('_')[1]} />
           <Form name = {params.name} id = {params.name.split('_')[1]}/>
       </div>
    );
}