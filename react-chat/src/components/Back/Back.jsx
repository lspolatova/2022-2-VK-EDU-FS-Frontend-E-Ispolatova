import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'
export function Back(props) {
    return (
        <Link to={`/`} style={{ textDecoration: 'none' , color: 'white', zoom: '1.5', padding: '0.5rem', height: '10px'}}>
            <ArrowBackIcon/>
        </Link>
    );
}