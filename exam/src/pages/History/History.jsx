import { HistoryCap } from "../../components";
import { HistoryList } from "../../components";
import { useState } from "react";

export function History(props) {
    const [hist, setHist] = useState(0);
    return (
       <div id = "History">
           <HistoryCap setHist={setHist}/>
           <HistoryList hist={hist} setHist={setHist}/>
       </div>
    );
}