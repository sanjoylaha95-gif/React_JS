import React from 'react';
function ChatMessage({message,sender}){
  // const message=props.message;
  // const sender=props.sender;
  // const{message,sender}=props;
  /*if(sender==='robot'){
    return(
      <div>
        <img src="/robot.png" alt="User" width="50"/>
        {message}
      
      </div>
    );
  }*/
  return(
    <div className={sender==='user'?'chat-msg-user':'chat-msg-robot'}>
      {sender==='robot' && <img src="/robot.png" alt="User" className="chat-msg-profile"/>}
      <div className="chat-msg-txt">
        {message}
      </div>
      {sender==='user' && <img src="/user.png" alt="User" className="chat-msg-profile"/>}
    </div>
  );
}
export default ChatMessage;