import React from "react";
import { HomePage, History} from "./pages";
import {HashRouter, Route, Routes} from 'react-router-dom'

class App extends React.Component {
    render() {
        return(
            <HashRouter>
                <Routes>
                    <Route path= '/' element={<HomePage/>}/>
                    <Route path= '/history' element={<History/>}/>
                </Routes>
            </HashRouter>
        )
    }
}
export default App;
