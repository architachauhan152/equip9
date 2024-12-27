import React, { useState } from 'react';
// import './Chat.css';

const Chat = ({ contact }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;
    const newMessage = { text: input, createdAt: new Date() };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>{contact.name}</h3>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
