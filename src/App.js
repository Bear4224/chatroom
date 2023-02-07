import React, { useState, useEffect } from 'react';
import Username from './Username';
import ChatLog from './ChatLog';
import MessageInput from './MessageInput';
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
  
  const [username, setUsername] = useState('Roger');
  const [messageInput, setMessageInput] = useState('New chat');
  const [chatLog, setChatLog] = useState([]);
  
  const onChange = (evt) => setMessageInput(evt.target.value);
  
  const onSubmit = function(evt) {
    evt.preventDefault();
    console.log('Submitted!');
  }
  
  return (
    <>
    <div className="chat-title">GusTheChat</div>
    <div className="chat-container">
      <Username username={username} />
      <ChatLog chatLog={chatLog} />
      <MessageInput messageInput={messageInput} onChange={onChange} onSubmit={onSubmit} />
    </div>
    </>
  );
}

export default App;
