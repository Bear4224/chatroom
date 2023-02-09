import React, { useState, useEffect } from 'react';
//import Username from './Username';
//import ChatLog from './ChatLog';
//import MessageInput from './MessageInput';
//import './App.css';
import Chat from './Chat.js';
import './GusTheChat.css';

function App(props) {

  useEffect(() => {
    props.firebase.database().ref('chatLog').on('value', snapshot => {
      let items = snapshot.val();
      if (items) {
        items = Object.values(items);
      } else {
        items = [];
      }
      setChatLog(items);
    })
  }, [props.firebase])
  
  const [username, setUsername] = useState('Jacob');
  const [messageInput, setMessageInput] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [appstate, setAppState] = useState('login');

  const onChange = (evt) => setMessageInput(evt.target.value);
  
  const onSubmit = function(evt) {
    evt.preventDefault();
    if (messageInput.length === 0) return;
    let payload = {message: messageInput, username: username};
    props.firebase.database().ref('chatLog').push(payload);
    setMessageInput('');
  }
  
  return (
    <Chat username={username}
          chatLog={chatLog}
          messageInput={messageInput}
          onChange={onChange}
          onSubmit={onSubmit} />
  );
}

export default App;
