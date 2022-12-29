import {useState} from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MicIcon from '@mui/icons-material/Mic';
import "./Form.scss";
import {useEffect} from 'react';

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

let voice;
let mediaRecorder;
export const Form = (props) => {
  const [message, setMessage] = useState('');
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    voice = [];
    navigator.mediaDevices.getUserMedia({ audio: true})
    .then(stream => {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (e) => {
          voice.push(e.data);
          const voiceBlob = new Blob(voice, {type: mediaRecorder.mimeType});
          voice = [];
          let formData = new FormData();
          formData.append('audio', voiceBlob);
          let url = 'https://tt-front.vercel.app/upload'
          fetch(url, {
              method: 'POST',
              body: formData
          })
          .then(response => response.json())
          .then(data => {send_message('audio:'+data.audio+' '+data.audioSrc, props.id);})
        };
    });
  }, []);
 
  function send_message(message_new, id){
    if(id == "tt-front"){
      postData('http://localhost:9000/message', {author: 'Avotalopsi',
                                               text: message_new,})
    }else{
      let date = new Date();
      postData(`http://127.0.0.1:7000/chats/message_list_add/?id_chat=${id}`, {content: message_new, sender: 1, date_create: date.toString()})
    }
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      send_message(message, props.id);
      setMessage('')
    }
  };

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    send_message(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`, props.id);
  }

  function error() {
    console.log('Невозможно получить ваше местоположение');
  }

  const addLocation = event => {
      event.preventDefault();
      if (!navigator.geolocation) {
          console.log('Geolocation не поддерживается вашим браузером');
      } else {
          navigator.geolocation.getCurrentPosition(success, error);
      }
  };

  const handleDrop = event => {
    event.preventDefault();
    let dt = event.dataTransfer
    let files = dt.files;
    let url = 'https://tt-front.vercel.app/upload'
    let formData = new FormData()
    formData.append('image', files[0])
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {send_message('image:'+data.image+' '+data.imgSrc, props.id);})
  };

  const startRecord = event => {
      if(isActive){
        mediaRecorder.stop();   
        setIsActive(false);
      }else{
        mediaRecorder.start();
        setIsActive(true);
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
        onDrop = {handleDrop}
      />
      <AttachFileIcon/>
      <AddLocationIcon onClick={addLocation}/>
      <MicIcon onClick={startRecord} style={{color: isActive ? 'red' : ''}}/>
    </form>
  );
};