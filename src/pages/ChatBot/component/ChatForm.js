import { useRef, useState } from 'react';

const ChatForm = ({setChatHistory}) => {
  const inputRef = useRef();

  const generateBotResponse = async (userMessage) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          question: userMessage
        })
      };

      const response = await fetch("http://127.0.0.1:8000/chat", requestOptions);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || 'API request failed');
      }

      return data.answer.trim();
    } catch (error) {
      console.error('Error:', error);
      return "Sorry, I encountered an error while processing your request.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if(!userMessage) return;
    
    // Clear input
    inputRef.current.value = "";
    
    // Add user message to chat history
    setChatHistory(history => [...history, { role: "user", text: userMessage }]);
    
    // Add thinking message
    setChatHistory(history => [...history, { role: "model", text: "Thinking..." }]);

    // Get bot response
    const botResponse = await generateBotResponse(userMessage);
    
    // Update the thinking message with actual response
    setChatHistory(history => {
      const newHistory = [...history];
      newHistory[newHistory.length - 1] = { role: "model", text: botResponse };
      return newHistory;
    });
  };

  const handleKeyDown = (e) => {
    const userMessage = e.target.value.trim();
    if (e.key === "Enter" && userMessage) {
      handleSubmit(e);
    }
  };

  return (
    <form className="chat-form" onSubmit={handleSubmit}>
      <textarea 
        placeholder="Message..." 
        className="message-input" 
        required 
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <div className="chat-controls">
        <button type="button" className="material-symbols-outlined">mood</button>
        <button type="submit" id="send-message" className="material-symbols-outlined">
          arrow_upward
        </button>
      </div>
    </form>
  );
};

export default ChatForm;
