import React from "react";
import { Chat_list, ChatPage } from "./pages";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'chat_list'
        };
        this.changePage = this.changePage.bind(this)
    }
    changePage() {
      this.setState({
        page: 'chat'
      })
    }

    render() {
        if(this.state.page == 'chat_list'){
            return(<Chat_list changePage = {this.changePage}/>)
        }else{
            return(<ChatPage/>)
        }
    }
}

export default App;
