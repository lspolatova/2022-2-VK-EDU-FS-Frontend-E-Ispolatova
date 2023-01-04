import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {Link} from 'react-router-dom';
export function HistoryButton(props) {
    return (
        <Link to={`/history`}>
            <AccessTimeIcon style={{zoom:3}}/>
        </Link>
    );
}