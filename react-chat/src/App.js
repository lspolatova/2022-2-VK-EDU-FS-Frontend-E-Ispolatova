import React from "react";
import { Chat_list, ChatPage } from "./pages";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'chat_list'
        };
        this.changePage = this.changePage.bind(this)
        this.changePage_back = this.changePage_back.bind(this)
    }
    changePage() {
      this.setState({
        page: 'chat'
      })
    }
    changePage_back() {
        this.setState({
          page: 'chat_list'
        })
    }

    render() {
        if(this.state.page === 'chat_list'){
            return(<Chat_list changePage = {this.changePage}/>)
        }else{
            return(<ChatPage changePage = {this.changePage_back}/>)
        }
    }
}

export default App;
