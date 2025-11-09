import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ChatInput} from './Components/ChatInput.js';
import ChatMessage from './Components/ChatMessage';
<script src="https://unpkg.com/supersimpledev/chatbot.js"></script>


function ChatMessages({chatMessages}){
  const chatMessagesRef=React.useRef(null);
  React.useEffect(() => {
    const containerElem=chatMessagesRef.current;
    if(containerElem){
      containerElem.scrollTop=containerElem.scrollHeight;
    }
  },[chatMessages]);
  return(
    <div className="chat-msgs-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage)=>{
            return(
              <ChatMessage
                message={chatMessage.message}
                sender={chatMessage.sender}
                key={chatMessage.id}
              />
            );
          })}
    </div>
  );
}
function App() {
  const array=React.useState([
    {
      message:"Hello Chatbot", 
      sender:"user",
      id:"id1" 
    },{
      message:"Hello! How can I help you?" , 
      sender:"robot",
      id:"id2"
    },{
      message:"Can you get me today's date?", 
      sender:"user",
      id:"id3"
    }
  ]);
  const [chatMessages,setChatMessages]=array;
  // const chatMessages=array[0];
  // const setChatMessages=array[1];
  
  

  return (
    <div className="App">
    
        <ChatMessages
        chatMessages={chatMessages}
        />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        >
        </ChatInput>
      
    </div>
  );
}

export default App;

