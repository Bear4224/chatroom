import React from 'react';
import Username from './Username';
import ChatLog from './ChatLog';
import MessageInput from './MessageInput';

function Chat(props) {
  return (
    <>
    <div className="chat-title">GusTheChat</div>
    <div className="chat-container">
      <Username username={props.username} />
      <hr className="breakline"></hr>
      <ChatLog chatLog={props.chatLog} username={props.username}/>
      <MessageInput messageInput={props.messageInput}
                    onChange={props.onChange}
                    onSubmit={props.onSubmit} />
    </div>
    </>
  );
}

export default Chat;
