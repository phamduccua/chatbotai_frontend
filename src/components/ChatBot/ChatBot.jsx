import React, { useState } from 'react';
import ChatForm from './ChatForm';
import ChatbotIcon from './ChatbotIcon';
import ChatMessage from './ChatMessage';
import './ChatBot.css';

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className={`chatbot-container ${showChatbot ? "show-chatbot" : ""}`}>
      <button onClick={() => setShowChatbot(prev => !prev)} className="chatbot-toggler">
        <span className="material-symbols-rounded">
          {showChatbot ? "close" : "mode_comment"}
        </span>
      </button>

      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button
            className="close-chatbot material-symbols-outlined"
            onClick={() => setShowChatbot(false)}
          >
            expand_more
          </button>
        </div>

        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <div className="message-text">
              Hey there 👋 <br />
              How can I help you today? <br />
            </div>
          </div>
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        <div className="chat-footer">
          <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
