import './HistoryCap.scss';

export function HistoryCap(props) {
    function clear(){
        localStorage.clear();
        props.setHist(0)
    }
    return (
        <div className={"HistoryCap"}>
            История
            <button onClick={clear}>Очистить историю</button>
        </div>
    );
}