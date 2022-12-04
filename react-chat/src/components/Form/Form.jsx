import {useState} from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import "./Form.scss"
import { MaxIndex } from '../../utils';

export const Form = (props) => {
  const [message, setMessage] = useState('');
  let max_index = new MaxIndex(props.name);
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      (parseInt(max_index.index) + 1).toString()
      max_index.index = (parseInt(max_index.index) + 1).toString();
      let now = new Date();
      const loc = {
          sender: 'sender', 
          time_loc: now.toLocaleTimeString().slice(0, -3),
          message:  message
      };
      localStorage.setItem(`${max_index.index}_${props.name}`,  JSON.stringify(loc));
      props.setIndex(max_index.index)
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