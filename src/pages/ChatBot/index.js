import React, { useState } from 'react';
import className from 'classnames/bind'
import ChatForm from "./component/ChatForm";
import ChatMessage from "./component/ChatMessage";
import ChatbotIcon from "./component/ChatbotIcon";
import style from './ChatBot.module.scss'

const cx = className.bind(style)
function ChatBot(){
    const [chatHistory, setChatHistory] = useState([]);
    const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className={cx(`container ${showChatbot ? "show-chatbot" : ""}`)}>
      <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
        <span className={cx("material-symbols-rounded")}>
          {showChatbot ? "close" : "mode_comment"}
        </span>
      </button>

      <div className={cx("chatbot-popup")}>
        <div className={cx("chat-header")}>
          <div className={cx("header-info")}>
            <ChatbotIcon />
            <h2 className={cx("logo-text")}>Chatbot</h2>
          </div>
          <button
            id="close-chatbot"
            className={cx("material-symbols-outlined")}
            onClick={() => setShowChatbot(false)}
          >
            expand_more
          </button>
        </div>

        <div className={cx("chat-body")}>
          <div className={cx("message bot-message")}>
            <ChatbotIcon />
            <div className={cx("message-text")}>
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
}
export default ChatBot;