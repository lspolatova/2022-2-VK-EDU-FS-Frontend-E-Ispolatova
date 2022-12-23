import './Cap.scss';
import SquareIcon from '@mui/icons-material/Square';
import CircleIcon from '@mui/icons-material/Circle';
import TornadoIcon from '@mui/icons-material/Tornado';
import { break_line } from '../break_line/break_line';

export function Cap(props) {
    return (
        <div className={"cap"}>
            <div className='small_elements_top'>
                <SquareIcon/>
                <CircleIcon/>
                <TornadoIcon/>
            </div>
            {break_line}
            {props.children}
        </div>
    );
}