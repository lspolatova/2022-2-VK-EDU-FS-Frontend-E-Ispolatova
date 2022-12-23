import {useState} from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import "./Form.scss"

function postData(url = '', data = {}) {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
}

export const Form = (props) => {
  const [message, setMessage] = useState('');
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if(props.id == "tt-front"){
        postData('http://localhost:9000/message', {author: 'Avotalopsi',
                                                 text: message,})
      }else{
        let date = new Date();
        postData(`http://127.0.0.1:7000/chats/message_list_add/?id_chat=${props.id}`, {content: message, sender: 1, date_create: date.toString()});
      }
      setMessage('')
    }
  };
  return (
    <form className="form" action="/">
      <input
        onChange={event => setMessage(event.target.value)}
        onKeyDown={handleKeyDown}
        className="form-input" 
        name="message-text" 
        placeholder="Cообщение" 
        type="text"
        value={message}
      />
      <AttachFileIcon/>
    </form>
  );
};