import React from 'react';
import Username from './Username';
import ChatLog from './ChatLog';
import MessageInput from './MessageInput';
import './App.css';

function App() {

  return (
    <div className="chat-container">
      <Username />
      <ChatLog />
      <MessageInput />
    </div>
  );
}

export default App;
