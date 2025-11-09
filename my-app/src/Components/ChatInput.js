import React from 'react';
// import logo from './logo.svg';
// import './App.css';
<script src="https://unpkg.com/supersimpledev/chatbot.js"></script>

export function ChatInput({chatMessages,setChatMessages}){
  const [inputText,setInputText]=React.useState('');
  function SaveInputText(event){
    setInputText(event.target.value);
  }
  function SendMessage(){
    const newChatMessages=[
      ...chatMessages,
      {
      message:inputText,
      sender:'user',
      id:crypto.randomUUID
    }
    ];
  setChatMessages(newChatMessages);
    const response=window.Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
      message:response,
      sender:'robot',
      id:crypto.randomUUID
    }
    ]);
    setInputText('');
  }
  return(
    <div className="chat-ip-container">
      <input 
        placeholder="send a message to Chatbot" 
        size="30"
        onChange={SaveInputText}
        value={inputText}
        className="chat-input"
      ></input>
      <button
      onClick={SendMessage}
      className="send-button"
      >Send</button>
    </div>
  );
}