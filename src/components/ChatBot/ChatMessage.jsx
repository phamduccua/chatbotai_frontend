import React from 'react';

const ChatMessage = ({ chat }) => {
  return (
    <div className={`message ${chat.type}-message`}>
      {chat.type === 'bot' && (
        <div className="chatbot-icon">🤖</div>
      )}
      <div className="message-text">{chat.text}</div>
    </div>
  );
};

export default ChatMessage;
