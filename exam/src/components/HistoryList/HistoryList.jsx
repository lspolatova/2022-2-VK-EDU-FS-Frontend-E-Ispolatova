import '../HistoryCap/HistoryCap.scss';
import { useEffect } from 'react';
export function HistoryList(props) {
    let list=[]
    useEffect(() => {
        if(localStorage.getItem('colvo')){
            props.setHist(parseInt(localStorage.getItem('colvo')))
        }
    }, []);
    for(let i = props.hist; i>0; i--){
        let res = localStorage.getItem(i).split(',')
        list.push(<div key={i} className={"HistoryCap"}>
                      <p>
                          {res[0]+' -> '+res[1]+': '}
                      </p>
                       <p>
                           {res[2]+' -> '+res[3]}
                      </p>
                 </div>)
    }
    return (
        <> 
            {list}
        </>
    );
}