import React, { useState } from 'react';

const ChatForm = ({ setChatHistory }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    setChatHistory(prev => [...prev, { type: 'user', text: inputMessage }]);

    // Simulate bot response (you can replace this with actual API call)
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        type: 'bot',
        text: "I'm a demo chatbot. This is a simulated response."
      }]);
    }, 500);

    setInputMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="chat-input-box">
        <input
          type="text"
          placeholder="Enter a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button type="submit">
          <span className="material-symbols-rounded">send</span>
        </button>
      </div>
    </form>
  );
};

export default ChatForm;
