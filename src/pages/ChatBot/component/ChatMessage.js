import ChatbotIcon from "./Chatboticon";

const ChatMessage = ({chat}) => {
    return (
        <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message`}>
            {chat.role === "model" && <ChatbotIcon />}
            <div className="message-text">
                {chat.text}
                {chat.file && (
                    <img 
                        src={`data:${chat.file.mime_type};base64,${chat.file.data}`}
                        alt="attachment"
                        className="attachment"
                    />
                )}
            </div>
        </div>
    );
};

export default ChatMessage;
