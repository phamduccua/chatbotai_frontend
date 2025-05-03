import { useRef } from 'react';

function ChatForm({setChatHistory}){
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if(!userMessage) return;
    inputRef.current.value = ""; // Clear the input field after sending the message

    setChatHistory(history => [...history,{ role: "user", text: userMessage}]);
    
    //add a delay to simulate the bot thinking
    setTimeout(() => setChatHistory((history) => [...history,{ role: "model", text: "Thinking..."}]), 600);
  }
 

    return (
        <form className="chat-form" onSubmit={handleFormSubmit}>
          <textarea placeholder="Message..." className="message-input" required  ref={inputRef} ></textarea>
          <div className="chat-controls">
            <button type="button" className="material-symbols-outlined">mood</button>
            <div className="file-upload-wrapper">
              <input type="file" accept="images/*" id="file-input" hidden />
              <img src="#" alt="preview" />
              <button type="button" id="file-upload" className="material-symbols-outlined">attach_file</button>
              <button type="button" id="file-cancel" className="material-symbols-outlined">close</button>
            </div>
            <button type="submit" id="send-message" className="material-symbols-outlined">arrow_upward</button>
          </div>
        </form>

    );

};

export default ChatForm;