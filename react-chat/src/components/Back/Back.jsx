import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function test_click_event()
{
     alert("Button clicked");
}
export function Back(props) {
    return (
        <ArrowBackIcon onClick={test_click_event}/>
    );
}
