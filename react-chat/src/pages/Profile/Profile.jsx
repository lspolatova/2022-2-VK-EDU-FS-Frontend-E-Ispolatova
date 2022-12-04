import { Cap, Back, photo, break_line, Form_profile} from "../../components";
import CheckIcon from '@mui/icons-material/Check';

export function Profile(props) {
    return (
       <>
           <Cap>
                <Back/>
                <div className="page_name">Edit Profile</div>
                <CheckIcon/>
           </Cap>
           {break_line}
           {photo}
           <Form_profile name = "Full name"/>
           <Form_profile name = "Username" remark = "Minimum lenth is 5 characters"/>
           <Form_profile name = "Bio" remark = "Any details about you"/>
       </>
    );
}