import React, { useState } from 'react';
import Username from './Username';
import ChatLog from './ChatLog';
import MessageInput from './MessageInput';
import './App.css';

function App() {

  const testChatLog = [
    { username: 'Roger', message: 'Are you going to the basketball game tonight?' },
    { username: 'David', message: 'Yes I am... what are you doing after the game?' },
    { username: 'Roger', message: 'Going home... what about you?' },
    { username: 'David', message: "I'm going to Denny's - you want to go too?" },
    { username: 'Roger', message: 'Sounds good -- see you there' }
  ];


  const [username, setUsername] = useState('Roger');
  const [messageInput, setMessageInput] = useState('New chat');
  const [chatLog, setChatLog] = useState(testChatLog);

  return (
    <>
    <div className="chat-title">GusTheChat</div>
    <div className="chat-container">
      <div className="username-box"><Username username={username} /></div>
      <ChatLog chatLog={chatLog} username={username}/>
      <MessageInput messageInput={messageInput} />
    </div>
    </>
  );
}

export default App;
