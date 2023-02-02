import React, { useState } from 'react';
import Username from './Username';
import ChatLog from './ChatLog';
import MessageInput from './MessageInput';
import './App.css';

function App() {

  const [username, setUsername] = useState('Test user');
  const [messageInput, setMessageInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  return (
    <div className="chat-container">
      <Username username={username} />
      <ChatLog chatLog={chatLog} />
      <MessageInput messageInput={messageInput} />
    </div>
  );
}

export default App;
