import './Output.scss'
let message='';
export function Output(props) {
    if(props.message){
        message = props.message;
    }
    return (
        <div className={"Output"}>
            <p>{'Перевод '+ message+':'}</p>
            <p>{props.translation}</p>
        </div>
    );
}