import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export function Back(props) {
    return (
        <ArrowBackIcon onClick={props.changePage}/>
    );
}
