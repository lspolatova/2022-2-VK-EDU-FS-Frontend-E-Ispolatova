import { MaxIndex } from "./local_storage.js";
let max_index = new MaxIndex();
function rendering_chat(last_message, last_time, colvo){
    const list_chats = document.querySelector('.list_chats');
    const chat = document.createElement('article');
    chat.className = "chat";
    chat.onclick = function(event) {
        window.location.href = '/src/chat.html';
    };
    const avatar = document.createElement('div');
    avatar.className = "avatar";
    const icons = document.createElement('div');
    icons.className = "material-icons";
    icons.style = "font-size: 3.5rem;";
    icons.textContent = "account_circle";
    avatar.append(icons);
    chat.append(avatar);
    const info_chat = document.createElement('div');
    info_chat.className = "info_chat";
    const info_text = document.createElement('div');
    const name_user = document.createElement('div');
    name_user.textContent = "Дженнифер";
    info_text.append(name_user);
    const new_line = document.createElement('div');
    new_line.className = "break";
    info_text.append(new_line);
    const message = document.createElement('div');
    message.className = "small_message";
    message.textContent = last_message;
    info_text.append(message);    
    info_chat.append(info_text);
    const indicators = document.createElement('div');
    indicators.className = "indicators";
    const time = document.createElement('div');
    time.className = "small_message";
    time.textContent = last_time;
    indicators.append(time);
    indicators.append(new_line);
    const not_read = document.createElement('div');
    not_read.className = "not_read";
    not_read.textContent = colvo;
    indicators.append(not_read);    
    info_chat.append(indicators);
    chat.append(info_chat); 
    list_chats.append(chat);
}
for (let i = 0; i < 20; i++) {
    if(localStorage.getItem(max_index.index)){
        rendering_chat(JSON.parse(localStorage.getItem(max_index.index)).message, JSON.parse(localStorage.getItem(max_index.index)).time_loc, (parseInt(max_index.index) + 1).toString());
    }else{
        rendering_chat(" ", " ", (parseInt(max_index.index) + 1).toString());
    }
}
