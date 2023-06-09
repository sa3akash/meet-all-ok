import React, { useState } from "react";
import sendMessageButton from "../../../assets/sendMessageButton.svg";
import * as wss from "../../../utils/wss";
import { useSelector } from "react-redux";

const NewMessage = () => {
  const [message, setMessage] = useState("");

  const {activeConversation,username} = useSelector(state=>state.room)

  const sendMessage = () => {
    wss.sendDirectMessage({
      receiverSocketId: activeConversation.socketId,
      username: username,
      messageContent: message,
    });
    
    setMessage("");
  };

  const handleTextChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="new_message_container new_message_direct_border">
      <input
        className="new_message_input"
        value={message}
        onChange={handleTextChange}
        placeholder="Type your message.."
        type="text"
        onKeyDown={handleKeyPressed}
      />
      <img
        className="new_message_button"
        src={sendMessageButton}
        onClick={sendMessage}
      />
    </div>
  );
};


export default NewMessage;