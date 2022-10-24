import { MaxIndex } from "./local_storage.js";
const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const display = document.querySelector('.display');

let max_index = new MaxIndex();
let index = '0';
function rendering_messages(message, time){
    const new_speech = document.createElement('div');
    new_speech.className = "speech";
    const new_message = document.createElement('p');
    new_message.className = "message";
    new_message.textContent = message;
    new_speech.append(new_message);
    const new_time = document.createElement('p');
    new_time.className = "small_message";
    new_time.textContent = time;
    new_speech.append(new_time);              
    const new_tip = document.createElement('span');
    new_tip.className = 'tip';
    new_speech.append(new_tip);
    display.append(new_speech);
    const new_break = document.createElement('div');
    new_break.className = "break"
    display.append(new_break); 
}

while(parseInt(index) <= parseInt(max_index.index)){
    rendering_messages(JSON.parse(localStorage.getItem(index)).message, JSON.parse(localStorage.getItem(index)).time_loc)
    index = (parseInt(index) + 1).toString();
}

form.addEventListener('keypress', handleKeyPress.bind(this));

function handleSubmit (event) {
    max_index.index = index;
    event.preventDefault();
    let now = new Date();
    rendering_messages(input.value, now.toLocaleTimeString().slice(0, -3))
    const loc = {
        sender: 'sender', 
        time_loc: now.toLocaleTimeString().slice(0, -3),
        message:  input.value
    };
    localStorage.setItem(index,  JSON.stringify(loc));
    index = (parseInt(index) + 1).toString();
    input.value = "";
}

function handleKeyPress (event) {
    if (event.keyCode === 13) {
        handleSubmit(event);
    }
}
