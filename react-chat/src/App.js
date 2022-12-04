import React from "react";
import { Chat_list, ChatPage, Profile } from "./pages";
import {HashRouter, Route, Routes} from 'react-router-dom'

class App extends React.Component {
    render() {
        return(
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Chat_list/>}/>
                    <Route path='/chat/:name' element={<ChatPage/>} />
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
            </HashRouter>
        )
    }
}

export default App;
