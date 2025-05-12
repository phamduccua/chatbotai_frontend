import ChatForm from "./components/ChatForm";
import ChatbotIcon from "./components/Chatboticon";
import ChatMessage from "./components/ChatMessage";
import React, { useState } from 'react';

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
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
            id="close-chatbot"
            className="material-symbols-outlined"
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
